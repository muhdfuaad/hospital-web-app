using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HmsApi.Data;
using HmsApi.Models.Purchase;

namespace HmsApi.Controllers.Medics
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicineBatchesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MedicineBatchesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/MedicineBatches
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MedicineBatch>>> GetMedicineBatches()
        {
            return await _context.MedicineBatches
                .Include(b => b.Medicine)
                .Include(b => b.PurchaseItem)
                .ToListAsync();
        }

        // GET: api/MedicineBatches/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MedicineBatch>> GetMedicineBatch(int id)
        {
            var batch = await _context.MedicineBatches
                .Include(b => b.Medicine)
                .Include(b => b.PurchaseItem)
                .FirstOrDefaultAsync(b => b.Id == id);

            if (batch == null)
                return NotFound();

            return batch;
        }

        [HttpGet("by-batch")]
        public async Task<ActionResult<MedicineBatch>> GetBatchByMedicineAndNo(int medicineId, string batchNo)
        {
            var batch = await _context.MedicineBatches
                .FirstOrDefaultAsync(b => b.MedicineId == medicineId && b.BatchNo == batchNo);

            if (batch == null)
                return NotFound();

            return batch;
        }

        [HttpGet("sales-batches")]
        public async Task<ActionResult<IEnumerable<MedicineBatch>>> GetSalesBatches()
        {
            var today = DateTime.Today;
            var batches = await _context.MedicineBatches
                .Where(b => b.CurrentStock > 0 && b.ExpiryDate >= today)
                .OrderBy(b => b.ExpiryDate)
                .Select(b => new
                {
                    b.Id,
                    b.MedicineId,
                    b.BatchNo,
                    b.ExpiryDate,
                    b.CurrentStock,
                    b.SalesRate,
                    b.MRP
                })
                .ToListAsync();

            return Ok(batches);
        }

        // PUT: api/MedicineBatches/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMedicineBatch(int id, MedicineBatch updatedBatch)
        {
            if (id != updatedBatch.Id)
                return BadRequest("ID mismatch");

            var existingBatch = await _context.MedicineBatches.FindAsync(id);
            if (existingBatch == null)
                return NotFound();

            // Optional: Prevent editing batch if associated bill is cancelled/finalized
            var bill = await _context.PurchaseBills
                .Include(b => b.Items)
                .FirstOrDefaultAsync(b => b.PurchaseId == existingBatch.PurchaseItem.PurchaseId);


            // Update fields
            existingBatch.BatchNo = updatedBatch.BatchNo;
            existingBatch.ExpiryDate = updatedBatch.ExpiryDate;
            existingBatch.Qty = updatedBatch.Qty;
            existingBatch.FreeQty = updatedBatch.FreeQty;
            existingBatch.PurchaseRate = updatedBatch.PurchaseRate;
            existingBatch.SalesRate = updatedBatch.SalesRate;
            existingBatch.GST = updatedBatch.GST;
            existingBatch.HSNCode = updatedBatch.HSNCode;
            existingBatch.DiscountPercent = updatedBatch.DiscountPercent;
            existingBatch.DiscountAmount = updatedBatch.DiscountAmount;
            existingBatch.MRP = updatedBatch.MRP;
            existingBatch.IsActive = updatedBatch.IsActive;

            await _context.SaveChangesAsync();
            return NoContent();
        }

        // POST: api/MedicineBatches
        [HttpPost]
        public async Task<ActionResult<MedicineBatch>> PostMedicineBatch(MedicineBatch batch)
        {
            // Optional: Validation - check if PurchaseItem exists
            var item = await _context.PurchaseItems.FindAsync(batch.PurchaseItemId);
            if (item == null)
                return BadRequest("Invalid PurchaseItem reference");

            // Get related medicine
            var medicine = await _context.Medicines.FindAsync(batch.MedicineId);
            if (medicine == null)
                return BadRequest("Invalid Medicine reference");

            // Copy PackItem from Medicine
            batch.PackItem = medicine.PackItem;

            // Save
            _context.MedicineBatches.Add(batch);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMedicineBatch", new { id = batch.Id }, batch);
        }

        // DELETE: api/MedicineBatches/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMedicineBatch(int id)
        {
            var batch = await _context.MedicineBatches.FindAsync(id);
            if (batch == null)
                return NotFound();

            var item = await _context.PurchaseItems.FindAsync(batch.PurchaseItemId);

            _context.MedicineBatches.Remove(batch);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        private bool MedicineBatchExists(int id)
        {
            return _context.MedicineBatches.Any(e => e.Id == id);
        }
    }
}
