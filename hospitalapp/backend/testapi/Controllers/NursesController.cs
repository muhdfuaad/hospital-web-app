using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using testapi.Data;
using testapi.Models;

namespace testapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NursesController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly string _connectionString = "";

        public NursesController(AppDbContext context, IConfiguration configuration)
        {
            _context = context;
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        // GET: api/Nurses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Nurse>>> GetNurses()
        {
            return await _context.Nurses.ToListAsync();
        }

        [HttpGet("all-nurses")]
        public async Task<ActionResult<IEnumerable<object>>> GetAllNurses()
        {
            var nurses = await _context.Nurses
                .Select(n => new {
                    id = n.Nurse_Id.ToString(), // Adjust field name as per your model
                    name = n.NurseName ?? "",
                    phone = n.Phone ?? ""
                })
                .ToListAsync();

            return Ok(nurses);
        }


        // GET: api/Nurses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Nurse>> GetNurse(int id)
        {
            var nurse = await _context.Nurses.FindAsync(id);

            if (nurse == null)
            {
                return NotFound();
            }

            return nurse;
        }

        // GET: api/Nurses/by-nurse-id/NURSE123
        [HttpGet("by-nurse-id/{nurseId}")]
        public async Task<ActionResult<Nurse>> GetNurseByNurseId(string nurseId)
        {
            var nurse = await _context.Nurses.FirstOrDefaultAsync(n => n.Nurse_Id == nurseId);

            if (nurse == null)
            {
                return NotFound();
            }

            return nurse;
        }

        [HttpGet("get-id")]
        public async Task<ActionResult<string>> getNurseId()
        {
            return getId().ToString();
        }

        // PUT: api/Nurses/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNurse(int id, [FromForm] NurseDto nurseDto)
        {
            var existingNurse = await _context.Nurses.FindAsync(id);
            if (existingNurse == null)
            {
                return NotFound();
            }

            // Handle the uploaded photo file, if any
            string photoFileName = existingNurse.Photo; // Keep existing photo by default
            if (nurseDto.Photo != null && nurseDto.Photo.Length > 0)
            {
                // Example: save file to wwwroot/uploads folder (create this folder in your project)
                var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                photoFileName = Guid.NewGuid().ToString() + Path.GetExtension(nurseDto.Photo.FileName);
                var filePath = Path.Combine(uploadsFolder, photoFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await nurseDto.Photo.CopyToAsync(stream);
                }

                // Delete old photo if it exists
                if (!string.IsNullOrEmpty(existingNurse.Photo))
                {
                    var oldFilePath = Path.Combine(uploadsFolder, existingNurse.Photo);
                    if (System.IO.File.Exists(oldFilePath))
                    {
                        System.IO.File.Delete(oldFilePath);
                    }
                }
            }

            // Update existing nurse with new data (Keep the same Nurse_Id - DO NOT CHANGE IT)
            // existingNurse.Nurse_Id remains the same - this is key for editing
            existingNurse.District = nurseDto.District;
            existingNurse.Panchayath = nurseDto.Panchayath;
            existingNurse.Ward_no = nurseDto.Ward_no;
            existingNurse.NurseName = nurseDto.NurseName;
            existingNurse.Address = nurseDto.Address;
            existingNurse.Gender = nurseDto.Gender;
            existingNurse.Dob = nurseDto.Dob;
            existingNurse.Age = nurseDto.Age;
            existingNurse.BloodGroup = nurseDto.BloodGroup;
            existingNurse.Phone = nurseDto.Phone;
            existingNurse.Email = nurseDto.Email;
            existingNurse.Specialization = nurseDto.Specialization;
            existingNurse.Degree = nurseDto.Degree;
            existingNurse.Experience = nurseDto.Experience;
            existingNurse.LicenseNumber = nurseDto.LicenseNumber;
            existingNurse.Department = nurseDto.Department;
            existingNurse.Description = nurseDto.Description;
            existingNurse.Photo = photoFileName;

            _context.Entry(existingNurse).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NurseExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Nurses
        [HttpPost]
        public async Task<ActionResult<Nurse>> PostNurse([FromForm] NurseDto nurseDto)
        {
            if (nurseDto == null)
                return BadRequest();

            // Handle the uploaded photo file, if any
            string photoFileName = null;
            if (nurseDto.Photo != null && nurseDto.Photo.Length > 0)
            {
                // Example: save file to wwwroot/uploads folder (create this folder in your project)
                var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                photoFileName = Guid.NewGuid().ToString() + Path.GetExtension(nurseDto.Photo.FileName);
                var filePath = Path.Combine(uploadsFolder, photoFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await nurseDto.Photo.CopyToAsync(stream);
                }
            }

            // Map DTO to Entity model
            var nurse = new Nurse
            {
                Nurse_Id = getId().ToString(),
                District = nurseDto.District,
                Panchayath = nurseDto.Panchayath,
                Ward_no = nurseDto.Ward_no,
                NurseName = nurseDto.NurseName,
                Address = nurseDto.Address,
                Gender = nurseDto.Gender,
                Dob = nurseDto.Dob,
                Age = nurseDto.Age,
                BloodGroup = nurseDto.BloodGroup,
                Phone = nurseDto.Phone,
                Email = nurseDto.Email,
                Specialization = nurseDto.Specialization,
                Degree = nurseDto.Degree,
                Experience = nurseDto.Experience,
                LicenseNumber = nurseDto.LicenseNumber,
                Department = nurseDto.Department,
                Description = nurseDto.Description,
                Photo = photoFileName  // Save file name or relative path in DB
            };

            _context.Nurses.Add(nurse);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNurse", new { id = nurse.Id }, nurse);
        }

        // DELETE: api/Nurses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNurse(int id)
        {
            var nurse = await _context.Nurses.FindAsync(id);
            if (nurse == null)
            {
                return NotFound();
            }

            // Delete associated photo file if it exists
            if (!string.IsNullOrEmpty(nurse.Photo))
            {
                var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
                var filePath = Path.Combine(uploadsFolder, nurse.Photo);
                if (System.IO.File.Exists(filePath))
                {
                    System.IO.File.Delete(filePath);
                }
            }

            _context.Nurses.Remove(nurse);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NurseExists(int id)
        {
            return _context.Nurses.Any(e => e.Id == id);
        }

        private int getId()
        {
            SqlConnection con = new SqlConnection(_connectionString);
            con.Open();
            string sql = "select ISNULL(MAX(CAST(Nurse_Id AS INT)),0)+1 FROM Nurses;";
            SqlCommand cmd = new SqlCommand(sql, con);
            int Id = Convert.ToInt32(cmd.ExecuteScalar().ToString());
            con.Close();

            return Id;
        }
    }
}