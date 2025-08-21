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
    public class PatientCategoriesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PatientCategoriesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/PatientCategories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PatientCategory>>> GetPatientCategories()
        {
            return await _context.PatientCategories.ToListAsync();
        }

        // GET: api/PatientCategories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PatientCategory>> GetPatientCategory(int id)
        {
            var patientCategory = await _context.PatientCategories.FindAsync(id);

            if (patientCategory == null)
            {
                return NotFound();
            }

            return patientCategory;
        }

        // PUT: api/PatientCategories/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPatientCategory(int id, PatientCategory patientCategory)
        {
            if (id != patientCategory.Id)
            {
                return BadRequest();
            }

            _context.Entry(patientCategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PatientCategoryExists(id))
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

        // POST: api/PatientCategories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PatientCategory>> PostPatientCategory(PatientCategory patientCategory)
        {
            _context.PatientCategories.Add(patientCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPatientCategory", new { id = patientCategory.Id }, patientCategory);
        }

        // DELETE: api/PatientCategories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePatientCategory(int id)
        {
            var patientCategory = await _context.PatientCategories.FindAsync(id);
            if (patientCategory == null)
            {
                return NotFound();
            }

            _context.PatientCategories.Remove(patientCategory);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PatientCategoryExists(int id)
        {
            return _context.PatientCategories.Any(e => e.Id == id);
        }
    }
}
