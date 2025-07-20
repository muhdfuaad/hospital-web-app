using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using testapi.Data;
using testapi.Models.Doctors;

namespace testapi.Controllers
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

            // Update scalar properties
            existingReview.PatientId = updatedReview.PatientId;
            existingReview.ReviewId = updatedReview.ReviewId;
            existingReview.Date = updatedReview.Date;

            // Update Investigations
            _context.Investigations.RemoveRange(existingReview.Investigations);
            foreach (var inv in updatedReview.Investigations)
            {
                inv.DoctorsReviewId = id;
                _context.Investigations.Add(inv);
            }

            // Update Medications
            _context.Medications.RemoveRange(existingReview.Medications);
            foreach (var med in updatedReview.Medications)
            {
                med.DoctorsReviewId = id;
                _context.Medications.Add(med);
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

            // Update basic fields
            existingReview.Date = updatedReview.Date;
            existingReview.PatientId = updatedReview.PatientId;

            // Clear old nested data
            _context.Investigations.RemoveRange(existingReview.Investigations);
            _context.Medications.RemoveRange(existingReview.Medications);

            // Add new nested Investigations
            foreach (var inv in updatedReview.Investigations ?? new List<Investigation>())
            {
                inv.DoctorsReviewId = existingReview.Id;
                _context.Investigations.Add(inv);
            }

            // Add new nested Medications
            foreach (var med in updatedReview.Medications ?? new List<Medication>())
            {
                med.DoctorsReviewId = existingReview.Id;
                _context.Medications.Add(med);
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
