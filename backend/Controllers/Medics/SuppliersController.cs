using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HmsApi.Data;
using HmsApi.Models;

namespace HmsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuppliersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SuppliersController(AppDbContext context)
        {
            _context = context;
        }

        // ------------------------- SUPPLIERS -------------------------

        // GET: api/Suppliers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SupplierDto>>> GetSuppliers()
        {
            var suppliers = await _context.Suppliers
                .Include(s => s.SupplierType)
                .Where(s => s.Status == "1")
                .ToListAsync();

            var result = suppliers.Select(s => new SupplierDto
            {
                Id = s.Id,
                AccNo = s.AccNo,
                Name = s.Name,
                Address = s.Address,
                Location = s.Location,
                Post = s.Post,
                Pin = s.Pin,
                Phone = s.Phone,
                Whatsapp = s.Whatsapp,
                Email = s.Email,
                SupplierTypeId = s.SupplierTypeId,
                SupplierTypeName = s.SupplierType.TypeName,
                GstNo = s.GstNo,
                DiscPercentage = s.DiscPercentage  // ✅ keep as string now
            }).ToList();

            return Ok(result);
        }


        // GET: api/Suppliers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SupplierDto>> GetSupplier(int id)
        {
            var supplier = await _context.Suppliers
                .Include(s => s.SupplierType)
                .FirstOrDefaultAsync(s => s.Id == id && s.Status == "1");

            if (supplier == null)
                return NotFound();

            var dto = new SupplierDto
            {
                Id = supplier.Id,
                AccNo = supplier.AccNo,
                Name = supplier.Name,
                Address = supplier.Address,
                Location = supplier.Location,
                Post = supplier.Post,
                Pin = supplier.Pin,
                Phone = supplier.Phone,
                Whatsapp = supplier.Whatsapp,
                Email = supplier.Email,
                SupplierTypeId = supplier.SupplierTypeId,
                SupplierTypeName = supplier.SupplierType.TypeName,
                GstNo = supplier.GstNo,
                DiscPercentage = supplier.DiscPercentage  // ✅ keep as string
            };

            return Ok(dto);
        }


        // POST: api/Suppliers
        [HttpPost]
        public async Task<ActionResult<Supplier>> PostSupplier([FromBody] CreateSupplierDto dto)
        {
            var supplierType = await _context.SupplierTypes.FindAsync(dto.SupplierTypeId);
            if (supplierType == null)
                return BadRequest("Invalid Supplier Type.");

            var supplier = new Supplier
            {
                AccNo = dto.AccNo,
                Name = dto.Name,
                Address = dto.Address,
                Location = dto.Location,
                Post = dto.Post,
                Pin = dto.Pin,
                Phone = dto.Phone,
                Whatsapp = dto.Whatsapp,
                Email = dto.Email,
                SupplierTypeId = dto.SupplierTypeId,
                GstNo = dto.GstNo,
                DiscPercentage = dto.DiscPercentage?.ToString() ?? "0",
                Status = "1",
                Stopped = "N"
            };

            _context.Suppliers.Add(supplier);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetSupplier), new { id = supplier.Id }, supplier);
        }



        // PUT: api/Suppliers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSupplier(int id, [FromBody] UpdateSupplierDto dto)
        {
            var supplier = await _context.Suppliers.FindAsync(id);
            if (supplier == null)
                return NotFound();

            var supplierType = await _context.SupplierTypes.FindAsync(dto.SupplierTypeId);
            if (supplierType == null)
                return BadRequest("Invalid Supplier Type.");

            supplier.AccNo = dto.AccNo;
            supplier.Name = dto.Name;
            supplier.Address = dto.Address;
            supplier.Location = dto.Location;
            supplier.Post = dto.Post;
            supplier.Pin = dto.Pin;
            supplier.Phone = dto.Phone;
            supplier.Whatsapp = dto.Whatsapp;
            supplier.Email = dto.Email;
            supplier.SupplierTypeId = dto.SupplierTypeId;
            supplier.GstNo = dto.GstNo;
            supplier.DiscPercentage = dto.DiscPercentage?.ToString() ?? "0";

            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE (Soft delete)
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSupplier(int id)
        {
            var supplier = await _context.Suppliers.FindAsync(id);
            if (supplier == null)
                return NotFound();

            supplier.Status = "0";
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // PATCH: /api/Suppliers/5/stop
        [HttpPatch("{id}/stop")]
        public async Task<IActionResult> MarkSupplierAsStopped(int id)
        {
            var supplier = await _context.Suppliers.FindAsync(id);
            if (supplier == null)
                return NotFound();

            supplier.Stopped = "Y";
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // PATCH: /api/Suppliers/5/activate
        [HttpPatch("{id}/activate")]
        public async Task<IActionResult> ReactivateSupplier(int id)
        {
            var supplier = await _context.Suppliers.FindAsync(id);
            if (supplier == null)
                return NotFound();

            supplier.Stopped = "N";
            supplier.Status = "1";
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // ------------------------- SUPPLIER TYPES -------------------------

        // GET: api/Suppliers/types
        [HttpGet("types")]
        public async Task<ActionResult<IEnumerable<SupplierTypeDto>>> GetSupplierTypes()
        {
            var types = await _context.SupplierTypes
                .Select(t => new SupplierTypeDto
                {
                    SupplierTypeId = t.SupplierTypeId,
                    TypeName = t.TypeName
                })
                .ToListAsync();

            return Ok(types);
        }

        // POST: api/Suppliers/types
        [HttpPost("types")]
        public async Task<ActionResult<SupplierTypeDto>> PostSupplierType([FromBody] SupplierTypeInputDto input)
        {
            if (string.IsNullOrWhiteSpace(input.TypeName))
                return BadRequest("Type name cannot be empty.");

            var type = new SupplierType
            {
                TypeName = input.TypeName
            };

            _context.SupplierTypes.Add(type);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetSupplierTypes), new { id = type.SupplierTypeId }, new SupplierTypeDto
            {
                SupplierTypeId = type.SupplierTypeId,
                TypeName = type.TypeName
            });
        }

    }
}
