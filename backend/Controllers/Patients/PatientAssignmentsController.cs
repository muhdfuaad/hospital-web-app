using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HmsApi.Data;
using HmsApi.Models.Patients;

namespace HmsApi.Controllers.Patients
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientAssignmentsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PatientAssignmentsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/PatientAssignments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PatientAssignment>>> GetPatientAssignments()
        {
            return await _context.PatientAssignments.ToListAsync();
        }

        // GET: api/PatientAssignments/getid
        [HttpGet("getid")]
        public async Task<ActionResult<string>> GetLastAssignmentId()
        {
            var lastAssignment = await _context.PatientAssignments
                .OrderByDescending(p => p.AssignmentId)
                .FirstOrDefaultAsync();

            if (lastAssignment == null || string.IsNullOrWhiteSpace(lastAssignment.AssignmentId))
            {
                return "PT-000"; // Start from PT-001 if none exists
            }

            return lastAssignment.AssignmentId;
        }

        // GET: api/PatientAssignments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PatientAssignment>> GetPatientAssignment(int id)
        {
            var patientAssignment = await _context.PatientAssignments.FindAsync(id);

            if (patientAssignment == null)
            {
                return NotFound();
            }

            return patientAssignment;
        }

        // GET: api/PatientAssignments/byAssignmentId/{assignmentId}
        [HttpGet("byAssignmentId/{assignmentId}")]
        public async Task<ActionResult<PatientAssignment>> GetPatientAssignmentByAssignmentId(string assignmentId)
        {
            var patientAssignment = await _context.PatientAssignments
                .FirstOrDefaultAsync(p => p.AssignmentId == assignmentId);

            if (patientAssignment == null)
            {
                return NotFound();
            }

            return Ok(patientAssignment); // ✅ Explicit, recommended
        }

        // GET: api/PatientAssignments/byPatientId/{patientId}
        [HttpGet("byPatientId/{patientId}")]
        public async Task<IActionResult> GetAssignmentsByPatientId(string patientId)
        {
            var assignments = await _context.PatientAssignments
                .Where(a => a.PatientId == patientId)
                .OrderByDescending(a => a.Date)
                .ToListAsync();

            return Ok(assignments);
        }

        // GET: api/PatientAssignments/AssignedPatients?date=2025-07-22
        [HttpGet("AssignedPatients")]
        public async Task<IActionResult> GetAssignedPatients(DateTime date)
        {
            var results = await (
                from pa in _context.PatientAssignments
                join hp in _context.Hpforms
                    on pa.PatientId equals hp.PatientId.ToString()
                where pa.Date.Date == date.Date
                select new
                {
                    pa.AssignmentId,
                    hp.PatientId,
                    hp.Name,
                    hp.Age,
                    hp.Gender,
                    hp.Diagnosis,
                    hp.PhoneNumber1,
                    // Check for review
                    HasReview = _context.DoctorsReviews
                        .Any(dr => dr.PatientId == pa.PatientId && dr.ReviewId == pa.AssignmentId),
                    // Check for note
                    HasNote = _context.DoctorsNotes
                        .Any(dn => dn.PatientId == pa.PatientId && dn.ReviewId == pa.AssignmentId)
                })
                .ToListAsync();

            var withStatus = results.Select(r => new
            {
                r.AssignmentId,
                r.PatientId,
                r.Name,
                r.Age,
                r.Gender,
                r.Diagnosis,
                r.PhoneNumber1,
                HasReview = r.HasReview,
                HasNote = r.HasNote,
                Status = (r.HasReview || r.HasNote) ? "Completed" : "Pending"
            });

            return Ok(withStatus);
        }


        // GET: api/PatientAssignments/byNumericId/{numericId}
        // This handles the case where frontend extracts numeric part from assignment ID
        [HttpGet("byNumericId/{numericId}")]
        public async Task<ActionResult<PatientAssignment>> GetPatientAssignmentByNumericId(int numericId)
        {
            // Try to find by primary key first
            var patientAssignment = await _context.PatientAssignments.FindAsync(numericId);
            
            if (patientAssignment != null)
            {
                return patientAssignment;
            }

            // If not found by primary key, try to find by assignment ID pattern
            var assignmentIdPattern = $"PT-{numericId:D3}"; // Format as PT-001, PT-002, etc.
            patientAssignment = await _context.PatientAssignments
                .FirstOrDefaultAsync(p => p.AssignmentId == assignmentIdPattern);

            if (patientAssignment == null)
            {
                return NotFound();
            }

            return patientAssignment;
        }

        // PUT: api/PatientAssignments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPatientAssignment(int id, PatientAssignment patientAssignment)
        {
            if (id != patientAssignment.Id)
            {
                return BadRequest();
            }

            _context.Entry(patientAssignment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PatientAssignmentExists(id))
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

        // PUT: api/PatientAssignments/updateByAssignmentId/{assignmentId}
        [HttpPut("updateByAssignmentId/{assignmentId}")]
        public async Task<IActionResult> PutPatientAssignmentByAssignmentId(string assignmentId, PatientAssignment patientAssignment)
        {
            var existingAssignment = await _context.PatientAssignments
                .FirstOrDefaultAsync(p => p.AssignmentId == assignmentId);

            if (existingAssignment == null)
            {
                return NotFound();
            }

            // Update the existing assignment with new values
            existingAssignment.Date = patientAssignment.Date;
            existingAssignment.Time = patientAssignment.Time;
            existingAssignment.PatientId = patientAssignment.PatientId;
            existingAssignment.DoctorId = patientAssignment.DoctorId;
            existingAssignment.VolunteerId = patientAssignment.VolunteerId;
            existingAssignment.NurseId = patientAssignment.NurseId;
            existingAssignment.Description = patientAssignment.Description;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PatientAssignmentExistsByAssignmentId(assignmentId))
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

        // POST: api/PatientAssignments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PatientAssignment>> PostPatientAssignment(PatientAssignment patientAssignment)
        {
            _context.PatientAssignments.Add(patientAssignment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPatientAssignment", new { id = patientAssignment.Id }, patientAssignment);
        }

        // DELETE: api/PatientAssignments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePatientAssignment(int id)
        {
            var patientAssignment = await _context.PatientAssignments.FindAsync(id);
            if (patientAssignment == null)
            {
                return NotFound();
            }

            _context.PatientAssignments.Remove(patientAssignment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PatientAssignmentExists(int id)
        {
            return _context.PatientAssignments.Any(e => e.Id == id);
        }

        private bool PatientAssignmentExistsByAssignmentId(string assignmentId)
        {
            return _context.PatientAssignments.Any(e => e.AssignmentId == assignmentId);
        }
    }
}