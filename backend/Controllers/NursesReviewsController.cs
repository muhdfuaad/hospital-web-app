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
    public class NursesReviewsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public NursesReviewsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/NursesReviews
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NursesReview>>> GetNursesReviews()
        {
            return await _context.NursesReviews.ToListAsync();
        }

        // GET: api/NursesReviews/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NursesReview>> GetNursesReview(int id)
        {
            var NursesReview = await _context.NursesReviews.FindAsync(id);
            if (NursesReview == null)
                return NotFound();

            var noteDto = new
            {
                NursesReview.Id,
                NursesReview.PatientId,
                NursesReview.ReviewId,
                Date = NursesReview.Date.ToString("yyyy-MM-dd"),
                Cells = NursesReview.Cells,
                Descriptions = NursesReview.Descriptions
            };

            return Ok(noteDto);
        }

        // GET: api/NursesReviews/review/{reviewId}
        [HttpGet("review/{reviewId}")]
        public async Task<ActionResult<NursesReview>> GetByReviewId(string reviewId)
        {
            var note = await _context.NursesReviews.FirstOrDefaultAsync(n => n.ReviewId == reviewId);
            if (note == null)
                return NotFound();

            return note;
        }

        [HttpGet("by-assignment/{assignmentId}")]
        public async Task<ActionResult<IEnumerable<NursesReview>>> GetReviewsByAssignmentId(string assignmentId)
        {
            var reviews = await _context.NursesReviews
                .Where(r => r.ReviewId == assignmentId)
                .ToListAsync();

            if (!reviews.Any())
                return NotFound();

            return Ok(reviews);
        }


        // POST: api/NursesReviews
        [HttpPost]
        public async Task<ActionResult<NursesReview>> PostNursesReview(NursesReview NursesReview)
        {
            NursesReview.Cells = NursesReview.Cells
                .Where(kv => kv.Value)
                .ToDictionary(kv => kv.Key, kv => kv.Value);

            NursesReview.Descriptions = NursesReview.Descriptions
                .Where(kv => !string.IsNullOrWhiteSpace(kv.Value))
                .ToDictionary(kv => kv.Key, kv => kv.Value);

            _context.NursesReviews.Add(NursesReview);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNursesReview", new { id = NursesReview.Id }, NursesReview);
        }

        // PUT: api/NursesReviews/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNursesReview(int id, NursesReview NursesReview)
        {
            if (id != NursesReview.Id)
                return BadRequest();

            NursesReview.Cells = NursesReview.Cells
                .Where(kv => kv.Value)
                .ToDictionary(kv => kv.Key, kv => kv.Value);

            NursesReview.Descriptions = NursesReview.Descriptions
                .Where(kv => !string.IsNullOrWhiteSpace(kv.Value))
                .ToDictionary(kv => kv.Key, kv => kv.Value);

            _context.Entry(NursesReview).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NursesReviewExists(id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // DELETE: api/NursesReviews/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNursesReview(int id)
        {
            var NursesReview = await _context.NursesReviews.FindAsync(id);
            if (NursesReview == null)
                return NotFound();

            _context.NursesReviews.Remove(NursesReview);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // GET: api/NursesReviews/procedures
        [HttpGet("procedures")]
        public async Task<ActionResult<IEnumerable<NursesProcedure>>> GetNursesProcedures()
        {
            return await _context.NursesProcedures.ToListAsync();
        }

        // POST: api/NursesReviews/procedures
        [HttpPost("procedures")]
        public async Task<IActionResult> PostNursesProcedure([FromBody] NursesProcedure procedure)
        {
            if (string.IsNullOrWhiteSpace(procedure.Name))
                return BadRequest("Procedure name is required");

            if (await _context.NursesProcedures.AnyAsync(p => p.Name == procedure.Name))
                return Conflict("Procedure already exists");

            _context.NursesProcedures.Add(procedure);
            await _context.SaveChangesAsync();

            return Ok(procedure);
        }

        // DELETE: api/NursesReviews/procedures/{name}
        [HttpDelete("procedures/{name}")]
        public async Task<IActionResult> DeleteProcedure(string name)
        {
            var procedure = await _context.NursesProcedures.FirstOrDefaultAsync(p => p.Name == name);
            if (procedure == null)
                return NotFound();

            _context.NursesProcedures.Remove(procedure);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // PUT: api/NursesReviews/procedures/{oldName}
        [HttpPut("procedures/{oldName}")]
        public async Task<IActionResult> RenameProcedure(string oldName, [FromBody] string newName)
        {
            if (string.IsNullOrWhiteSpace(newName))
                return BadRequest("New procedure name is required");

            var procedure = await _context.NursesProcedures.FirstOrDefaultAsync(p => p.Name == oldName);
            if (procedure == null)
                return NotFound();

            if (await _context.NursesProcedures.AnyAsync(p => p.Name == newName))
                return Conflict("Procedure with new name already exists");

            procedure.Name = newName;
            await _context.SaveChangesAsync();

            return Ok(procedure);
        }

        private bool NursesReviewExists(int id)
        {
            return _context.NursesReviews.Any(e => e.Id == id);
        }
    }
}
