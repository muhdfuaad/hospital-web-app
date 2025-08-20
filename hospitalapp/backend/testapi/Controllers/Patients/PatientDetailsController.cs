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
using testapi.Models.Location;
using Newtonsoft.Json;

namespace testapi.Controllers.Patients
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientDetailsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly string _connectionString = "";

        public PatientDetailsController(AppDbContext context, IConfiguration configuration)
        {
            _context = context;
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        // GET: api/PatientDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PatientDetailDto>>> GetPatientDetails()
        {
            var patientDetails = await _context.PatientDetails
                .Include(p => p.Clinics)
                .Include(p => p.Difficulties)
                .Include(p => p.FamilyMembers)
                .ToListAsync();

            var patientDetailDtos = patientDetails.Select(MapToDto).ToList();
            return Ok(patientDetailDtos);
        }

        // GET: api/PatientDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PatientDetailDto>> GetPatientDetail(int id)
        {
            var patientDetail = await _context.PatientDetails
                .Include(p => p.Clinics)
                .Include(p => p.Difficulties)
                .Include(p => p.FamilyMembers)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (patientDetail == null)
            {
                return NotFound();
            }

            var patientDetailDto = MapToDto(patientDetail);
            return Ok(patientDetailDto);
        }

        // GET: api/PatientDetails/patient/{patientId} - Get by PatientId from Hpforms
        [HttpGet("patient/{patientId}")]
        public async Task<ActionResult<PatientDetailDto>> GetPatientDetailByPatientId(string patientId)
        {
            // First verify that the patient exists in Hpforms
            var hpformExists = await _context.Hpforms.AnyAsync(h => h.PatientId.ToString() == patientId);
            if (!hpformExists)
            {
                return NotFound("Patient not found in Hpforms");
            }

            var patientDetail = await _context.PatientDetails
                .Include(p => p.Clinics)
                .Include(p => p.Difficulties)
                .Include(p => p.FamilyMembers)
                .FirstOrDefaultAsync(p => p.PatientId == patientId);

            if (patientDetail == null)
            {
                return NotFound("Patient details not found");
            }

            var patientDetailDto = MapToDto(patientDetail);
            return Ok(patientDetailDto);
        }

        // PUT: api/PatientDetails/patient/{patientId}
        [HttpPut("patient/{patientId}")]
        public async Task<IActionResult> PutPatientDetailByPatientId(string patientId, [FromBody] PatientDetailDto patientDetailDto)
        {
            var hpformExists = await _context.Hpforms.AnyAsync(h => h.PatientId.ToString() == patientId);
            if (!hpformExists)
                return NotFound("Patient not found in Hpforms");

            var existingPatientDetail = await _context.PatientDetails
                .Include(p => p.Clinics)
                .Include(p => p.Difficulties)
                .Include(p => p.FamilyMembers)
                .FirstOrDefaultAsync(p => p.PatientId == patientId);

            if (existingPatientDetail == null)
                return NotFound("Patient details not found");

            try
            {
                UpdatePatientFromDto(existingPatientDetail, patientDetailDto);
                existingPatientDetail.PatientId = patientId;

                await UpdateRelatedEntities(existingPatientDetail, patientDetailDto);

                _context.Entry(existingPatientDetail).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PatientDetailExistsByPatientId(patientId))
                    return NotFound();
                else
                    throw;
            }
            catch (Exception ex)
            {
                return BadRequest($"Error updating patient details: {ex.Message}");
            }
        }
        // PUT: api/PatientDetails/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPatientDetail(int id, [FromBody] PatientDetailDto patientDetailDto)
        {
            var existingPatientDetail = await _context.PatientDetails
                .Include(p => p.Clinics)
                .Include(p => p.Difficulties)
                .Include(p => p.FamilyMembers)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (existingPatientDetail == null)
                return NotFound();

            try
            {
                UpdatePatientFromDto(existingPatientDetail, patientDetailDto);
                await UpdateRelatedEntities(existingPatientDetail, patientDetailDto);

                _context.Entry(existingPatientDetail).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PatientDetailExists(id))
                    return NotFound();
                else
                    throw;
            }
            catch (Exception ex)
            {
                return BadRequest($"Error updating patient details: {ex.Message}");
            }
        }

        // POST: api/PatientDetails
        // POST: api/PatientDetails
        [HttpPost]
        public async Task<ActionResult<PatientDetailDto>> PostPatientDetail([FromBody] PatientDetailDto patientDetailDto)
        {
            if (patientDetailDto == null)
                return BadRequest("Patient detail data is required.");

            if (string.IsNullOrWhiteSpace(patientDetailDto.PatientId))
                return BadRequest("PatientId is required.");

            bool hpformExists = await _context.Hpforms
                .AnyAsync(h => h.PatientId.ToString() == patientDetailDto.PatientId);

            if (!hpformExists)
                return BadRequest("Patient not found in Hpforms. Please create patient basic information first.");

            bool patientDetailExists = await _context.PatientDetails
                .AnyAsync(p => p.PatientId == patientDetailDto.PatientId);

            if (patientDetailExists)
                return Conflict("Patient details already exist for this PatientId. Use PUT to update.");

            using var transaction = await _context.Database.BeginTransactionAsync();

            try
            {
                var patientDetail = new PatientDetail
                {
                    PatientId = patientDetailDto.PatientId
                };
                UpdatePatientFromDto(patientDetail, patientDetailDto);

                // 🔁 Ensure referenced clinics exist in ClinicMasters
                if (patientDetailDto.Clinics?.Count > 0)
                {
                    foreach (var clinic in patientDetailDto.Clinics)
                    {
                        string name = clinic.ClinicName?.Trim();
                        if (!string.IsNullOrEmpty(name))
                        {
                            bool exists = await _context.ClinicMasters
                                .AnyAsync(c => c.ClinicName.ToLower() == name.ToLower());

                            if (!exists)
                            {
                                _context.ClinicMasters.Add(new ClinicMaster { ClinicName = name });
                            }
                        }
                    }
                    await _context.SaveChangesAsync(); // Save new clinics before proceeding
                }

                _context.PatientDetails.Add(patientDetail);
                await _context.SaveChangesAsync();

                await AddRelatedEntities(patientDetail, patientDetailDto);
                await _context.SaveChangesAsync();

                await transaction.CommitAsync();

                var createdPatient = await _context.PatientDetails
                    .Include(p => p.Clinics)
                    .Include(p => p.Difficulties)
                    .Include(p => p.FamilyMembers)
                    .FirstOrDefaultAsync(p => p.Id == patientDetail.Id);

                var resultDto = MapToDto(createdPatient);
                return CreatedAtAction(nameof(GetPatientDetail), new { id = createdPatient.Id }, resultDto);
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();

                var rootEx = ex;
                while (rootEx.InnerException != null)
                    rootEx = rootEx.InnerException;

                Console.WriteLine($"🔥 DB Save Error: {rootEx.Message}");
                return BadRequest($"Error creating patient details: {rootEx.Message}");
            }
        }



        // POST: api/PatientDetails/patient/{patientId} - Create patient details for specific PatientId
        [HttpPost("patient/{patientId}")]
        public async Task<ActionResult<PatientDetailDto>> PostPatientDetailByPatientId(string patientId, [FromBody] PatientDetailDto patientDetailDto)
        {
            if (patientDetailDto == null)
                return BadRequest("Patient detail data is required");

            var hpformExists = await _context.Hpforms.AnyAsync(h => h.PatientId.ToString() == patientId);
            if (!hpformExists)
            {
                return BadRequest("Patient not found in Hpforms. Please create patient basic information first.");
            }

            var existingPatientDetail = await _context.PatientDetails
                .FirstOrDefaultAsync(p => p.PatientId == patientId);

            if (existingPatientDetail != null)
            {
                return Conflict("Patient details already exist for this PatientId. Use PUT to update.");
            }

            using var transaction = await _context.Database.BeginTransactionAsync();
            try
            {
                var patientDetail = new PatientDetail();
                UpdatePatientFromDto(patientDetail, patientDetailDto);
                patientDetail.PatientId = patientId;

                _context.PatientDetails.Add(patientDetail);
                await _context.SaveChangesAsync();

                await AddRelatedEntities(patientDetail, patientDetailDto);
                await _context.SaveChangesAsync();

                await transaction.CommitAsync();

                var createdPatient = await _context.PatientDetails
                    .Include(p => p.Clinics)
                    .Include(p => p.Difficulties)
                    .Include(p => p.FamilyMembers)
                    .FirstOrDefaultAsync(p => p.Id == patientDetail.Id);

                var result = MapToDto(createdPatient);
                return CreatedAtAction("GetPatientDetail", new { id = patientDetail.Id }, result);
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                return BadRequest($"Error creating patient details: {ex.Message}");
            }
        }


        // DELETE: api/PatientDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePatientDetail(int id)
        {
            var patientDetail = await _context.PatientDetails
                .Include(p => p.Clinics)
                .Include(p => p.Difficulties)
                .Include(p => p.FamilyMembers)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (patientDetail == null)
            {
                return NotFound();
            }

            _context.PatientDetails.Remove(patientDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/PatientDetails/patient/{patientId} - Delete by PatientId
        [HttpDelete("patient/{patientId}")]
        public async Task<IActionResult> DeletePatientDetailByPatientId(string patientId)
        {
            var patientDetail = await _context.PatientDetails
                .Include(p => p.Clinics)
                .Include(p => p.Difficulties)
                .Include(p => p.FamilyMembers)
                .FirstOrDefaultAsync(p => p.PatientId == patientId);

            if (patientDetail == null)
            {
                return NotFound();
            }

            _context.PatientDetails.Remove(patientDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PatientDetailExists(int id)
        {
            return _context.PatientDetails.Any(e => e.Id == id);
        }

        private bool PatientDetailExistsByPatientId(string patientId)
        {
            return _context.PatientDetails.Any(e => e.PatientId == patientId);
        }

        private PatientDetailDto MapToDto(PatientDetail patientDetail)
        {
            var dto = new PatientDetailDto
            {
                PatientId = patientDetail.PatientId,
                PainIntensity = patientDetail.PainIntensity,
                EconomicSituation = patientDetail.EconomicSituation,
                TreatmentDetails = patientDetail.TreatmentDetails,
                SpiritualFaith = patientDetail.SpiritualFaith,
                MentalSupport = patientDetail.MentalSupport,
                Expectations = patientDetail.Expectations,
                BasicNeeds = patientDetail.BasicNeeds,
                FacilitiesStatus = patientDetail.FacilitiesStatus,
                RelationshipStatus = patientDetail.RelationshipStatus,
                PatientKnowledge = patientDetail.PatientKnowledge,
                PatientConcerns = patientDetail.PatientConcerns,
                FamilyKnowledge = patientDetail.FamilyKnowledge,
                PrioritizedIssues = patientDetail.PrioritizedIssues,
                Summary = patientDetail.Summary,
                Plan = patientDetail.Plan,
                Clinics = patientDetail.Clinics?.Select(c => new ClinicDto
                {
                    ClinicName = c.ClinicName,
                    RegisterNo = c.RegisterNo,
                    Remarks = c.Remarks
                }).ToList(),
                Difficulties = patientDetail.Difficulties?.Select(d => new DifficultyDto
                {
                    DifficultyName = d.DifficultyName,
                    Impact = d.Impact,
                    Remarks = d.Remarks
                }).ToList(),
                FamilyMembers = patientDetail.FamilyMembers?.Select(f => new FamilyMemberDto
                {
                    Name = f.Name,
                    Age = f.Age,
                    Relation = f.Relation,
                    Education = f.Education,
                    Income = f.Income,
                    MaritalStatus = f.MaritalStatus,
                    LongTermPatient = f.LongTermPatient,
                    LongTermDetails = f.LongTermDetails
                }).ToList()
            };

            // Parse Treatments as List<string> from JSON string array
            dto.Treatments = !string.IsNullOrEmpty(patientDetail.Treatments)
                ? JsonConvert.DeserializeObject<List<string>>(patientDetail.Treatments)
                : new List<string>();

            // Parse Assistances as List<string> from JSON string array
            dto.Assistances = !string.IsNullOrEmpty(patientDetail.Assistances)
                ? JsonConvert.DeserializeObject<List<string>>(patientDetail.Assistances)
                : new List<string>();

            return dto;
        }


        private void UpdatePatientFromDto(PatientDetail patientDetail, PatientDetailDto dto)
        {
            patientDetail.PainIntensity = dto.PainIntensity ?? "";
            patientDetail.EconomicSituation = dto.EconomicSituation ?? "";
            patientDetail.TreatmentDetails = dto.TreatmentDetails ?? "";
            patientDetail.SpiritualFaith = dto.SpiritualFaith ?? "";
            patientDetail.MentalSupport = dto.MentalSupport ?? "";
            patientDetail.Expectations = dto.Expectations ?? "";
            patientDetail.BasicNeeds = dto.BasicNeeds ?? "";
            patientDetail.FacilitiesStatus = dto.FacilitiesStatus ?? "";
            patientDetail.RelationshipStatus = dto.RelationshipStatus ?? "";
            patientDetail.PatientKnowledge = dto.PatientKnowledge ?? "";
            patientDetail.PatientConcerns = dto.PatientConcerns ?? "";
            patientDetail.FamilyKnowledge = dto.FamilyKnowledge ?? "";
            patientDetail.PrioritizedIssues = dto.PrioritizedIssues ?? "";
            patientDetail.Summary = dto.Summary ?? "";
            patientDetail.Plan = dto.Plan ?? "";

            // Store as JSON array string
            patientDetail.Treatments = dto.Treatments != null
                ? JsonConvert.SerializeObject(dto.Treatments)
                : "[]";

            patientDetail.Assistances = dto.Assistances != null
                ? JsonConvert.SerializeObject(dto.Assistances)
                : "[]";
        }



        // New method for adding related entities (used in POST operations)
        private async Task AddRelatedEntities(PatientDetail patientDetail, PatientDetailDto dto)
        {
            // Add Clinics with proper PatientDetailId
            if (dto.Clinics != null && dto.Clinics.Any())
            {
                var clinics = dto.Clinics.Select(c => new Clinic
                {
                    ClinicName = c.ClinicName ?? "",
                    RegisterNo = c.RegisterNo ?? "",
                    Remarks = c.Remarks ?? "",
                    PatientDetailId = patientDetail.Id // Set the foreign key
                }).ToList();

                await _context.Clinics.AddRangeAsync(clinics);
            }

            // Add Difficulties with proper PatientDetailId
            if (dto.Difficulties != null && dto.Difficulties.Any())
            {
                var difficulties = dto.Difficulties.Select(d => new Difficulty
                {
                    DifficultyName = d.DifficultyName ?? "",
                    Impact = d.Impact ?? "",
                    Remarks = d.Remarks ?? "",
                    PatientDetailId = patientDetail.Id // Set the foreign key
                }).ToList();

                await _context.Difficulties.AddRangeAsync(difficulties);
            }

            // Add Family Members with proper PatientDetailId
            if (dto.FamilyMembers != null && dto.FamilyMembers.Any())
            {
                var familyMembers = dto.FamilyMembers.Select(f => new FamilyMember
                {
                    Name = f.Name ?? "",
                    Age = f.Age ?? "",
                    Relation = f.Relation ?? "",
                    Education = f.Education ?? "",
                    Income = f.Income ?? "",
                    MaritalStatus = f.MaritalStatus ?? "",
                    LongTermPatient = f.LongTermPatient,
                    LongTermDetails = f.LongTermDetails ?? "",
                    PatientDetailId = patientDetail.Id // Set the foreign key
                }).ToList();

                await _context.FamilyMembers.AddRangeAsync(familyMembers);
            }
        }

        // Updated method for updating related entities (used in PUT operations)
        private async Task UpdateRelatedEntities(PatientDetail patientDetail, PatientDetailDto dto)
        {
            // Update Clinics
            if (dto.Clinics != null)
            {
                // Remove existing clinics
                if (patientDetail.Clinics != null && patientDetail.Clinics.Any())
                {
                    _context.Clinics.RemoveRange(patientDetail.Clinics);
                }

                // Add new clinics with proper PatientDetailId
                if (dto.Clinics.Any())
                {
                    var newClinics = dto.Clinics.Select(c => new Clinic
                    {
                        ClinicName = c.ClinicName ?? "",
                        RegisterNo = c.RegisterNo ?? "",
                        Remarks = c.Remarks ?? "",
                        PatientDetailId = patientDetail.Id // Set the foreign key
                    }).ToList();

                    await _context.Clinics.AddRangeAsync(newClinics);
                }
            }

            // Update Difficulties
            if (dto.Difficulties != null)
            {
                // Remove existing difficulties
                if (patientDetail.Difficulties != null && patientDetail.Difficulties.Any())
                {
                    _context.Difficulties.RemoveRange(patientDetail.Difficulties);
                }

                // Add new difficulties with proper PatientDetailId
                if (dto.Difficulties.Any())
                {
                    var newDifficulties = dto.Difficulties.Select(d => new Difficulty
                    {
                        DifficultyName = d.DifficultyName ?? "",
                        Impact = d.Impact ?? "",
                        Remarks = d.Remarks ?? "",
                        PatientDetailId = patientDetail.Id // Set the foreign key
                    }).ToList();

                    await _context.Difficulties.AddRangeAsync(newDifficulties);
                }
            }

            // Update Family Members
            if (dto.FamilyMembers != null)
            {
                // Remove existing family members
                if (patientDetail.FamilyMembers != null && patientDetail.FamilyMembers.Any())
                {
                    _context.FamilyMembers.RemoveRange(patientDetail.FamilyMembers);
                }

                // Add new family members with proper PatientDetailId
                if (dto.FamilyMembers.Any())
                {
                    var newFamilyMembers = dto.FamilyMembers.Select(f => new FamilyMember
                    {
                        Name = f.Name ?? "",
                        Age = f.Age ?? "",
                        Relation = f.Relation ?? "",
                        Education = f.Education ?? "",
                        Income = f.Income ?? "",
                        MaritalStatus = f.MaritalStatus ?? "",
                        LongTermPatient = f.LongTermPatient,
                        LongTermDetails = f.LongTermDetails ?? "",
                        PatientDetailId = patientDetail.Id // Set the foreign key
                    }).ToList();

                    await _context.FamilyMembers.AddRangeAsync(newFamilyMembers);
                }
            }
        }
    }
}