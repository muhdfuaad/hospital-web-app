using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using testapi.Data;
using testapi.Models;

namespace testapi.Controllers
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
        public async Task<ActionResult<IEnumerable<VolunteersNote>>> GetVolunteersNotes()
        {
            return await _context.VolunteersNotes.ToListAsync();
        }

        // GET: api/VolunteersNotes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<VolunteersNote>> GetVolunteersNote(int id)
        {
            var volunteersNote = await _context.VolunteersNotes.FindAsync(id);
            if (volunteersNote == null)
                return NotFound();

            var noteDto = new
            {
                volunteersNote.Id,
                volunteersNote.PatientId,
                volunteersNote.ReviewId,
                Date = volunteersNote.Date.ToString("yyyy-MM-dd"),
                Cells = volunteersNote.Cells,
                Descriptions = volunteersNote.Descriptions
            };

            return Ok(noteDto);
        }

        // GET: api/VolunteersNotes/review/{reviewId}
        [HttpGet("review/{reviewId}")]
        public async Task<ActionResult<VolunteersNote>> GetByReviewId(string reviewId)
        {
            var note = await _context.VolunteersNotes.FirstOrDefaultAsync(n => n.ReviewId == reviewId);
            if (note == null)
                return NotFound();

            return note;
        }

        // POST: api/VolunteersNotes
        [HttpPost]
        public async Task<ActionResult<VolunteersNote>> PostVolunteersNote(VolunteersNote volunteersNote)
        {
            volunteersNote.Cells = volunteersNote.Cells
                .Where(kv => kv.Value)
                .ToDictionary(kv => kv.Key, kv => kv.Value);

            volunteersNote.Descriptions = volunteersNote.Descriptions
                .Where(kv => !string.IsNullOrWhiteSpace(kv.Value))
                .ToDictionary(kv => kv.Key, kv => kv.Value);

            _context.VolunteersNotes.Add(volunteersNote);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVolunteersNote", new { id = volunteersNote.Id }, volunteersNote);
        }

        // PUT: api/VolunteersNotes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVolunteersNote(int id, VolunteersNote volunteersNote)
        {
            if (id != volunteersNote.Id)
                return BadRequest();

            volunteersNote.Cells = volunteersNote.Cells
                .Where(kv => kv.Value)
                .ToDictionary(kv => kv.Key, kv => kv.Value);

            volunteersNote.Descriptions = volunteersNote.Descriptions
                .Where(kv => !string.IsNullOrWhiteSpace(kv.Value))
                .ToDictionary(kv => kv.Key, kv => kv.Value);

            _context.Entry(volunteersNote).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VolunteersNoteExists(id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // DELETE: api/VolunteersNotes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVolunteersNote(int id)
        {
            var volunteersNote = await _context.VolunteersNotes.FindAsync(id);
            if (volunteersNote == null)
                return NotFound();

            _context.VolunteersNotes.Remove(volunteersNote);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // GET: api/VolunteersNotes/procedures
        [HttpGet("procedures")]
        public async Task<ActionResult<IEnumerable<VolunteersProcedure>>> GetVolunteersProcedures()
        {
            return await _context.VolunteersProcedures.ToListAsync();
        }

        // POST: api/VolunteersNotes/procedures
        [HttpPost("procedures")]
        public async Task<IActionResult> PostVolunteersProcedure([FromBody] VolunteersProcedure procedure)
        {
            if (string.IsNullOrWhiteSpace(procedure.Name))
                return BadRequest("Procedure name is required");

            if (await _context.VolunteersProcedures.AnyAsync(p => p.Name == procedure.Name))
                return Conflict("Procedure already exists");

            _context.VolunteersProcedures.Add(procedure);
            await _context.SaveChangesAsync();

            return Ok(procedure);
        }

        // DELETE: api/VolunteersNotes/procedures/{name}
        [HttpDelete("procedures/{name}")]
        public async Task<IActionResult> DeleteProcedure(string name)
        {
            var procedure = await _context.VolunteersProcedures.FirstOrDefaultAsync(p => p.Name == name);
            if (procedure == null)
                return NotFound();

            _context.VolunteersProcedures.Remove(procedure);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // PUT: api/VolunteersNotes/procedures/{oldName}
        [HttpPut("procedures/{oldName}")]
        public async Task<IActionResult> RenameProcedure(string oldName, [FromBody] string newName)
        {
            if (string.IsNullOrWhiteSpace(newName))
                return BadRequest("New procedure name is required");

            var procedure = await _context.VolunteersProcedures.FirstOrDefaultAsync(p => p.Name == oldName);
            if (procedure == null)
                return NotFound();

            if (await _context.VolunteersProcedures.AnyAsync(p => p.Name == newName))
                return Conflict("Procedure with new name already exists");

            procedure.Name = newName;
            await _context.SaveChangesAsync();

            return Ok(procedure);
        }

        private bool VolunteersNoteExists(int id)
        {
            return _context.VolunteersNotes.Any(e => e.Id == id);
        }
    }
}
