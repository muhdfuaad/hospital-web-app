using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using testapi.Data;
using testapi.Models.Doctors;

namespace testapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorsNotesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DoctorsNotesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/DoctorsNotes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DoctorsNote>>> GetDoctorsNotes()
        {
            return await _context.DoctorsNotes.ToListAsync();
        }

        // ✅ GET by Id for edit page
        [HttpGet("{id}")]
        public async Task<ActionResult<DoctorsNote>> GetDoctorsNote(int id)
        {
            var note = await _context.DoctorsNotes
                .Include(n => n.Symptoms) // 👈 Also include here
                .FirstOrDefaultAsync(n => n.Id == id);

            if (note == null)
                return NotFound();

            return note;
        }


        // ✅ GET by ReviewId to prefill the form
        [HttpGet("review/{reviewId}")]
        public async Task<ActionResult<DoctorsNote>> GetDoctorsNoteByReviewId(string reviewId)
        {
            var note = await _context.DoctorsNotes
                .Include(n => n.Symptoms) // 👈 Add this line
                .FirstOrDefaultAsync(n => n.ReviewId == reviewId);

            if (note == null)
                return NotFound();

            return note;
        }


        // ✅ POST - insert with ReviewId, auto-fetching PatientId
        [HttpPost]
        public async Task<ActionResult<DoctorsNote>> PostDoctorsNote(DoctorsNote doctorsNote)
        {
            var assignment = await _context.PatientAssignments
                .FirstOrDefaultAsync(a => a.AssignmentId == doctorsNote.ReviewId);

            if (assignment == null)
                return BadRequest("Invalid ReviewId. No matching assignment found.");

            doctorsNote.PatientId = assignment.PatientId;

            // ✅ Make sure each symptom is linked to the note
            if (doctorsNote.Symptoms != null)
            {
                foreach (var symptom in doctorsNote.Symptoms)
                {
                    symptom.DoctorsNote = doctorsNote;
                }
            }

            _context.DoctorsNotes.Add(doctorsNote);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetDoctorsNote), new { id = doctorsNote.Id }, doctorsNote);
        }
        
        // ✅ PUT: Update existing note
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDoctorsNote(int id, DoctorsNote updatedNote)
        {
            if (id != updatedNote.Id)
                return BadRequest();

            var existingNote = await _context.DoctorsNotes
                .Include(d => d.Symptoms) // ✅ include symptoms for update
                .FirstOrDefaultAsync(d => d.Id == id);

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
            existingNote.HistoryOfIllness = updatedNote.HistoryOfIllness;
            existingNote.PresentMedications = updatedNote.PresentMedications;
            existingNote.AssociatedIllness = updatedNote.AssociatedIllness;
            existingNote.Pulse = updatedNote.Pulse;
            existingNote.BP = updatedNote.BP;
            existingNote.Height = updatedNote.Height;
            existingNote.Weight = updatedNote.Weight;
            existingNote.GeneralExamination = updatedNote.GeneralExamination;
            existingNote.SystematicExamination = updatedNote.SystematicExamination;
            existingNote.AdditionalNotes = updatedNote.AdditionalNotes;

            // ✅ Replace old symptoms with new ones
            _context.Symptoms.RemoveRange(existingNote.Symptoms); // Clear existing
            if (updatedNote.Symptoms != null)
            {
                foreach (var symptom in updatedNote.Symptoms)
                {
                    symptom.DoctorsNoteId = id; // attach to parent
                    _context.Symptoms.Add(symptom); // add new
                }
            }

            await _context.SaveChangesAsync();
            return NoContent();
        }

        // ✅ PUT: api/DoctorsNotes/review/PT-001
        [HttpPut("review/{reviewId}")]
        public async Task<IActionResult> PutDoctorsNoteByReviewId(string reviewId, DoctorsNote updatedNote)
        {
            var existingNote = await _context.DoctorsNotes
                .Include(n => n.Symptoms)
                .FirstOrDefaultAsync(n => n.ReviewId == reviewId);

            if (existingNote == null)
                return NotFound("DoctorNote not found for the given ReviewId.");

            // Update all fields
            existingNote.Date = updatedNote.Date;
            existingNote.HistoryOfIllness = updatedNote.HistoryOfIllness;
            existingNote.PresentMedications = updatedNote.PresentMedications;
            existingNote.AssociatedIllness = updatedNote.AssociatedIllness;
            existingNote.Pulse = updatedNote.Pulse;
            existingNote.BP = updatedNote.BP;
            existingNote.Height = updatedNote.Height;
            existingNote.Weight = updatedNote.Weight;
            existingNote.GeneralExamination = updatedNote.GeneralExamination;
            existingNote.SystematicExamination = updatedNote.SystematicExamination;
            existingNote.AdditionalNotes = updatedNote.AdditionalNotes;

            // Remove old symptoms
            _context.Symptoms.RemoveRange(existingNote.Symptoms);

            // Add new symptoms
            if (updatedNote.Symptoms != null)
            {
                foreach (var symptom in updatedNote.Symptoms)
                {
                    symptom.DoctorsNoteId = existingNote.Id; // Link new symptoms
                }

                existingNote.Symptoms = updatedNote.Symptoms;
            }

            await _context.SaveChangesAsync();

            return NoContent();
        }


        // ✅ DELETE
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDoctorsNote(int id)
        {
            var note = await _context.DoctorsNotes.FindAsync(id);
            if (note == null)
                return NotFound();

            _context.DoctorsNotes.Remove(note);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
