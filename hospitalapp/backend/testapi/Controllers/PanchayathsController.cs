using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using testapi.Data;
using testapi.Models.Location;

namespace testapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PanchayathsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PanchayathsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Panchayaths
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Panchayath_view>>> GetPanchayaths()
        {
            // await _context.Panchayaths.ToListAsync();
            var result = await (from p in _context.Panchayaths
                                join d in _context.Districts
                                on p.DstId equals d.Id
                                select new
                                {
                                    PanchayathId = p.Id,
                                    PanchayathName = p.Name,
                                    DstId = d.Id,
                                    DstName = d.Name
                                }).ToListAsync();
            return Ok(result);
        }

        // GET: api/Panchayaths/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Panchayath>> GetPanchayath(int id)
        {
            var panchayath = await _context.Panchayaths.FindAsync(id);

            if (panchayath == null)
            {
                return NotFound();
            }

            return panchayath;
        }

        // PUT: api/Panchayaths/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPanchayath(int id, Panchayath panchayath)
        {
            if (id != panchayath.Id)
            {
                return BadRequest();
            }

            _context.Entry(panchayath).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PanchayathExists(id))
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

        // POST: api/Panchayaths
        [HttpPost]
        public async Task<ActionResult<Panchayath>> PostPanchayath(Panchayath panchayath)
        {
            _context.Panchayaths.Add(panchayath);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPanchayath), new { id = panchayath.Id }, panchayath);
        }

        // DELETE: api/Panchayaths/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePanchayath(int id)
        {
            var panchayath = await _context.Panchayaths.FindAsync(id);
            if (panchayath == null)
            {
                return NotFound();
            }

            _context.Panchayaths.Remove(panchayath);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PanchayathExists(int id)
        {
            return _context.Panchayaths.Any(e => e.Id == id);
        }
    }
}
