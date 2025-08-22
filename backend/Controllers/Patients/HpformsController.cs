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
using HmsApi.Models.Patients;

namespace HmsApi.Controllers.Patients
{
    [Route("api/[controller]")]
    [ApiController]
    public class HpformsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly string _connectionString = "";

        public HpformsController(AppDbContext context, IConfiguration configuration)
        {
            _context = context;
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        // GET: api/Hpforms
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hpform>>> GetHpforms()
        {
            return await _context.Hpforms.ToListAsync();
        }

        [HttpGet("all-patients")]
        public async Task<ActionResult<IEnumerable<object>>> GetAllPatientsBasic()
        {
            var patients = await _context.Hpforms
                .Select(p => new {
                    id = p.PatientId.ToString(),
                    name = p.Name ?? "",
                    age = p.Age,
                    phone = p.PhoneNumber1 ?? ""
                })
                .ToListAsync();

            return Ok(patients);
        }

        // GET: api/Hpforms/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Hpform>> GetHpform(int id)
        {
            var hpform = await _context.Hpforms.FindAsync(id);

            if (hpform == null)
            {
                return NotFound();
            }

            return hpform;
        }

        // GET: api/Hpforms/patient/{patientId} - Fixed endpoint
        [HttpGet("patient/{patientId}")]
        public async Task<ActionResult<HpformsDto>> GetHpformByPatientId(int patientId)
        {
            var hpform = await _context.Hpforms.FirstOrDefaultAsync(h => h.PatientId == patientId);
            if (hpform == null) return NotFound();

            var dto = new HpformsDto
            {
                PatientId = hpform.PatientId,
                DistrictId = hpform.DistrictId,
                PanchayathId = hpform.PanchayathId,
                Ward = hpform.Ward,
                Area = hpform.Area,
                Date = hpform.Date?.Date ?? DateTime.Today, // 👈 This ensures no time component
                Diagnosis = hpform.Diagnosis,
                CategoryId = hpform.CategoryId,
                Status = hpform.Status,
                Name = hpform.Name,
                Age = hpform.Age,
                Gender = hpform.Gender,
                FinancialStatus = hpform.FinancialStatus,
                SpouseName = hpform.SpouseName,
                FatherName = hpform.FatherName,
                MotherName = hpform.MotherName,
                AdhaarAddress = hpform.AdhaarAddress,
                CurrentAddress = hpform.CurrentAddress,
                PhoneNumber1 = hpform.PhoneNumber1,
                PhoneNumber2 = hpform.PhoneNumber2,
                AdhaarNumber = hpform.AdhaarNumber,
                ContactPerson = hpform.ContactPerson,
                Relation = hpform.Relation,
                ContactPhone = hpform.ContactPhone,
                NeighbourResidence = hpform.NeighbourResidence,
                NeighbourPhone = hpform.NeighbourPhone,
                CommunityVolunteer = hpform.CommunityVolunteer,
                CommunityVolunteerPhone = hpform.CommunityVolunteerPhone,
                WardMember = hpform.WardMember,
                WardMemberPhone = hpform.WardMemberPhone,
                AashaVolunteer = hpform.AashaVolunteer,
                AashaVolunteerPhone = hpform.AashaVolunteerPhone,
                OtherPerson = hpform.OtherPerson,
                OtherPersonPhone = hpform.OtherPersonPhone,
                HouseRoute = hpform.HouseRoute
            };

            return Ok(dto);
        }


        // GET: api/Hpforms/get-patient-id
        [HttpGet("get-patient-id")]
        public async Task<ActionResult<string>> GetPatientId()
        {
            return getPatientId().ToString();
        }


        // PUT: api/Hpforms/patient/{patientId} - Fixed endpoint to match React code
        [HttpPut("patient/{patientId}")]
        public async Task<IActionResult> PutHpformByPatientId(string patientId, [FromForm] HpformsDto hpformDto)
        {
            var existingHpform = await _context.Hpforms.FirstOrDefaultAsync(h => h.PatientId.ToString() == patientId);
            if (existingHpform == null)
            {
                return NotFound();
            }

            // Handle the uploaded photo file, if any
            string photoFileName = existingHpform.Photograph; // Keep existing photo by default
            if (hpformDto.Photograph != null && hpformDto.Photograph.Length > 0)
            {
                // Example: save file to wwwroot/uploads folder (create this folder in your project)
                var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "photographs");
                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                photoFileName = Guid.NewGuid().ToString() + Path.GetExtension(hpformDto.Photograph.FileName);
                var filePath = Path.Combine(uploadsFolder, photoFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await hpformDto.Photograph.CopyToAsync(stream);
                }

                // Delete old photo if it exists
                if (!string.IsNullOrEmpty(existingHpform.Photograph))
                {
                    var oldFilePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "photographs", existingHpform.Photograph);
                    if (System.IO.File.Exists(oldFilePath))
                    {
                        System.IO.File.Delete(oldFilePath);
                    }
                }
            }

            // Handle the uploaded Aadhar document file, if any
            string aadharFileName = existingHpform.AadharDoc; // Keep existing document by default
            if (hpformDto.AadharDoc != null && hpformDto.AadharDoc.Length > 0)
            {
                // Example: save file to wwwroot/uploads folder (create this folder in your project)
                var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "aadhardocs");
                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                aadharFileName = Guid.NewGuid().ToString() + Path.GetExtension(hpformDto.AadharDoc.FileName);
                var filePath = Path.Combine(uploadsFolder, aadharFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await hpformDto.AadharDoc.CopyToAsync(stream);
                }

                // Delete old Aadhar document if it exists
                if (!string.IsNullOrEmpty(existingHpform.AadharDoc))
                {
                    var oldFilePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "aadhardocs", existingHpform.AadharDoc);
                    if (System.IO.File.Exists(oldFilePath))
                    {
                        System.IO.File.Delete(oldFilePath);
                    }
                }
            }

            // Update existing form with new data (Keep the same PatientId - DO NOT CHANGE IT)
            // existingHpform.PatientId remains the same - this is key for editing
            existingHpform.DistrictId = hpformDto.DistrictId;
            existingHpform.PanchayathId = hpformDto.PanchayathId;
            existingHpform.Ward = hpformDto.Ward;
            existingHpform.Area = hpformDto.Area;
            existingHpform.Date = hpformDto.Date;
            existingHpform.Diagnosis = hpformDto.Diagnosis;
            existingHpform.CategoryId = hpformDto.CategoryId;
            existingHpform.Status = hpformDto.Status;
            existingHpform.Name = hpformDto.Name;
            existingHpform.Age = hpformDto.Age;
            existingHpform.Gender = hpformDto.Gender;
            existingHpform.FinancialStatus = hpformDto.FinancialStatus;
            existingHpform.SpouseName = hpformDto.SpouseName;
            existingHpform.FatherName = hpformDto.FatherName;
            existingHpform.MotherName = hpformDto.MotherName;
            existingHpform.AdhaarAddress = hpformDto.AdhaarAddress;
            existingHpform.CurrentAddress = hpformDto.CurrentAddress;
            existingHpform.PhoneNumber1 = hpformDto.PhoneNumber1;
            existingHpform.PhoneNumber2 = hpformDto.PhoneNumber2;
            existingHpform.AdhaarNumber = hpformDto.AdhaarNumber;
            existingHpform.ContactPerson = hpformDto.ContactPerson;
            existingHpform.Relation = hpformDto.Relation;
            existingHpform.ContactPhone = hpformDto.ContactPhone;
            existingHpform.NeighbourResidence = hpformDto.NeighbourResidence;
            existingHpform.NeighbourPhone = hpformDto.NeighbourPhone;
            existingHpform.CommunityVolunteer = hpformDto.CommunityVolunteer;
            existingHpform.CommunityVolunteerPhone = hpformDto.CommunityVolunteerPhone;
            existingHpform.WardMember = hpformDto.WardMember;
            existingHpform.WardMemberPhone = hpformDto.WardMemberPhone;
            existingHpform.AashaVolunteer = hpformDto.AashaVolunteer;
            existingHpform.AashaVolunteerPhone = hpformDto.AashaVolunteerPhone;
            existingHpform.OtherPerson = hpformDto.OtherPerson;
            existingHpform.OtherPersonPhone = hpformDto.OtherPersonPhone;
            existingHpform.HouseRoute = hpformDto.HouseRoute;
            existingHpform.Photograph = photoFileName;
            existingHpform.AadharDoc = aadharFileName;

            _context.Entry(existingHpform).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HpformExistsByPatientId(patientId))
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

        // PUT: api/Hpforms/5 - Keep the original PUT method for ID-based updates
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHpform(int id, [FromForm] HpformsDto hpformDto)
        {
            var existingHpform = await _context.Hpforms.FindAsync(id);
            if (existingHpform == null)
            {
                return NotFound();
            }

            // Handle the uploaded photo file, if any
            string photoFileName = existingHpform.Photograph; // Keep existing photo by default
            if (hpformDto.Photograph != null && hpformDto.Photograph.Length > 0)
            {
                // Example: save file to wwwroot/uploads folder (create this folder in your project)
                var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "photographs");
                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                photoFileName = Guid.NewGuid().ToString() + Path.GetExtension(hpformDto.Photograph.FileName);
                var filePath = Path.Combine(uploadsFolder, photoFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await hpformDto.Photograph.CopyToAsync(stream);
                }

                // Delete old photo if it exists
                if (!string.IsNullOrEmpty(existingHpform.Photograph))
                {
                    var oldFilePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "photographs", existingHpform.Photograph);
                    if (System.IO.File.Exists(oldFilePath))
                    {
                        System.IO.File.Delete(oldFilePath);
                    }
                }
            }

            // Handle the uploaded Aadhar document file, if any
            string aadharFileName = existingHpform.AadharDoc; // Keep existing document by default
            if (hpformDto.AadharDoc != null && hpformDto.AadharDoc.Length > 0)
            {
                // Example: save file to wwwroot/uploads folder (create this folder in your project)
                var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "aadhardocs");
                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                aadharFileName = Guid.NewGuid().ToString() + Path.GetExtension(hpformDto.AadharDoc.FileName);
                var filePath = Path.Combine(uploadsFolder, aadharFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await hpformDto.AadharDoc.CopyToAsync(stream);
                }

                // Delete old Aadhar document if it exists
                if (!string.IsNullOrEmpty(existingHpform.AadharDoc))
                {
                    var oldFilePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "aadhardocs", existingHpform.AadharDoc);
                    if (System.IO.File.Exists(oldFilePath))
                    {
                        System.IO.File.Delete(oldFilePath);
                    }
                }
            }

            // Update existing form with new data (Keep the same PatientId - DO NOT CHANGE IT)
            // existingHpform.PatientId remains the same - this is key for editing
            existingHpform.DistrictId = hpformDto.DistrictId;
            existingHpform.PanchayathId = hpformDto.PanchayathId;
            existingHpform.Ward = hpformDto.Ward;
            existingHpform.Area = hpformDto.Area;
            existingHpform.Date = hpformDto.Date;
            existingHpform.Diagnosis = hpformDto.Diagnosis;
            existingHpform.CategoryId = hpformDto.CategoryId;
            existingHpform.Status = hpformDto.Status;
            existingHpform.Name = hpformDto.Name;
            existingHpform.Age = hpformDto.Age;
            existingHpform.Gender = hpformDto.Gender;
            existingHpform.FinancialStatus = hpformDto.FinancialStatus;
            existingHpform.SpouseName = hpformDto.SpouseName;
            existingHpform.FatherName = hpformDto.FatherName;
            existingHpform.MotherName = hpformDto.MotherName;
            existingHpform.AdhaarAddress = hpformDto.AdhaarAddress;
            existingHpform.CurrentAddress = hpformDto.CurrentAddress;
            existingHpform.PhoneNumber1 = hpformDto.PhoneNumber1;
            existingHpform.PhoneNumber2 = hpformDto.PhoneNumber2;
            existingHpform.AdhaarNumber = hpformDto.AdhaarNumber;
            existingHpform.ContactPerson = hpformDto.ContactPerson;
            existingHpform.Relation = hpformDto.Relation;
            existingHpform.ContactPhone = hpformDto.ContactPhone;
            existingHpform.NeighbourResidence = hpformDto.NeighbourResidence;
            existingHpform.NeighbourPhone = hpformDto.NeighbourPhone;
            existingHpform.CommunityVolunteer = hpformDto.CommunityVolunteer;
            existingHpform.CommunityVolunteerPhone = hpformDto.CommunityVolunteerPhone;
            existingHpform.WardMember = hpformDto.WardMember;
            existingHpform.WardMemberPhone = hpformDto.WardMemberPhone;
            existingHpform.AashaVolunteer = hpformDto.AashaVolunteer;
            existingHpform.AashaVolunteerPhone = hpformDto.AashaVolunteerPhone;
            existingHpform.OtherPerson = hpformDto.OtherPerson;
            existingHpform.OtherPersonPhone = hpformDto.OtherPersonPhone;
            existingHpform.HouseRoute = hpformDto.HouseRoute;
            existingHpform.Photograph = photoFileName;
            existingHpform.AadharDoc = aadharFileName;

            _context.Entry(existingHpform).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HpformExists(id))
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

        // POST: api/Hpforms
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Hpform>> PostHpform([FromForm] HpformsDto hpformDto)
        {
            if (hpformDto == null)
                return BadRequest();

            // Handle the uploaded photo file, if any
            string photoFileName = null;
            if (hpformDto.Photograph != null && hpformDto.Photograph.Length > 0)
            {
                // Example: save file to wwwroot/uploads folder (create this folder in your project)
                var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "photographs");
                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                photoFileName = Guid.NewGuid().ToString() + Path.GetExtension(hpformDto.Photograph.FileName);
                var filePath = Path.Combine(uploadsFolder, photoFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await hpformDto.Photograph.CopyToAsync(stream);
                }
            }

            // Handle the uploaded Aadhar document file, if any
            string aadharFileName = null;
            if (hpformDto.AadharDoc != null && hpformDto.AadharDoc.Length > 0)
            {
                // Example: save file to wwwroot/uploads folder (create this folder in your project)
                var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "aadhardocs");
                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                aadharFileName = Guid.NewGuid().ToString() + Path.GetExtension(hpformDto.AadharDoc.FileName);
                var filePath = Path.Combine(uploadsFolder, aadharFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await hpformDto.AadharDoc.CopyToAsync(stream);
                }
            }

            int PT_Id = getPatientId();

            // Map DTO to Entity model
            var hpform = new Hpform
            {
                PatientId = PT_Id,
                DistrictId = hpformDto.DistrictId,
                PanchayathId = hpformDto.PanchayathId,
                Ward = hpformDto.Ward,
                Area = hpformDto.Area,
                Date = hpformDto.Date,
                Diagnosis = hpformDto.Diagnosis,
                CategoryId = hpformDto.CategoryId,
                Status = hpformDto.Status,
                Name = hpformDto.Name,
                Age = hpformDto.Age,
                Gender = hpformDto.Gender,
                FinancialStatus = hpformDto.FinancialStatus,
                SpouseName = hpformDto.SpouseName,
                FatherName = hpformDto.FatherName,
                MotherName = hpformDto.MotherName,
                AdhaarAddress = hpformDto.AdhaarAddress,
                CurrentAddress = hpformDto.CurrentAddress,
                PhoneNumber1 = hpformDto.PhoneNumber1,
                PhoneNumber2 = hpformDto.PhoneNumber2,
                AdhaarNumber = hpformDto.AdhaarNumber,
                ContactPerson = hpformDto.ContactPerson,
                Relation = hpformDto.Relation,
                ContactPhone = hpformDto.ContactPhone,
                NeighbourResidence = hpformDto.NeighbourResidence,
                NeighbourPhone = hpformDto.NeighbourPhone,
                CommunityVolunteer = hpformDto.CommunityVolunteer,
                CommunityVolunteerPhone = hpformDto.CommunityVolunteerPhone,
                WardMember = hpformDto.WardMember,
                WardMemberPhone = hpformDto.WardMemberPhone,
                AashaVolunteer = hpformDto.AashaVolunteer,
                AashaVolunteerPhone = hpformDto.AashaVolunteerPhone,
                OtherPerson = hpformDto.OtherPerson,
                OtherPersonPhone = hpformDto.OtherPersonPhone,
                HouseRoute = hpformDto.HouseRoute,
                Photograph = photoFileName,  // Save file name or relative path in DB
                AadharDoc = aadharFileName   // Save file name or relative path in DB
            };

            _context.Hpforms.Add(hpform);
            await _context.SaveChangesAsync();

     
           await saveCategory(PT_Id, hpformDto.CategoryId);

            return CreatedAtAction("GetHpform", new { id = hpform.Id }, hpform);
        }

        private async Task saveCategory(int patientId, int? categoryId)
        {
            var newCategory = new HpformsCategory
            {
                PatientId = patientId,
                CategoryId = categoryId
            };

            _context.HpformsCategories.Add(newCategory);
            await _context.SaveChangesAsync();
        }

        // DELETE: api/Hpforms/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHpform(int id)
        {
            var hpform = await _context.Hpforms.FindAsync(id);
            var hpformCategory = await _context.HpformsCategories.Where(c => c.PatientId == hpform.PatientId).ToListAsync();

            if (hpform == null)
            {
                return NotFound();
            }

            // Delete associated photo file if it exists
            if (!string.IsNullOrEmpty(hpform.Photograph))
            {
                var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "photographs");
                var filePath = Path.Combine(uploadsFolder, hpform.Photograph);
                if (System.IO.File.Exists(filePath))
                {
                    System.IO.File.Delete(filePath);
                }
            }

            // Delete associated Aadhar document file if it exists
            if (!string.IsNullOrEmpty(hpform.AadharDoc))
            {
                var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "aadhardocs");
                var filePath = Path.Combine(uploadsFolder, hpform.AadharDoc);
                if (System.IO.File.Exists(filePath))
                {
                    System.IO.File.Delete(filePath);
                }
            }

            _context.Hpforms.Remove(hpform);
            _context.HpformsCategories.RemoveRange(hpformCategory);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HpformExists(int id)
        {
            return _context.Hpforms.Any(e => e.Id == id);
        }

        private bool HpformExistsByPatientId(string patientId)
        {
            return _context.Hpforms.Any(e => e.PatientId.ToString() == patientId);
        }

        private int getPatientId()
        {
            SqlConnection con = new SqlConnection(_connectionString);
            con.Open();
            string sql = "select ISNULL(MAX(CAST(PatientId AS INT)),0)+1 FROM Hpforms;";
            SqlCommand cmd = new SqlCommand(sql, con);
            int patientId = Convert.ToInt32(cmd.ExecuteScalar().ToString());
            con.Close();

            return patientId;
        }
    }
}