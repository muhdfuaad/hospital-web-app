using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using testapi.Data;
using testapi.Models;

namespace testapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormregsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IWebHostEnvironment _env;

        public FormregsController(AppDbContext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        /*------------------------------------------------------------
         * HELPERS
         *-----------------------------------------------------------*/
        private string UploadRoot => Path.Combine(_env.WebRootPath, "uploads");

        private async Task<string?> SaveFileAsync(IFormFile? file)
        {
            if (file == null || file.Length == 0) return null;
            Directory.CreateDirectory(UploadRoot);
            var fileName = Guid.NewGuid() + Path.GetExtension(file.FileName);
            var fullPath = Path.Combine(UploadRoot, fileName);
            await using var fs = new FileStream(fullPath, FileMode.Create);
            await file.CopyToAsync(fs);
            return "/uploads/" + fileName;  // store relative path
        }

        private void DeleteFileIfExists(string? relPath)
        {
            if (string.IsNullOrWhiteSpace(relPath)) return;
            var full = Path.Combine(_env.WebRootPath, relPath.TrimStart('/', '\\'));
            if (System.IO.File.Exists(full)) System.IO.File.Delete(full);
        }

        /*------------------------------------------------------------
         * DTO – expects multipart/form-data
         *-----------------------------------------------------------*/
        public class FormregDto
        {
            public string Name { get; set; } = string.Empty;
            public string Regno { get; set; } = string.Empty;
            public string Gender { get; set; } = ""; // "0" / "1"
            public string Dob { get; set; } = string.Empty; // yyyy-MM-dd
            public string Address { get; set; } = string.Empty;
            public string Nation { get; set; } = string.Empty;
            public string Email { get; set; } = string.Empty;
            public string Phone { get; set; } = string.Empty;
            public bool IsNew { get; set; }
            public IFormFile? Photo { get; set; }
            public IFormFile? PdfFile { get; set; }
            // following two are used only when client wants to keep old paths (edit without new upload)
            public string? Photopath { get; set; }
            public string? Pdfpath { get; set; }
        }

        /*------------------------------------------------------------
         * GET
         *-----------------------------------------------------------*/
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Formreg>>> GetFormregs() =>
            await _context.Formregs.ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<Formreg>> GetFormreg(int id)
        {
            var entity = await _context.Formregs.FindAsync(id);
            return entity == null ? NotFound() : entity;
        }

        /*------------------------------------------------------------
         * DELETE  – remove files first, then DB row
         *-----------------------------------------------------------*/
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFormreg(int id)
        {
            var item = await _context.Formregs.FindAsync(id);
            if (item == null) return NotFound();

            DeleteFileIfExists(item.Photopath);
            DeleteFileIfExists(item.Pdfpath);

            _context.Formregs.Remove(item);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        /*------------------------------------------------------------
         * POST  – create + rollback files if DB fails
         *-----------------------------------------------------------*/
        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<ActionResult<Formreg>> PostFormreg([FromForm] FormregDto dto)
        {
            if (!int.TryParse(dto.Gender, out var gender))
                return BadRequest("Gender must be 0/1.");
            if (!DateTime.TryParse(dto.Dob, out var dob))
                return BadRequest("Dob format wrong.");

            // save files first
            string? newPhotoPath = await SaveFileAsync(dto.Photo);
            string? newPdfPath = await SaveFileAsync(dto.PdfFile);

            var entity = new Formreg
            {
                Name = dto.Name,
                Regno = dto.Regno,
                Gender = gender,
                Dob = dob,
                Address = dto.Address,
                Nation = dto.Nation,
                Email = dto.Email,
                Phone = dto.Phone,
                IsNew = dto.IsNew,
                Photopath = newPhotoPath ?? "",
                Pdfpath = newPdfPath ?? ""
            };
            _context.Formregs.Add(entity);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch
            {
                // rollback orphan files
                DeleteFileIfExists(newPhotoPath);
                DeleteFileIfExists(newPdfPath);
                throw;
            }

            return CreatedAtAction(nameof(GetFormreg), new { id = entity.Id }, entity);
        }

        /*------------------------------------------------------------
         * PUT – update + safe file replacement
         *-----------------------------------------------------------*/
        [HttpPut("{id}")]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> PutFormreg(int id, [FromForm] FormregDto dto)
        {
            var existing = await _context.Formregs.FindAsync(id);
            if (existing == null) return NotFound();

            if (!int.TryParse(dto.Gender, out var gender))
                return BadRequest("Gender must be 0/1");
            if (!DateTime.TryParse(dto.Dob, out var dob))
                return BadRequest("Dob format wrong");

            // track old paths in case save succeeds
            string? oldPhotoToDelete = null;
            string? oldPdfToDelete = null;
            string? newPhotoPath = null;
            string? newPdfPath = null;

            // ---------- PHOTO ----------
            if (dto.Photo != null && dto.Photo.Length > 0)
            {
                newPhotoPath = await SaveFileAsync(dto.Photo);
                oldPhotoToDelete = existing.Photopath;
                existing.Photopath = newPhotoPath;
            }
            else if (!string.IsNullOrEmpty(dto.Photopath))
            {
                existing.Photopath = dto.Photopath; // keep old
            }

            // ---------- PDF ----------
            if (dto.PdfFile != null && dto.PdfFile.Length > 0)
            {
                newPdfPath = await SaveFileAsync(dto.PdfFile);
                oldPdfToDelete = existing.Pdfpath;
                existing.Pdfpath = newPdfPath;
            }
            else if (!string.IsNullOrEmpty(dto.Pdfpath))
            {
                existing.Pdfpath = dto.Pdfpath;
            }

            // ---------- scalar fields ----------
            existing.Name = dto.Name;
            existing.Regno = dto.Regno;
            existing.Gender = gender;
            existing.Dob = dob;
            existing.Address = dto.Address;
            existing.Nation = dto.Nation;
            existing.Email = dto.Email;
            existing.Phone = dto.Phone;
            existing.IsNew = dto.IsNew;

            try
            {
                await _context.SaveChangesAsync();
                // DB succeeded – delete old files now
                DeleteFileIfExists(oldPhotoToDelete);
                DeleteFileIfExists(oldPdfToDelete);
            }
            catch
            {
                // DB failed – remove newly saved replacements to avoid orphans
                DeleteFileIfExists(newPhotoPath);
                DeleteFileIfExists(newPdfPath);
                throw;
            }

            return NoContent();
        }
    }
}
