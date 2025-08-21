using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HmsApi.Data;
using HmsApi.Models.Doctors;

namespace HmsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorsReviewsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DoctorsReviewsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/DoctorsReviews
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DoctorsReview>>> GetDoctorsReviews()
        {
            return await _context.DoctorsReviews
                .Include(dr => dr.Investigations)
                .Include(dr => dr.Medications)
                .ToListAsync();
        }

        // GET: api/DoctorsReviews/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<DoctorsReview>> GetDoctorsReview(int id)
        {
            var review = await _context.DoctorsReviews
                .Include(dr => dr.Investigations)
                .Include(dr => dr.Medications)
                .FirstOrDefaultAsync(dr => dr.Id == id);

            if (review == null)
            {
                return NotFound();
            }

            return review;
        }

        [HttpGet("by-assignment/{assignmentId}")]
        public async Task<ActionResult<IEnumerable<DoctorsReview>>> GetReviewsByAssignmentId(string assignmentId)
        {
            var reviews = await _context.DoctorsReviews
                .Where(r => r.ReviewId == assignmentId)
                .ToListAsync();

            if (!reviews.Any())
                return NotFound();

            return Ok(reviews);
        }

        [HttpGet("review/{reviewId}")]
        public async Task<ActionResult<DoctorsReview>> GetByReviewId(string reviewId)
        {
            var review = await _context.DoctorsReviews
                .Include(r => r.Medications)
                .Include(r => r.Investigations)
                .FirstOrDefaultAsync(r => r.ReviewId == reviewId);

            if (review == null)
                return NotFound();

            return review;
        }

        // POST: api/DoctorsReviews
        [HttpPost]
        public async Task<ActionResult<DoctorsReview>> PostDoctorsReview(DoctorsReview review)
        {
            // Temporarily store nested lists
            var investigations = review.Investigations ?? new List<Investigation>();
            var medications = review.Medications ?? new List<Medication>();

            // Detach to prevent EF trying to insert nested too early
            review.Investigations = null;
            review.Medications = null;

            // Save the DoctorsReview first to generate Id
            _context.DoctorsReviews.Add(review);
            await _context.SaveChangesAsync();

            // Set FK and add nested Investigations
            foreach (var inv in investigations)
            {
                inv.DoctorsReviewId = review.Id;
                _context.Investigations.Add(inv);
            }

            // Set FK and add nested Medications
            foreach (var med in medications)
            {
                med.DoctorsReviewId = review.Id;
                _context.Medications.Add(med);
            }

            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetDoctorsReview), new { id = review.Id }, review);
        }



        // PUT: api/DoctorsReviews/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDoctorsReview(int id, DoctorsReview updatedReview)
        {
            if (id != updatedReview.Id)
                return BadRequest();

            var existingReview = await _context.DoctorsReviews
                .Include(dr => dr.Investigations)
                .Include(dr => dr.Medications)
                .FirstOrDefaultAsync(dr => dr.Id == id);

            if (existingReview == null)
                return NotFound();

            // Update scalar fields
            existingReview.PatientId = updatedReview.PatientId;
            existingReview.ReviewId = updatedReview.ReviewId;
            existingReview.Date = updatedReview.Date;

            //------------------------------
            // Update Investigations
            //------------------------------
            var updatedInvestigationIds = updatedReview.Investigations.Select(i => i.Id).ToList();

            // Delete removed ones
            var investigationsToRemove = existingReview.Investigations
                .Where(i => !updatedInvestigationIds.Contains(i.Id))
                .ToList();
            _context.Investigations.RemoveRange(investigationsToRemove);

            foreach (var inv in updatedReview.Investigations)
            {
                if (inv.Id == 0)
                {
                    // New
                    inv.DoctorsReviewId = id;
                    _context.Investigations.Add(inv);
                }
                else
                {
                    // Existing — update values
                    var existing = await _context.Investigations.FindAsync(inv.Id);
                    if (existing != null && existing.DoctorsReviewId == id)
                    {
                        _context.Entry(existing).CurrentValues.SetValues(inv);
                    }
                }
            }

            //------------------------------
            // Update Medications
            //------------------------------
            var updatedMedicationIds = updatedReview.Medications.Select(m => m.Id).ToList();

            var medicationsToRemove = existingReview.Medications
                .Where(m => !updatedMedicationIds.Contains(m.Id))
                .ToList();
            _context.Medications.RemoveRange(medicationsToRemove);

            foreach (var med in updatedReview.Medications)
            {
                if (med.Id == 0)
                {
                    med.DoctorsReviewId = id;
                    _context.Medications.Add(med);
                }
                else
                {
                    var existing = await _context.Medications.FindAsync(med.Id);
                    if (existing != null && existing.DoctorsReviewId == id)
                    {
                        _context.Entry(existing).CurrentValues.SetValues(med);
                    }
                }
            }

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // PUT: api/DoctorsReviews/byReviewId/{reviewId}
        [HttpPut("byReviewId/{reviewId}")]
        public async Task<IActionResult> PutDoctorsReviewByReviewId(string reviewId, DoctorsReview updatedReview)
        {
            var existingReview = await _context.DoctorsReviews
                .Include(dr => dr.Investigations)
                .Include(dr => dr.Medications)
                .FirstOrDefaultAsync(dr => dr.ReviewId == reviewId);

            if (existingReview == null)
                return NotFound();

            existingReview.Date = updatedReview.Date;
            existingReview.PatientId = updatedReview.PatientId;

            // --- Investigations ---
            var updatedInvIds = updatedReview.Investigations.Select(i => i.Id).ToList();

            // Delete removed ones
            var invToRemove = existingReview.Investigations
                .Where(i => !updatedInvIds.Contains(i.Id))
                .ToList();
            _context.Investigations.RemoveRange(invToRemove);

            // Update or Add
            foreach (var inv in updatedReview.Investigations)
            {
                if (inv.Id == 0)
                {
                    // New investigation
                    inv.DoctorsReviewId = existingReview.Id;
                    _context.Investigations.Add(inv);
                }
                else
                {
                    // Existing investigation → update
                    var existingInv = existingReview.Investigations.FirstOrDefault(i => i.Id == inv.Id);
                    if (existingInv != null)
                    {
                        existingInv.InvestigationName = inv.InvestigationName;
                        existingInv.Findings = inv.Findings;
                    }
                }
            }

            // --- Medications ---
            var updatedMedIds = updatedReview.Medications.Select(m => m.Id).ToList();

            var medToRemove = existingReview.Medications
                .Where(m => !updatedMedIds.Contains(m.Id))
                .ToList();
            _context.Medications.RemoveRange(medToRemove);

            foreach (var med in updatedReview.Medications)
            {
                if (med.Id == 0)
                {
                    med.DoctorsReviewId = existingReview.Id;
                    _context.Medications.Add(med);
                }
                else
                {
                    var existingMed = existingReview.Medications.FirstOrDefault(m => m.Id == med.Id);
                    if (existingMed != null)
                    {
                        existingMed.Medicine = med.Medicine;
                        existingMed.Prescription = med.Prescription;
                        existingMed.Remarks = med.Remarks;
                    }
                }
            }

            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/DoctorsReviews/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDoctorsReview(int id)
        {
            var review = await _context.DoctorsReviews
                .Include(dr => dr.Investigations)
                .Include(dr => dr.Medications)
                .FirstOrDefaultAsync(dr => dr.Id == id);

            if (review == null)
                return NotFound();

            _context.Investigations.RemoveRange(review.Investigations);
            _context.Medications.RemoveRange(review.Medications);
            _context.DoctorsReviews.Remove(review);

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
