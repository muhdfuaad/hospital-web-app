using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using HmsApi.Data;
using HmsApi.Models;

namespace HmsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VolunteersController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly string _connectionString = "";

        public VolunteersController(AppDbContext context, IConfiguration configuration)
        {
            _context = context;
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        // GET: api/Volunteers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Volunteer>>> GetVolunteers()
        {
            return await _context.Volunteers.ToListAsync();
        }
        [HttpGet("all-volunteers")]
        public async Task<ActionResult<IEnumerable<object>>> GetAllVolunteers()
        {
            var volunteers = await _context.Volunteers
                .Select(v => new {
                    id = v.Vol_Id.ToString(), // Assuming Vol_Id is used
                    name = v.VolName ?? "",
                    phone = v.Phone ?? ""
                })
                .ToListAsync();

            return Ok(volunteers);
        }

        // GET: api/Volunteers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Volunteer>> GetVolunteer(int id)
        {
            var volunteer = await _context.Volunteers.FindAsync(id);

            if (volunteer == null)
            {
                return NotFound();
            }

            return volunteer;
        }

        // GET: api/Volunteers/by-vol-id/VOL123
        [HttpGet("by-vol-id/{volId}")]
        public async Task<ActionResult<Volunteer>> GetVolunteerByVolId(int volId)
        {
            var volunteer = await _context.Volunteers.FirstOrDefaultAsync(v => v.Vol_Id == volId);

            if (volunteer == null)
            {
                return NotFound();
            }

            return volunteer;
        }

        [HttpGet("get-id")]
        public async Task<ActionResult<string>> getVolId()
        {
            return getId().ToString();
        }

        // PUT: api/Volunteers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVolunteer(int id, [FromForm] VolunteerDto volunteerDto)
        {
            var existingVolunteer = await _context.Volunteers.FindAsync(id);
            if (existingVolunteer == null)
            {
                return NotFound();
            }

            // Handle the uploaded photo file, if any
            string photoFileName = existingVolunteer.Photo; // Keep existing photo by default
            if (volunteerDto.Photo != null && volunteerDto.Photo.Length > 0)
            {
                // Example: save file to wwwroot/uploads folder (create this folder in your project)
                var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                photoFileName = Guid.NewGuid().ToString() + Path.GetExtension(volunteerDto.Photo.FileName);
                var filePath = Path.Combine(uploadsFolder, photoFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await volunteerDto.Photo.CopyToAsync(stream);
                }

                // Delete old photo if it exists
                if (!string.IsNullOrEmpty(existingVolunteer.Photo))
                {
                    var oldFilePath = Path.Combine(uploadsFolder, existingVolunteer.Photo);
                    if (System.IO.File.Exists(oldFilePath))
                    {
                        System.IO.File.Delete(oldFilePath);
                    }
                }
            }

            // Update existing volunteer with new data (Keep the same Vol_Id - DO NOT CHANGE IT)
            // existingVolunteer.Vol_Id remains the same - this is key for editing
            existingVolunteer.VolName = volunteerDto.VolName;
            existingVolunteer.Gender = volunteerDto.Gender;
            existingVolunteer.Dob = volunteerDto.Dob;
            existingVolunteer.Age = volunteerDto.Age;
            existingVolunteer.BloodGroup = volunteerDto.BloodGroup;
            existingVolunteer.Address = volunteerDto.Address;
            existingVolunteer.District = volunteerDto.District;
            existingVolunteer.Panchayath = volunteerDto.Panchayath;
            existingVolunteer.Ward_no = volunteerDto.Ward_no;
            existingVolunteer.Phone = volunteerDto.Phone;
            existingVolunteer.Email = volunteerDto.Email;
            existingVolunteer.Type = volunteerDto.Type;
            existingVolunteer.Job = volunteerDto.Job;
            existingVolunteer.Status = volunteerDto.Status;
            existingVolunteer.Description = volunteerDto.Description;
            existingVolunteer.Photo = photoFileName;

            _context.Entry(existingVolunteer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VolunteerExists(id))
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

        // POST: api/Volunteers
        [HttpPost]
        public async Task<ActionResult<Volunteer>> PostVolunteer([FromForm] VolunteerDto volunteerDto)
        {
            if (volunteerDto == null)
                return BadRequest();

            // Handle the uploaded photo file, if any
            string photoFileName = null;
            if (volunteerDto.Photo != null && volunteerDto.Photo.Length > 0)
            {
                // Example: save file to wwwroot/uploads folder (create this folder in your project)
                var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                photoFileName = Guid.NewGuid().ToString() + Path.GetExtension(volunteerDto.Photo.FileName);
                var filePath = Path.Combine(uploadsFolder, photoFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await volunteerDto.Photo.CopyToAsync(stream);
                }
            }

            // Map DTO to Entity model
            var volunteer = new Volunteer
            {
                Vol_Id = getId(),
                VolName = volunteerDto.VolName,
                Gender = volunteerDto.Gender,
                Dob = volunteerDto.Dob,
                Age = volunteerDto.Age,
                BloodGroup = volunteerDto.BloodGroup,
                Address = volunteerDto.Address,
                District = volunteerDto.District,
                Panchayath = volunteerDto.Panchayath,
                Ward_no = volunteerDto.Ward_no,
                Phone = volunteerDto.Phone,
                Email = volunteerDto.Email,
                Type = volunteerDto.Type,
                Job = volunteerDto.Job,
                Status = volunteerDto.Status,
                Description = volunteerDto.Description,
                Photo = photoFileName  // Save file name or relative path in DB
            };

            _context.Volunteers.Add(volunteer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVolunteer", new { id = volunteer.Id }, volunteer);
        }

        // DELETE: api/Volunteers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVolunteer(int id)
        {
            var volunteer = await _context.Volunteers.FindAsync(id);
            if (volunteer == null)
            {
                return NotFound();
            }

            // Delete associated photo file if it exists
            if (!string.IsNullOrEmpty(volunteer.Photo))
            {
                var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
                var filePath = Path.Combine(uploadsFolder, volunteer.Photo);
                if (System.IO.File.Exists(filePath))
                {
                    System.IO.File.Delete(filePath);
                }
            }

            _context.Volunteers.Remove(volunteer);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VolunteerExists(int id)
        {
            return _context.Volunteers.Any(e => e.Id == id);
        }

        private int getId()
        {
            SqlConnection con = new SqlConnection(_connectionString);
            con.Open();
            string sql = "select ISNULL(MAX(Vol_Id),0)+1 FROM Volunteers;";
            SqlCommand cmd = new SqlCommand(sql, con);
            int Id = Convert.ToInt32(cmd.ExecuteScalar().ToString());
            con.Close();

            return Id;
        }
    }
}