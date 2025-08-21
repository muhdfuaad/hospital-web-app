using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HmsApi.Data;
using HmsApi.Models.Sales;
using HmsApi.Models.Common;

namespace HmsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesBillsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SalesBillsController(AppDbContext context)
        {
            _context = context;
        }

        // ========== Helpers ==========

        // Atomic sequence increment; relies on the ambient transaction of the caller.
        private async Task<int> GetNextBillNumberAsync(string sequenceName)
        {
            var seq = await _context.BillSequences
            .FirstOrDefaultAsync(s => s.SequenceName == sequenceName);

            if (seq == null)
            {
                seq = new BillSequence { SequenceName = sequenceName, CurrentNumber = 0 };
                _context.BillSequences.Add(seq);
                await _context.SaveChangesAsync();
            }

            seq.CurrentNumber += 1;
            await _context.SaveChangesAsync();
            return seq.CurrentNumber;
        }

        private static string FormatInvoiceNo(string prefix, int number)
            => $"{prefix}-{number:000000}";

        // ========== Queries ==========

        // GET: api/SalesBills
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SalesBillDto>>> GetSalesBills()
        {
            var bills = await _context.SalesBills
                .Where(sb => !sb.IsCancelled)
                .OrderByDescending(sb => sb.Date)
                .Select(sb => new SalesBillDto
                {
                    SalesId = sb.SalesId,
                    InvoiceNo = sb.InvoiceNo,
                    Date = sb.Date,
                    FinalTotal = sb.FinalTotal,
                    PaymentType = sb.PaymentType,
                    TaxType = sb.TaxType,
                    IsCancelled = sb.IsCancelled,
                    IsFinalized = sb.IsFinalized,
                    Items = sb.Items.Select(i => new SalesItemDto
                    {
                        Id = i.Id,
                        MedicineId = i.MedicineId,
                        ItemCode = i.ItemCode,
                        ProductInfo = i.ProductInfo,
                        Type = i.Type,
                        PackItem = i.PackItem,
                        BatchNo = i.BatchNo,
                        ExpiryDate = i.ExpiryDate,
                        Qty = i.Qty,
                        Free = i.Free,
                        DiscPercent = i.DiscPercent,
                        PurchaseRate = i.PurchaseRate,
                        Price = i.Price,
                        MRP = i.MRP,
                        GST = i.GST,
                        Amount = i.Amount,
                        HSNCode = i.HSNCode
                    }).ToList()
                }).ToListAsync();

            return Ok(bills);
        }

        // GET: api/SalesBills/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SalesBillDto>> GetSalesBill(int id)
        {
            var bill = await _context.SalesBills
                .Include(s => s.Items)
                .Where(s => s.SalesId == id)
                .Select(s => new SalesBillDto
                {
                    SalesId = s.SalesId,
                    InvoiceNo = s.InvoiceNo,
                    Date = s.Date,
                    FinalTotal = s.FinalTotal,
                    PaymentType = s.PaymentType,
                    TaxType = s.TaxType,
                    IsCancelled = s.IsCancelled,
                    IsFinalized = s.IsFinalized,
                    Items = s.Items.Select(i => new SalesItemDto
                    {
                        Id = i.Id,
                        MedicineId = i.MedicineId,
                        ItemCode = i.ItemCode,
                        ProductInfo = i.ProductInfo,
                        Type = i.Type,
                        PackItem = i.PackItem,
                        BatchNo = i.BatchNo,
                        ExpiryDate = i.ExpiryDate,
                        Qty = i.Qty,
                        Free = i.Free,
                        DiscPercent = i.DiscPercent,
                        PurchaseRate = i.PurchaseRate,
                        Price = i.Price,
                        MRP = i.MRP,
                        GST = i.GST,
                        Amount = i.Amount,
                        HSNCode = i.HSNCode
                    }).ToList()
                }).FirstOrDefaultAsync();

            if (bill == null) return NotFound();
            return Ok(bill);
        }

        // GET: api/SalesBills/sales-id
        // Only for legacy UI that shows next numeric ID of the PK (NOT the InvoiceNo).
        [HttpGet("sales-id")]
        public async Task<ActionResult<int>> GetNewSalesId()
        {
            var maxId = await _context.SalesBills.MaxAsync(sb => (int?)sb.SalesId) ?? 0;
            return Ok(maxId + 1);
        }

        // GET: api/SalesBills/next-bill-no
        // Non-authoritative preview for UI display. The real assignment happens on POST.
        [HttpGet("next-bill-no")]
        public async Task<ActionResult<string>> GetNextSalesBillPreview()
        {
            var seq = await _context.BillSequences.FirstOrDefaultAsync(s => s.SequenceName == "Sales");
            var next = (seq?.CurrentNumber ?? 0) + 1;
            return Ok(next.ToString()); // or FormatInvoiceNo("S", next)
        }

        // ========== Commands ==========

        // POST: api/SalesBills
        // Creates a sales bill, assigns a unique InvoiceNo, deducts stock, and returns the created bill.
        [HttpPost]
        public async Task<ActionResult<SalesBill>> PostSalesBill(SalesBill salesBill)
        {
            // Use SERIALIZABLE to prevent two concurrent transactions from taking the same number.
            using var transaction = await _context.Database.BeginTransactionAsync(System.Data.IsolationLevel.Serializable);
            try
            {
                // Step 0: Generate the authoritative bill number here
                var nextNo = await GetNextBillNumberAsync("Sales");
                salesBill.InvoiceNo = nextNo.ToString(); // or FormatInvoiceNo("S", nextNo);

                // Step 1: Save items temporarily and detach from bill
                var items = salesBill.Items?.ToList() ?? new List<SalesItem>();
                salesBill.Items = null;

                // Step 2: Save SalesBill header with generated InvoiceNo
                _context.SalesBills.Add(salesBill);
                await _context.SaveChangesAsync();

                // Step 3: Process each item and update stock
                foreach (var item in items)
                {
                    item.Id = 0;
                    item.SalesId = salesBill.SalesId;

                    // Load the selected batch
                    var batch = await _context.MedicineBatches
                        .FirstOrDefaultAsync(b => b.MedicineId == item.MedicineId && b.BatchNo == item.BatchNo);

                    if (batch == null)
                        throw new Exception($"Batch {item.BatchNo} for medicine {item.MedicineId} not found");

                    // Compute required quantity in units (Qty * PackItem)
                    var requiredQty = (int)(item.Qty * item.PackItem);
                    if (requiredQty < 0)
                        throw new Exception("Invalid quantity");

                    // Check availability
                    if (batch.CurrentStock < requiredQty)
                        throw new Exception($"Insufficient stock. Available: {batch.CurrentStock}, Required: {requiredQty}");

                    // Deduct stock
                    batch.CurrentStock -= requiredQty;

                    _context.SalesItems.Add(item);
                }

                await _context.SaveChangesAsync();
                await transaction.CommitAsync();

                // Return the final bill including InvoiceNo back to frontend
                return CreatedAtAction("GetSalesBill", new { id = salesBill.SalesId }, salesBill);
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                var errorMessage = ex.InnerException?.ToString() ?? ex.ToString();
                return BadRequest(new { message = "Failed to save sales bill", detail = errorMessage });
            }
        }

        // PUT: api/SalesBills/5
        // Updates the bill header and items; applies stock differences.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSalesBill(int id, [FromBody] UpdateSalesBillDto dto)
        {
            if (id != dto.SalesId)
                return BadRequest("ID mismatch");

            using var transaction = await _context.Database.BeginTransactionAsync(System.Data.IsolationLevel.Serializable);
            try
            {
                var existingBill = await _context.SalesBills
                    .Include(s => s.Items)
                    .FirstOrDefaultAsync(s => s.SalesId == id);

                if (existingBill == null)
                    return NotFound("SalesBill not found.");

                // Update bill header (do not overwrite InvoiceNo unless you really intend to)
                existingBill.Date = dto.Date;
                existingBill.CustomerId = dto.CustomerId;
                existingBill.InvoiceDate = dto.InvoiceDate;
                existingBill.GrossTotal = dto.GrossTotal;
                existingBill.GstTotal = dto.GstTotal;
                existingBill.Discount = dto.Discount;
                existingBill.Cgst = dto.Cgst;
                existingBill.Sgst = dto.Sgst;
                existingBill.Igst = dto.Igst;
                existingBill.RoundOff = dto.RoundOff;
                existingBill.FinalTotal = dto.FinalTotal;
                existingBill.IsCancelled = dto.IsCancelled;
                existingBill.IsFinalized = dto.IsFinalized;

                // Prepare incoming IDs
                var incomingItemIds = dto.Items.Where(i => i.Id.HasValue).Select(i => i.Id.Value).ToHashSet();

                // 1) Remove items not present anymore (restore stock)
                var itemsToRemove = existingBill.Items
                    .Where(existing => !incomingItemIds.Contains(existing.Id))
                    .ToList();

                foreach (var item in itemsToRemove)
                {
                    var batch = await _context.MedicineBatches
                        .FirstOrDefaultAsync(b => b.MedicineId == item.MedicineId && b.BatchNo == item.BatchNo);

                    if (batch != null)
                    {
                        batch.CurrentStock += (int)(item.Qty * item.PackItem);
                    }

                    _context.SalesItems.Remove(item);
                }

                // 2) Add or update incoming items
                foreach (var itemDto in dto.Items)
                {
                    if (itemDto.Id.HasValue)
                    {
                        // Update existing
                        var existingItem = await _context.SalesItems
                            .FirstOrDefaultAsync(x => x.Id == itemDto.Id.Value && x.SalesId == id);

                        if (existingItem != null)
                        {
                            // If batch or medicine changed, restore old stock and deduct new batch
                            var oldBatchKey = (existingItem.MedicineId, existingItem.BatchNo);
                            var newBatchKey = (itemDto.MedicineId, itemDto.BatchNo);

                            if (oldBatchKey != newBatchKey)
                            {
                                // Restore old
                                var oldBatch = await _context.MedicineBatches
                                    .FirstOrDefaultAsync(b => b.MedicineId == oldBatchKey.MedicineId && b.BatchNo == oldBatchKey.BatchNo);
                                if (oldBatch != null)
                                    oldBatch.CurrentStock += (int)(existingItem.Qty * existingItem.PackItem);

                                // Deduct new
                                var newBatch = await _context.MedicineBatches
                                    .FirstOrDefaultAsync(b => b.MedicineId == newBatchKey.MedicineId && b.BatchNo == newBatchKey.BatchNo);
                                if (newBatch == null)
                                    throw new Exception($"Batch {newBatchKey.BatchNo} for medicine {newBatchKey.MedicineId} not found");

                                var newRequired = (int)(itemDto.Qty * itemDto.PackItem);
                                if (newBatch.CurrentStock < newRequired)
                                    throw new Exception("Insufficient stock for updated item");

                                newBatch.CurrentStock -= newRequired;
                            }
                            else
                            {
                                // Same batch — adjust by difference
                                var oldQtyUnits = (int)(existingItem.Qty * existingItem.PackItem);
                                var newQtyUnits = (int)(itemDto.Qty * itemDto.PackItem);
                                var diff = newQtyUnits - oldQtyUnits;

                                if (diff != 0)
                                {
                                    var batch = await _context.MedicineBatches
                                        .FirstOrDefaultAsync(b => b.MedicineId == itemDto.MedicineId && b.BatchNo == itemDto.BatchNo);

                                    if (batch == null)
                                        throw new Exception($"Batch {itemDto.BatchNo} for medicine {itemDto.MedicineId} not found");

                                    if (diff > 0 && batch.CurrentStock < diff)
                                        throw new Exception("Insufficient stock for item update");

                                    batch.CurrentStock -= diff; // diff can be negative; this adds back when negative
                                }
                            }

                            // Update fields to match frontend naming
                            existingItem.MedicineId = itemDto.MedicineId;
                            existingItem.ItemCode = itemDto.ItemCode;
                            existingItem.ProductInfo = itemDto.ProductInfo;
                            existingItem.Type = itemDto.Type;
                            existingItem.PackItem = itemDto.PackItem;
                            existingItem.BatchNo = itemDto.BatchNo;
                            existingItem.ExpiryDate = itemDto.ExpiryDate;
                            existingItem.Qty = itemDto.Qty;
                            existingItem.Free = itemDto.Free;
                            existingItem.DiscPercent = itemDto.DiscPercent;
                            existingItem.PurchaseRate = itemDto.PurchaseRate;
                            existingItem.Price = itemDto.Price;
                            existingItem.MRP = itemDto.MRP;
                            existingItem.GST = itemDto.GST;
                            existingItem.Amount = itemDto.Amount;
                            existingItem.HSNCode = itemDto.HSNCode;
                            existingItem.BaseAmount = itemDto.BaseAmount;
                            existingItem.GstAmount = itemDto.GstAmount;
                            existingItem.DiscountAmount = itemDto.DiscountAmount;
                        }
                    }
                    else
                    {
                        // Add new item
                        var newItem = new SalesItem
                        {
                            SalesId = existingBill.SalesId,
                            MedicineId = itemDto.MedicineId,
                            ItemCode = itemDto.ItemCode,
                            ProductInfo = itemDto.ProductInfo,
                            Type = itemDto.Type,
                            PackItem = itemDto.PackItem,
                            BatchNo = itemDto.BatchNo,
                            ExpiryDate = itemDto.ExpiryDate,
                            Qty = itemDto.Qty,
                            Free = itemDto.Free,
                            DiscPercent = itemDto.DiscPercent,
                            PurchaseRate = itemDto.PurchaseRate,
                            Price = itemDto.Price,
                            MRP = itemDto.MRP,
                            GST = itemDto.GST,
                            Amount = itemDto.Amount,
                            HSNCode = itemDto.HSNCode,
                            BaseAmount = itemDto.BaseAmount,
                            GstAmount = itemDto.GstAmount,
                            DiscountAmount = itemDto.DiscountAmount
                        };

                        // Deduct stock
                        var batch = await _context.MedicineBatches
                            .FirstOrDefaultAsync(b => b.MedicineId == itemDto.MedicineId && b.BatchNo == itemDto.BatchNo);

                        if (batch == null)
                            throw new Exception($"Batch {itemDto.BatchNo} for medicine {itemDto.MedicineId} not found");

                        var requiredQty = (int)(itemDto.Qty * itemDto.PackItem);
                        if (batch.CurrentStock < requiredQty)
                            throw new Exception("Insufficient stock for new item");

                        batch.CurrentStock -= requiredQty;

                        existingBill.Items.Add(newItem);
                        _context.SalesItems.Add(newItem);
                    }
                }

                await _context.SaveChangesAsync();
                await transaction.CommitAsync();

                return Ok(new { salesId = existingBill.SalesId });
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                var error = ex.InnerException?.Message ?? ex.Message;
                return StatusCode(500, $"Failed to update SalesBill: {error}");
            }
        }

        // PUT: api/SalesBills/5/cancel
        // Cancels the bill and restores stock.
        [HttpPut("{id}/cancel")]
        public async Task<IActionResult> CancelSalesBill(int id)
        {
            using var transaction = await _context.Database.BeginTransactionAsync(System.Data.IsolationLevel.Serializable);
            try
            {
                var bill = await _context.SalesBills
                    .Include(s => s.Items)
                    .FirstOrDefaultAsync(s => s.SalesId == id);

                if (bill == null) return NotFound();

                // Restore stock for all items
                foreach (var item in bill.Items)
                {
                    var batch = await _context.MedicineBatches
                        .FirstOrDefaultAsync(b => b.MedicineId == item.MedicineId && b.BatchNo == item.BatchNo);

                    if (batch != null)
                    {
                        batch.CurrentStock += (int)(item.Qty * item.PackItem);
                    }
                }

                bill.IsCancelled = true;
                await _context.SaveChangesAsync();
                await transaction.CommitAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                return StatusCode(500, $"Failed to cancel bill: {ex.Message}");
            }
        }
    }
}