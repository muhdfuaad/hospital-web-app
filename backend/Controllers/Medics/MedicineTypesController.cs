using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HmsApi.Data;
using HmsApi.Models;

namespace HmsApi.Controllers.Medics
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicineTypesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MedicineTypesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/MedicineTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MedicineTypeDto>>> GetMedicineTypes()
        {
            var types = await _context.MedicineTypes.ToListAsync();

            var result = types.Select(t => new MedicineTypeDto
            {
                TypeId = t.TypeId,
                TypeName = t.TypeName
            }).ToList();

            return Ok(result);
        }

        // GET: api/MedicineTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MedicineTypeDto>> GetMedicineType(int id)
        {
            var type = await _context.MedicineTypes.FindAsync(id);

            if (type == null)
                return NotFound();

            var result = new MedicineTypeDto
            {
                TypeId = type.TypeId,
                TypeName = type.TypeName
            };

            return Ok(result);
        }

        // PUT: api/MedicineTypes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMedicineType(int id, UpdateMedicineTypeDto updateDto)
        {
            var type = await _context.MedicineTypes.FindAsync(id);
            if (type == null)
                return NotFound();

            if (!string.IsNullOrWhiteSpace(updateDto.TypeName))
            {
                var duplicate = await _context.MedicineTypes
                    .AnyAsync(t => t.TypeName == updateDto.TypeName && t.TypeId != id);

                if (duplicate)
                    return BadRequest("Type name already exists.");

                type.TypeName = updateDto.TypeName;
            }

            _context.Entry(type).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MedicineTypeExists(id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // POST: api/MedicineTypes
        [HttpPost]
        public async Task<ActionResult<MedicineTypeDto>> PostMedicineType(CreateMedicineTypeDto createDto)
        {
            var duplicate = await _context.MedicineTypes
                .AnyAsync(t => t.TypeName == createDto.TypeName);

            if (duplicate)
                return BadRequest("Type name already exists.");

            var type = new MedicineType
            {
                TypeName = createDto.TypeName
            };

            _context.MedicineTypes.Add(type);
            await _context.SaveChangesAsync();

            var result = new MedicineTypeDto
            {
                TypeId = type.TypeId,
                TypeName = type.TypeName
            };

            return Ok(result);
        }

        // DELETE: api/MedicineTypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMedicineType(int id)
        {
            var type = await _context.MedicineTypes.FindAsync(id);
            if (type == null)
                return NotFound();

            var isUsed = await _context.Medicines.AnyAsync(m => m.TypeId == id);
            if (isUsed)
                return BadRequest("Cannot delete type as it is being used by medicines.");

            _context.MedicineTypes.Remove(type);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // GET: api/MedicineTypes/search?term=tablet
        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<MedicineTypeDto>>> SearchMedicineTypes(string term)
        {
            var query = _context.MedicineTypes.AsQueryable();

            if (!string.IsNullOrWhiteSpace(term))
                query = query.Where(t => t.TypeName.Contains(term));

            var types = await query.ToListAsync();

            var result = types.Select(t => new MedicineTypeDto
            {
                TypeId = t.TypeId,
                TypeName = t.TypeName
            }).ToList();

            return Ok(result);
        }

        private bool MedicineTypeExists(int id)
        {
            return _context.MedicineTypes.Any(e => e.TypeId == id);
        }
    }

    // DTOs
    public class MedicineTypeDto
    {
        public int TypeId { get; set; }
        public string TypeName { get; set; }
    }

    public class CreateMedicineTypeDto
    {
        public string TypeName { get; set; }
    }

    public class UpdateMedicineTypeDto
    {
        public string TypeName { get; set; }
    }
}
