using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HmsApi.Data;
using HmsApi.Models;

namespace HmsApi.Controllers.Medics
{
    [Route("api/[controller]")]
    [ApiController]
    public class PurchaseItemsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PurchaseItemsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/PurchaseItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PurchaseItem>>> GetPurchaseItems()
        {
            return await _context.PurchaseItems
                .Where(item => !item.IsDeleted)
                .ToListAsync();
        }

        // GET: api/PurchaseItems/by-bill/5
        [HttpGet("by-bill/{billId}")]
        public async Task<ActionResult<IEnumerable<PurchaseItem>>> GetItemsByBill(int billId)
        {
            var items = await _context.PurchaseItems
                .Where(i => i.PurchaseId == billId)
                .ToListAsync();

            return Ok(items);
        }

        // GET: api/PurchaseItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PurchaseItem>> GetPurchaseItem(int id)
        {
            var purchaseItem = await _context.PurchaseItems.FindAsync(id);

            if (purchaseItem == null)
            {
                return NotFound();
            }

            return purchaseItem;
        }

        // PUT: api/PurchaseItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPurchaseItem(int id, PurchaseItem purchaseItem)
        {
            if (id != purchaseItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(purchaseItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PurchaseItemExists(id))
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

        // GET: api/PurchaseItems/by-bill/5
        [HttpGet("with-medicine/by-bill/{billId}")]
        public async Task<ActionResult<IEnumerable<object>>> GetItemsWithMedicineByBill(int billId)
        {
            var items = await _context.PurchaseItems
                .Where(i => i.PurchaseId == billId)
                .Include(i => i.PurchaseBill)
                .Include(i => i.Medicine) // ensure you have navigation property
                .Select(i => new
                {
                    i.Id,
                    i.MedicineId,
                    MedicineName = i.Medicine.MedicineName,
                    i.BatchNo,
                    i.ExpiryDate,
                    i.Qty,
                    i.PurchaseRate,
                    i.SalesRate,
                    i.Gst,
                    i.BaseAmount,
                    i.GstAmount,
                    i.TotalAmount,
                    i.HsnCode,
                })
                .ToListAsync();

            return Ok(items);
        }


        // POST: api/PurchaseItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PurchaseItem>> PostPurchaseItem(PurchaseItem purchaseItem)
        {
            _context.PurchaseItems.Add(purchaseItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPurchaseItem", new { id = purchaseItem.Id }, purchaseItem);
        }

        // DELETE: api/PurchaseItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> SoftDeletePurchaseItem(int id)
        {
            var item = await _context.PurchaseItems.FindAsync(id);
            if (item == null)
                return NotFound();

            // Soft-delete logic
            item.IsDeleted = true;
            item.DeletedBy = "System"; // Later replace with logged-in username
            item.DeletedAt = DateTime.Now;

            await _context.SaveChangesAsync();
            return NoContent();
        }


        private bool PurchaseItemExists(int id)
        {
            return _context.PurchaseItems.Any(e => e.Id == id);
        }
    }
}
