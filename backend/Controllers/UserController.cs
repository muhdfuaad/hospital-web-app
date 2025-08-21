using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HmsApi.Data;
using HmsApi.Models;

namespace HmsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IWebHostEnvironment _env;
        private readonly AppDbContext _context;

        public UserController(IWebHostEnvironment env, AppDbContext context)
        {
            _env = env;
            _context = context;
        }

        // CREATE (POST)
        [HttpPost("upload")]
        public async Task<IActionResult> Upload([FromForm] UserDto dto)
        {
            if (dto.Photo == null || dto.Photo.Length == 0)
                return BadRequest("Photo is required.");

            var uploadsDir = Path.Combine(_env.WebRootPath, "uploads");
            if (!Directory.Exists(uploadsDir))
                Directory.CreateDirectory(uploadsDir);

            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(dto.Photo.FileName);
            var filePath = Path.Combine(uploadsDir, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await dto.Photo.CopyToAsync(stream);
            }

            var user = new User
            {
                Name = dto.Name,
                Address = dto.Address,
                Email = dto.Email,
                Mobile = dto.Mobile,
                PhotoPath =  fileName
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Saved successfully", imageUrl = user.PhotoPath });
        }
        // READ ALL
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var users = await _context.Users.ToListAsync();
            return Ok(users);
        }

        // READ BY ID
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
                return NotFound();

            return Ok(user);
        }

        // UPDATE (PUT)
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromForm] UserDto dto)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null) return NotFound();

            user.Name = dto.Name;
            user.Address = dto.Address;
            user.Email = dto.Email;
            user.Mobile = dto.Mobile;

            if (dto.Photo != null)
            {
                var uploadsDir = Path.Combine(_env.WebRootPath, "uploads");
                var fileName = Guid.NewGuid().ToString() + Path.GetExtension(dto.Photo.FileName);
                var filePath = Path.Combine(uploadsDir, fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await dto.Photo.CopyToAsync(stream);
                }

                user.PhotoPath = fileName;
            }

            _context.Users.Update(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Updated successfully", imageUrl = user.PhotoPath });
        }

        // DELETE
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null) return NotFound();

            // Optionally delete photo from disk
            var photoPath = Path.Combine(_env.WebRootPath, user.PhotoPath.TrimStart('/'));
            if (System.IO.File.Exists(photoPath))
            {
                System.IO.File.Delete(photoPath);
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Deleted successfully" });
        }
    }
}
