using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HmsApi.Data;
using HmsApi.Models;
using HmsApi.Models.Doctors;

namespace HmsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NursesNotesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public NursesNotesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/NursesNotes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NursesNote>>> GetNursesNotes()
        {
            return await _context.NursesNotes.ToListAsync();
        }

        // ✅ GET by Id for edit page
        [HttpGet("{id}")]
        public async Task<ActionResult<NursesNote>> GetNursesNote(int id)
        {
            var note = await _context.NursesNotes
                .FirstOrDefaultAsync(n => n.Id == id);

            if (note == null)
                return NotFound();

            return note;
        }

        // ✅ GET by ReviewId to prefill the form
        [HttpGet("review/{reviewId}")]
        public async Task<ActionResult<NursesNote>> GetNursesNoteByReviewId(string reviewId)
        {
            var note = await _context.NursesNotes
                .FirstOrDefaultAsync(n => n.ReviewId == reviewId);

            if (note == null)
                return NotFound();

            return note;
        }

        [HttpGet("by-assignment/{assignmentId}")]
        public async Task<ActionResult<IEnumerable<NursesNote>>> GetReviewsByAssignmentId(string assignmentId)
        {
            var reviews = await _context.NursesNotes
                .Where(r => r.ReviewId == assignmentId)
                .ToListAsync();

            if (!reviews.Any())
                return NotFound();

            return Ok(reviews);
        }

        // ✅ POST - insert with ReviewId, auto-fetching PatientId
        [HttpPost]
        public async Task<ActionResult<NursesNote>> PostNursesNote(NursesNote nursesNote)
        {
            var assignment = await _context.PatientAssignments
                .FirstOrDefaultAsync(a => a.AssignmentId == nursesNote.ReviewId);

            if (assignment == null)
                return BadRequest("Invalid ReviewId. No matching assignment found.");

            nursesNote.PatientId = assignment.PatientId;

            _context.NursesNotes.Add(nursesNote);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetNursesNote), new { id = nursesNote.Id }, nursesNote);
        }

        // ✅ PUT: Update existing note by ID
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNursesNote(int id, NursesNote updatedNote)
        {
            if (id != updatedNote.Id)
                return BadRequest();

            var existingNote = await _context.NursesNotes
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
            existingNote.Diagnosis = updatedNote.Diagnosis;
            existingNote.Situation = updatedNote.Situation;
            existingNote.Consciousness = updatedNote.Consciousness;
            existingNote.ConsciousnesGenderPlain = updatedNote.ConsciousnesGenderPlain;
            existingNote.Assistance = updatedNote.Assistance;
            existingNote.AssistanceDetails = updatedNote.AssistanceDetails;
            existingNote.PhysicalDifficulties = updatedNote.PhysicalDifficulties;
            existingNote.Food = updatedNote.Food;
            existingNote.FoodDetails = updatedNote.FoodDetails;
            existingNote.Sleep = updatedNote.Sleep;
            existingNote.SleepDetails = updatedNote.SleepDetails;
            existingNote.BowelMovements = updatedNote.BowelMovements;
            existingNote.BowelDetails = updatedNote.BowelDetails;
            existingNote.Urination = updatedNote.Urination;
            existingNote.UrinationDetails = updatedNote.UrinationDetails;
            existingNote.EmotionalFactors = updatedNote.EmotionalFactors;
            existingNote.BP = updatedNote.BP;
            existingNote.Pulse = updatedNote.Pulse;
            existingNote.Temperature = updatedNote.Temperature;
            existingNote.Height = updatedNote.Height;
            existingNote.Weight = updatedNote.Weight;
            existingNote.SpecialConditions = updatedNote.SpecialConditions;
            existingNote.OtherTreatments = updatedNote.OtherTreatments;
            existingNote.Medications = updatedNote.Medications;
            existingNote.PlanSuggestions = updatedNote.PlanSuggestions;
            existingNote.RehabilitationDetails = updatedNote.RehabilitationDetails;

            await _context.SaveChangesAsync();
            return NoContent();
        }

        // ✅ PUT: api/NursesNotes/review/PT-001
        [HttpPut("review/{reviewId}")]
        public async Task<IActionResult> PutNursesNoteByReviewId(string reviewId, NursesNote updatedNote)
        {
            var existingNote = await _context.NursesNotes
                .FirstOrDefaultAsync(n => n.ReviewId == reviewId);

            if (existingNote == null)
                return NotFound("NursesNote not found for the given ReviewId.");

            // Update all fields
            existingNote.Date = updatedNote.Date;
            existingNote.Diagnosis = updatedNote.Diagnosis;
            existingNote.Situation = updatedNote.Situation;
            existingNote.Consciousness = updatedNote.Consciousness;
            existingNote.ConsciousnesGenderPlain = updatedNote.ConsciousnesGenderPlain;
            existingNote.Assistance = updatedNote.Assistance;
            existingNote.AssistanceDetails = updatedNote.AssistanceDetails;
            existingNote.PhysicalDifficulties = updatedNote.PhysicalDifficulties;
            existingNote.Food = updatedNote.Food;
            existingNote.FoodDetails = updatedNote.FoodDetails;
            existingNote.Sleep = updatedNote.Sleep;
            existingNote.SleepDetails = updatedNote.SleepDetails;
            existingNote.BowelMovements = updatedNote.BowelMovements;
            existingNote.BowelDetails = updatedNote.BowelDetails;
            existingNote.Urination = updatedNote.Urination;
            existingNote.UrinationDetails = updatedNote.UrinationDetails;
            existingNote.EmotionalFactors = updatedNote.EmotionalFactors;
            existingNote.BP = updatedNote.BP;
            existingNote.Pulse = updatedNote.Pulse;
            existingNote.Temperature = updatedNote.Temperature;
            existingNote.Height = updatedNote.Height;
            existingNote.Weight = updatedNote.Weight;
            existingNote.SpecialConditions = updatedNote.SpecialConditions;
            existingNote.OtherTreatments = updatedNote.OtherTreatments;
            existingNote.Medications = updatedNote.Medications;
            existingNote.PlanSuggestions = updatedNote.PlanSuggestions;
            existingNote.RehabilitationDetails = updatedNote.RehabilitationDetails;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // ✅ DELETE
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNursesNote(int id)
        {
            var note = await _context.NursesNotes.FindAsync(id);
            if (note == null)
                return NotFound();

            _context.NursesNotes.Remove(note);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // ✅ Helper method to check if note exists
        private bool NursesNoteExists(int id)
        {
            return _context.NursesNotes.Any(e => e.Id == id);
        }
    }
}