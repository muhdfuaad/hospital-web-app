using System;
using System.Collections.Generic;
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
    public class DoctorsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly string _connectionString = "";

        public DoctorsController(AppDbContext context, IConfiguration configuration)
        {
            _context = context;
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        // GET: api/Doctors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Doctor>>> GetDoctors()
        {
            return await _context.Doctors.ToListAsync();
        }

        [HttpGet("all-doctors")]
        public async Task<ActionResult<IEnumerable<object>>> GetAllDoctors()
        {
            var doctors = await _context.Doctors
                .Select(d => new {
                    id = d.Doc_Id,
                    name = d.DocName,
                    phone = d.Phone
                })
                .ToListAsync();

            return Ok(doctors); // ✅ Must return an array []
        }

        // GET: api/Doctors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Doctor>> GetDoctor(int id)
        {
            var doctor = await _context.Doctors.FindAsync(id);

            if (doctor == null)
            {
                return NotFound();
            }

            return doctor;
        }

        // GET: api/Doctors/by-doc-id/DOC123
        [HttpGet("by-doc-id/{docId}")]
        public async Task<ActionResult<Doctor>> GetDoctorByDocId(string docId)
        {
            var doctor = await _context.Doctors.FirstOrDefaultAsync(d => d.Doc_Id == docId);

            if (doctor == null)
            {
                return NotFound();
            }

            return doctor;
        }

        [HttpGet("get-id")]
        public async Task<ActionResult<string>> getDocId()
        {
            return getId().ToString();
        }

        // PUT: api/Doctors/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDoctor(int id, [FromForm] DoctorDto doctorDto)
        {
            var existingDoctor = await _context.Doctors.FindAsync(id);
            if (existingDoctor == null)
            {
                return NotFound();
            }

            // Handle the uploaded photo file, if any
            string photoFileName = existingDoctor.Photo; // Keep existing photo by default
            if (doctorDto.Photo != null && doctorDto.Photo.Length > 0)
            {
                // Example: save file to wwwroot/uploads folder (create this folder in your project)
                var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                photoFileName = Guid.NewGuid().ToString() + Path.GetExtension(doctorDto.Photo.FileName);
                var filePath = Path.Combine(uploadsFolder, photoFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await doctorDto.Photo.CopyToAsync(stream);
                }

                // Delete old photo if it exists
                if (!string.IsNullOrEmpty(existingDoctor.Photo))
                {
                    var oldFilePath = Path.Combine(uploadsFolder, existingDoctor.Photo);
                    if (System.IO.File.Exists(oldFilePath))
                    {
                        System.IO.File.Delete(oldFilePath);
                    }
                }
            }

            // Update existing doctor with new data (Keep the same Doc_Id - DO NOT CHANGE IT)
            // existingDoctor.Doc_Id remains the same - this is key for editing
            existingDoctor.District = doctorDto.District;
            existingDoctor.Panchayath = doctorDto.Panchayath;
            existingDoctor.Ward_no = doctorDto.Ward_no;
            existingDoctor.DocName = doctorDto.DocName;
            existingDoctor.Address = doctorDto.Address;
            existingDoctor.Gender = doctorDto.Gender;
            existingDoctor.Dob = doctorDto.Dob;
            existingDoctor.Age = doctorDto.Age;
            existingDoctor.BloodGroup = doctorDto.BloodGroup;
            existingDoctor.Phone = doctorDto.Phone;
            existingDoctor.Email = doctorDto.Email;
            existingDoctor.Specialization = doctorDto.Specialization;
            existingDoctor.Degree = doctorDto.Degree;
            existingDoctor.Experience = doctorDto.Experience;
            existingDoctor.LicenseNumber = doctorDto.LicenseNumber;
            existingDoctor.Department = doctorDto.Department;
            existingDoctor.Description = doctorDto.Description;
            existingDoctor.Photo = photoFileName;

            _context.Entry(existingDoctor).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DoctorExists(id))
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

        // POST: api/Doctors
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Doctor>> PostDoctor([FromForm] DoctorDto doctorDto)
        {
            if (doctorDto == null)
                return BadRequest();

            // Handle the uploaded photo file, if any
            string photoFileName = null;
            if (doctorDto.Photo != null && doctorDto.Photo.Length > 0)
            {
                // Example: save file to wwwroot/uploads folder (create this folder in your project)
                var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                photoFileName = Guid.NewGuid().ToString() + Path.GetExtension(doctorDto.Photo.FileName);
                var filePath = Path.Combine(uploadsFolder, photoFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await doctorDto.Photo.CopyToAsync(stream);
                }
            }

            // Map DTO to Entity model
            var doctor = new Doctor
            {
                Doc_Id = getId().ToString(),
                District = doctorDto.District,
                Panchayath = doctorDto.Panchayath,
                Ward_no = doctorDto.Ward_no,
                DocName = doctorDto.DocName,
                Address = doctorDto.Address,
                Gender = doctorDto.Gender,
                Dob = doctorDto.Dob,
                Age = doctorDto.Age,
                BloodGroup = doctorDto.BloodGroup,
                Phone = doctorDto.Phone,
                Email = doctorDto.Email,
                Specialization = doctorDto.Specialization,
                Degree = doctorDto.Degree,
                Experience = doctorDto.Experience,
                LicenseNumber = doctorDto.LicenseNumber,
                Department = doctorDto.Department,
                Description = doctorDto.Description,
                Photo = photoFileName  // Save file name or relative path in DB
            };

            _context.Doctors.Add(doctor);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDoctor", new { id = doctor.Id }, doctor);
        }

        // DELETE: api/Doctors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDoctor(int id)
        {
            var doctor = await _context.Doctors.FindAsync(id);
            if (doctor == null)
            {
                return NotFound();
            }

            // Delete associated photo file if it exists
            if (!string.IsNullOrEmpty(doctor.Photo))
            {
                var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
                var filePath = Path.Combine(uploadsFolder, doctor.Photo);
                if (System.IO.File.Exists(filePath))
                {
                    System.IO.File.Delete(filePath);
                }
            }

            _context.Doctors.Remove(doctor);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DoctorExists(int id)
        {
            return _context.Doctors.Any(e => e.Id == id);
        }

        private int getId()
        {
            SqlConnection con = new SqlConnection(_connectionString);
            con.Open();
            string sql = "select ISNULL(MAX(CAST(Doc_Id AS INT)),0)+1 FROM Doctors;";
            SqlCommand cmd = new SqlCommand(sql, con);
            int Id = Convert.ToInt32(cmd.ExecuteScalar().ToString());
            con.Close();

            return Id;
        }
    }
}