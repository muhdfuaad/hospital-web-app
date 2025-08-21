using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HmsApi.Data;
using HmsApi.Models;

namespace HmsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VolunteersNotesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public VolunteersNotesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/VolunteersNotes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VolunteersNote>>> GetVolunteersNote()
        {
            return await _context.VolunteersNotes.ToListAsync();
        }

        // GET: api/VolunteersNotes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<VolunteersNote>> GetVolunteersNote(int id)
        {
            var volunteersNote = await _context.VolunteersNotes.FindAsync(id);

            if (volunteersNote == null)
            {
                return NotFound();
            }

            return volunteersNote;
        }

        [HttpGet("review/{reviewId}")]
        public async Task<ActionResult<VolunteersNote>> GetVolunteersNoteByReviewId(string reviewId)
        {
            var note = await _context.VolunteersNotes
                .FirstOrDefaultAsync(n => n.ReviewId == reviewId);

            if (note == null)
                return NotFound();

            return note;
        }

        [HttpGet("by-assignment/{assignmentId}")]
        public async Task<ActionResult<IEnumerable<VolunteersNote>>> GetReviewsByAssignmentId(string assignmentId)
        {
            var reviews = await _context.VolunteersNotes
                .Where(r => r.ReviewId == assignmentId)
                .ToListAsync();

            if (!reviews.Any())
                return NotFound();

            return Ok(reviews);
        }

        // PUT: api/VolunteersNotes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVolunteersNote(int id, VolunteersNote updatedNote)
        {
            if (id != updatedNote.Id)
                return BadRequest();

            var existingNote = await _context.VolunteersNotes
                .FirstOrDefaultAsync(n => n.Id == id);

            if (existingNote == null)
                return NotFound();

            // Optional: Re-fetch patientId if ReviewId has changed
            if (existingNote.ReviewId != updatedNote.ReviewId)
            {
                var assignment = await _context.PatientAssignments
                    .FirstOrDefaultAsync(a => a.AssignmentId == updatedNote.ReviewId);

                if (assignment == null)
                    return BadRequest("Invalid updated ReviewId.");

                existingNote.PatientId = assignment.PatientId;
            }

            // ✅ Update basic fields
            existingNote.ReviewId = updatedNote.ReviewId;
            existingNote.Date = updatedNote.Date;
            existingNote.volActivitiesDesc = updatedNote.volActivitiesDesc;
            

            await _context.SaveChangesAsync();
            return NoContent();
        }

        // ✅ PUT: api/VolunteersNotes/review/PT-001
        [HttpPut("review/{reviewId}")]
        public async Task<IActionResult> PutVolunteersNoteByReviewId(string reviewId, VolunteersNote updatedNote)
        {
            var existingNote = await _context.VolunteersNotes
                .FirstOrDefaultAsync(n => n.ReviewId == reviewId);

            if (existingNote == null)
                return NotFound("VolunteersNote not found for the given ReviewId.");

            // Update all fields
            existingNote.Date = updatedNote.Date;
           existingNote.volActivitiesDesc = updatedNote.volActivitiesDesc;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // POST: api/VolunteersNotes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<VolunteersNote>> PostVolunteersNote(VolunteersNote VolunteersNote)
        {
            var assignment = await _context.PatientAssignments
                .FirstOrDefaultAsync(a => a.AssignmentId == VolunteersNote.ReviewId);

            if (assignment == null)
                return BadRequest("Invalid ReviewId. No matching assignment found.");

            VolunteersNote.PatientId = assignment.PatientId;

            _context.VolunteersNotes.Add(VolunteersNote);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetVolunteersNote), new { id = VolunteersNote.Id }, VolunteersNote);
        }

        // DELETE: api/VolunteersNotes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVolunteersNote(int id)
        {
            var volunteersNote = await _context.VolunteersNotes.FindAsync(id);
            if (volunteersNote == null)
            {
                return NotFound();
            }

            _context.VolunteersNotes.Remove(volunteersNote);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VolunteersNoteExists(int id)
        {
            return _context.VolunteersNotes.Any(e => e.Id == id);
        }
    }
}
