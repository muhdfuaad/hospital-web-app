using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HmsApi.Data;
using HmsApi.Models.Purchase;
using HmsApi.Models;

namespace HmsApi.Controllers.Medics
{
    [Route("api/[controller]")]
    [ApiController]
    public class PurchaseBillsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PurchaseBillsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/PurchaseBills
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PurchaseBillDto>>> GetPurchaseBills()
        {
            try
            {
                var bills = await (from pb in _context.PurchaseBills
                               join s in _context.Suppliers on pb.SupplierId equals s.Id
                               where pb.IsCancelled == false // Optional: filter cancelled if needed
                               orderby pb.Date descending     // Optional: recent first
                               select new PurchaseBillDto
                               {
                                   PurchaseId = pb.PurchaseId,
                                   InvoiceNo = pb.InvoiceNo,
                                   Date = pb.Date,
                                   FinalTotal = pb.FinalTotal,
                                   PaymentType = pb.PaymentType,
                                   TaxType = pb.TaxType,
                                   SupplierName = s.Name
                               }).ToListAsync();

            return Ok(bills);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Server error: {ex.Message}");
            }

        }


        // GET: api/PurchaseBills/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PurchaseBill>> GetPurchaseBill(int id)
        {
            var purchaseBill = await _context.PurchaseBills
                .Include(pb => pb.Items)
                .FirstOrDefaultAsync(pb => pb.PurchaseId == id);

            if (purchaseBill == null)
                return NotFound();

            return purchaseBill;
        }

        [HttpGet("purchase-id")]
        public async Task<ActionResult<int>> GetNewPurchaseId()
        {

            // ---------------- SEQUENCE LOGIC ----------------
            int n = 0;
            var sequence = await _context.BillSequences
                .FirstOrDefaultAsync(s => s.SequenceName == "Purchase");

            if (sequence == null)
                return BadRequest("No sequence found for PurchaseBill");
            int sC = sequence.CurrentNumber;
            var maxId = await _context.PurchaseBills.MaxAsync(pb => (int?)pb.PurchaseId) ?? 0;
            maxId += 1;
            if(maxId == 1)
            {
                n = sC + maxId;
            }
            else
            {
                n = maxId;
            }
                //sequence.CurrentNumber += 1;
            return Ok(n);
        }

        // PUT: api/PurchaseBills/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
       
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPurchaseBill(int id, [FromBody] UpdatePurchaseBillDto dto)
        {
            if (id != dto.PurchaseId)
                return BadRequest("ID mismatch");

            using var transaction = await _context.Database.BeginTransactionAsync();

            try
            {
                var existingBill = await _context.PurchaseBills
                    .Include(p => p.Items)
                    .FirstOrDefaultAsync(p => p.PurchaseId == id);

                if (existingBill == null)
                    return NotFound("PurchaseBill not found.");

                // Update PurchaseBill core fields
                existingBill.Date = dto.Date;
                existingBill.SupplierId = dto.SupplierId;
                existingBill.InvoiceNo = dto.InvoiceNo;
                existingBill.InvoiceDate = dto.InvoiceDate;
                existingBill.GrossTotal = dto.GrossTotal;
                existingBill.GstTotal = dto.GstTotal;
                existingBill.Discount = dto.Discount;
                existingBill.Cgst = dto.Cgst;
                existingBill.Sgst = dto.Sgst;
                existingBill.Igst = dto.Igst;
                existingBill.CessAmount = dto.CessAmount;
                existingBill.RoundOff = dto.RoundOff;
                existingBill.FinalTotal = dto.FinalTotal;
                existingBill.IsCancelled = dto.IsCancelled;

                // Step 1: Identify all incoming item IDs
                var incomingItemIds = dto.Items.Where(i => i.Id.HasValue).Select(i => i.Id.Value).ToHashSet();

                // Step 2: Remove items no longer present
                var itemsToRemove = existingBill.Items
                    .Where(existing => !incomingItemIds.Contains(existing.Id))
                    .ToList();

                foreach (var item in itemsToRemove)
                    _context.PurchaseItems.Remove(item); // cascades properly

                // Step 3: Add new or update existing items
                foreach (var itemDto in dto.Items)
                {
                    if (itemDto.Id.HasValue)
                    {
                        // 🔁 Update existing item
                        var existingItem = await _context.PurchaseItems
                            .FirstOrDefaultAsync(x => x.Id == itemDto.Id.Value && x.PurchaseId == id);

                        if (existingItem != null)
                        {
                            existingItem.MedicineId = itemDto.MedicineId;
                            existingItem.BatchNo = itemDto.BatchNo;
                            existingItem.ExpiryDate = itemDto.ExpiryDate;
                            existingItem.Qty = itemDto.Qty;
                            existingItem.FreeQty = itemDto.FreeQty;
                            existingItem.PurchaseRate = itemDto.PurchaseRate;
                            existingItem.SalesRate = itemDto.SalesRate;
                            existingItem.Gst = itemDto.Gst;
                            existingItem.HsnCode = itemDto.HsnCode;
                            existingItem.BaseAmount = itemDto.BaseAmount;
                            existingItem.GstAmount = itemDto.GstAmount;
                            existingItem.CgstAmount = itemDto.CgstAmount;
                            existingItem.SgstAmount = itemDto.SgstAmount;
                            existingItem.IgstAmount = itemDto.IgstAmount;
                            existingItem.Mrp = itemDto.Mrp;
                            existingItem.DiscountPercent = itemDto.DiscountPercent;
                            existingItem.DiscountAmount = itemDto.DiscountAmount;
                            existingItem.TotalAmount = itemDto.TotalAmount;
                        }
                    }
                    else
                    {
                        // Add new item
                        var newItem = new PurchaseItem
                        {
                            PurchaseId = existingBill.PurchaseId,
                            MedicineId = itemDto.MedicineId,
                            BatchNo = itemDto.BatchNo,
                            ExpiryDate = itemDto.ExpiryDate,
                            Qty = itemDto.Qty,
                            FreeQty = itemDto.FreeQty,
                            PurchaseRate = itemDto.PurchaseRate,
                            SalesRate = itemDto.SalesRate,
                            Gst = itemDto.Gst,
                            HsnCode = itemDto.HsnCode,
                            BaseAmount = itemDto.BaseAmount,
                            GstAmount = itemDto.GstAmount,
                            CgstAmount = itemDto.CgstAmount,
                            SgstAmount = itemDto.SgstAmount,
                            IgstAmount = itemDto.IgstAmount,
                            Mrp = itemDto.Mrp,
                            DiscountPercent = itemDto.DiscountPercent,
                            DiscountAmount = itemDto.DiscountAmount,
                            TotalAmount = itemDto.TotalAmount,
                        };

                        existingBill.Items.Add(newItem);
                        _context.PurchaseItems.Add(newItem);
                    }
                }

                await _context.SaveChangesAsync();
                await transaction.CommitAsync();

                return Ok(new { purchaseId = existingBill.PurchaseId });
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                var error = ex.InnerException?.Message ?? ex.Message;
                return StatusCode(500, $"Failed to update PurchaseBill: {error}");
            }
        }


        // POST: api/PurchaseBills
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<IActionResult> CreatePurchaseBill([FromBody] CreatePurchaseBillDto dto)
        {
            using var transaction = await _context.Database.BeginTransactionAsync();
            try
            {
                // ---------------- CREATE PURCHASE BILL ----------------
                var bill = new PurchaseBill
                {
                    PurchaseId = dto.PurchaseId,
                    Date = dto.Date,
                    SupplierId = dto.SupplierId,
                    InvoiceNo = dto.InvoiceNo,
                    InvoiceDate = dto.InvoiceDate,
                    PaymentType = dto.PaymentType,
                    GrossTotal = dto.GrossTotal,
                    GstTotal = dto.GstTotal,
                    Discount = dto.Discount,
                    Cgst = dto.Cgst,
                    Sgst = dto.Sgst,
                    Igst = dto.Igst,
                    CessAmount = dto.CessAmount,
                    RoundOff = dto.RoundOff,
                    FinalTotal = dto.FinalTotal,
                    // ✅ Convert TaxType from string or directly use short from DTO
                    TaxType = dto.TaxType,
                    IsCancelled = dto.IsCancelled,
                    Items = new List<PurchaseItem>() // will add below
                };

                // ---------------- ADD ITEMS & MEDICINE BATCHES ----------------
                foreach (var itemDto in dto.Items)
                {
                    var purchaseItem = new PurchaseItem
                    {
                        MedicineId = itemDto.MedicineId,
                        BatchNo = itemDto.BatchNo,
                        ExpiryDate = itemDto.ExpiryDate,
                        Qty = itemDto.Qty,
                        FreeQty = itemDto.FreeQty,
                        PurchaseRate = itemDto.PurchaseRate,
                        SalesRate = itemDto.SalesRate,
                        Gst = itemDto.Gst,
                        HsnCode = itemDto.HsnCode,
                        BaseAmount = itemDto.BaseAmount,
                        GstAmount = itemDto.GstAmount,
                        CgstAmount = itemDto.CgstAmount,
                        SgstAmount = itemDto.SgstAmount,
                        IgstAmount = itemDto.IgstAmount,
                        Mrp = itemDto.Mrp,
                        DiscountPercent = itemDto.DiscountPercent,
                        DiscountAmount = itemDto.DiscountAmount,
                        TotalAmount = itemDto.TotalAmount,
                        PackItem = itemDto.PackItem,
                        StripMrp = itemDto.StripMrp,
                        StripRate = itemDto.StripRate
                    };

                    bill.Items.Add(purchaseItem);
               

                // ✅ Create corresponding MedicineBatch entry
                //var batch = new MedicineBatch
                //{
                //    PurchaseItem = purchaseItem,
                //    BatchNo = itemDto.BatchNo,
                //    ExpiryDate = DateTime.TryParse(itemDto.ExpiryDate, out var dt) ? dt : throw new Exception("Invalid ExpiryDate"),
                //    Qty = itemDto.Qty + itemDto.FreeQty,
                //    PackItem = itemDto.PackItem,
                //    StripMrp = itemDto.StripMrp,
                //    StripRate = itemDto.StripRate
                //};

                //_context.MedicineBatches.Add(batch);
            }

                // ---------------- SAVE BILL ----------------
                _context.PurchaseBills.Add(bill);
                await _context.SaveChangesAsync();
                await transaction.CommitAsync();

                // Return the generated PurchaseId
                return Ok(new { purchaseId = bill.PurchaseId });
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                var error = ex.InnerException?.Message ?? ex.Message;
                return StatusCode(500, $"Failed to create PurchaseBill: {error}");
            }
        }


        // DELETE: api/PurchaseBills/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePurchaseItem(int id)
        {
            var item = await _context.PurchaseItems.FindAsync(id);
            if (item == null)
            {
                return NotFound();
            }

            item.IsDeleted = true; 
            item.DeletedAt = DateTime.Now;
            item.DeletedBy = "System"; // Optional: Replace with actual user

            await _context.SaveChangesAsync();
            return NoContent();
        }


        [HttpPut("{id}/cancel")]
        public async Task<IActionResult> CancelPurchaseBill(int id)
        {
            var bill = await _context.PurchaseBills.FindAsync(id);
            if (bill == null) return NotFound();

            bill.IsCancelled = true;
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}