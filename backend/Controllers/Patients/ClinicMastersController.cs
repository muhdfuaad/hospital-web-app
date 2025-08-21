using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HmsApi.Data;
using HmsApi.Models.Location;

namespace HmsApi.Controllers.Patients
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClinicMastersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ClinicMastersController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/ClinicMasters
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClinicMaster>>> GetClinicMasters()
        {
            return await _context.ClinicMasters.ToListAsync();
        }

        // GET: api/ClinicMasters/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ClinicMaster>> GetClinicMaster(int id)
        {
            var clinicMaster = await _context.ClinicMasters.FindAsync(id);

            if (clinicMaster == null)
            {
                return NotFound();
            }

            return clinicMaster;
        }

        // PUT: api/ClinicMasters/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClinicMaster(int id, ClinicMaster clinicMaster)
        {
            if (id != clinicMaster.Id)
            {
                return BadRequest();
            }

            _context.Entry(clinicMaster).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClinicMasterExists(id))
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

        // POST: api/ClinicMasters
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ClinicMaster>> PostClinicMaster(ClinicMaster clinicMaster)
        {
            _context.ClinicMasters.Add(clinicMaster);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClinicMaster", new { id = clinicMaster.Id }, clinicMaster);
        }

        // DELETE: api/ClinicMasters/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClinicMaster(int id)
        {
            var clinicMaster = await _context.ClinicMasters.FindAsync(id);
            if (clinicMaster == null)
            {
                return NotFound();
            }

            _context.ClinicMasters.Remove(clinicMaster);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClinicMasterExists(int id)
        {
            return _context.ClinicMasters.Any(e => e.Id == id);
        }
    }
}
