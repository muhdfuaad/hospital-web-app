using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.SqlClient;
using testapi.Data;
using testapi.Models;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace testapi.Controllers.Medics
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicinesController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly string _connectionString;

        public MedicinesController(AppDbContext context, IConfiguration configuration)
        {
            _context = context;
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        // GET: api/Medicines
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MedicineDto>>> GetMedicines()
        {
            var medicines = await _context.Medicines
                .Include(m => m.Company)
                .Include(m => m.Type)
                .ToListAsync();

            var result = medicines.Select(m => new MedicineDto
            {
                Id = m.Id,
                ItemCode = m.ItemCode,
                MedicineName = m.MedicineName,
                Company = m.Company.CompanyName,
                GenericName = m.GenericName,
                GST = m.GST,
                BillCode = m.BillCode,
                ItemShort = m.ItemShort,
                Rack = m.Rack,
                Shelf = m.Shelf,
                Type = m.Type.TypeName,
                Ingredients = m.Ingredients,
                Cess = m.Cess,
                Discount = m.Discount,
                ROL = m.ROL,
                PackItem = m.PackItem,
                HSNCode = m.HSNCode,
                PurchaseRate = m.PurchaseRate?.ToString("F2"),
                SalesRate = m.SalesRate?.ToString("F2"),
                LastBill = m.LastBill?.ToString("yyyy-MM-dd"),
                LastPurchase = m.LastPurchase?.ToString("yyyy-MM-dd"),
                Quantity = m.Quantity.ToString()
            }).ToList();

            return Ok(result);
        }

        [HttpGet("dropdown")]
        public async Task<ActionResult<IEnumerable<object>>> GetMedicineDropdown()
        {
            var dropdownItems = await _context.Medicines
                .Select(m => new
                {
                    id = m.Id,
                    medicineName = m.MedicineName,
                    itemCode = m.ItemCode,
                    purchaseRate = m.PurchaseRate ?? 0,
                    salesRate = m.SalesRate ?? 0,
                    gst = m.GST,
                    hsnCode = m.HSNCode
                })
                .ToListAsync();

            return Ok(dropdownItems);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MedicineDto>> GetMedicine(int id)
        {
            var medicine = await _context.Medicines
                .Include(m => m.Company)
                .Include(m => m.Type)
                .FirstOrDefaultAsync(m => m.Id == id);

            if (medicine == null)
                return NotFound();

            var result = new MedicineDto
            {
                Id = medicine.Id,
                ItemCode = medicine.ItemCode,
                MedicineName = medicine.MedicineName,
                
                CompanyId = medicine.CompanyId, // ✅ required for dropdown
                Company = medicine.Company.CompanyName,

                TypeId = medicine.TypeId,       // ✅ required for dropdown
                Type = medicine.Type.TypeName,

                GenericName = medicine.GenericName,
                GST = medicine.GST,
                BillCode = medicine.BillCode,
                ItemShort = medicine.ItemShort,
                Rack = medicine.Rack,
                Shelf = medicine.Shelf,
                Ingredients = medicine.Ingredients,
                Cess = medicine.Cess,
                Discount = medicine.Discount,
                ROL = medicine.ROL,
                PackItem = medicine.PackItem,
                HSNCode = medicine.HSNCode,
                PurchaseRate = medicine.PurchaseRate?.ToString("F2"),
                SalesRate = medicine.SalesRate?.ToString("F2"),
                LastBill = medicine.LastBill?.ToString("yyyy-MM-dd"),
                LastPurchase = medicine.LastPurchase?.ToString("yyyy-MM-dd"),
                Quantity = medicine.Quantity.ToString()
            };

            return Ok(result);
        }

        // Search and other methods unchanged except Id type from string to int...

        [HttpPut("{id}")]
        public async Task<IActionResult> PutMedicine(int id, UpdateMedicineDto updateDto)
        {
            var medicine = await _context.Medicines.FindAsync(id);
            if (medicine == null)
                return NotFound(new { message = $"Medicine with ID {id} not found." });

            // ✅ Apply updates from DTO to entity
            medicine.ItemCode = updateDto.ItemCode;
            medicine.MedicineName = updateDto.MedicineName;
            medicine.CompanyId = updateDto.CompanyId;
            medicine.TypeId = updateDto.TypeId;
            medicine.GenericName = updateDto.GenericName;
            medicine.GST = updateDto.GST;
            medicine.BillCode = updateDto.BillCode;
            medicine.ItemShort = updateDto.ItemShort;
            medicine.Rack = updateDto.Rack;
            medicine.Shelf = updateDto.Shelf;
            medicine.Ingredients = updateDto.Ingredients;
            medicine.Cess = updateDto.Cess;
            medicine.Discount = updateDto.Discount;
            medicine.ROL = updateDto.ROL;
            medicine.PackItem = updateDto.PackItem;
            medicine.HSNCode = updateDto.HSNCode;
            medicine.PurchaseRate = updateDto.PurchaseRate;
            medicine.SalesRate = updateDto.SalesRate;
            medicine.LastBill = updateDto.LastBill;
            medicine.LastPurchase = updateDto.LastPurchase;
            medicine.Quantity = updateDto.Quantity;

            _context.Entry(medicine).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
                return NoContent(); // ✅ Success
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MedicineExists(id))
                    return NotFound(new { message = $"Medicine with ID {id} no longer exists." });

                throw; // This will bubble up unhandled if not caught below
            }
            catch (Exception ex)
            {
                Console.WriteLine("❗ Error updating medicine: " + ex.Message);
                if (ex.InnerException != null)
                    Console.WriteLine("🔍 Inner Exception: " + ex.InnerException.Message);

                return BadRequest(new
                {
                    message = "Update failed. " + ex.Message,
                    inner = ex.InnerException?.Message
                });
            }
        }



        [HttpPost]
        public async Task<ActionResult<MedicineDto>> PostMedicine(CreateMedicineDto createDto)
        {
            // Validate Company and Type existence (same as before)...

            // Check duplicate item code (same as before)...

            // Generate sequential Id
            int newId = getId();

            var medicine = new Medicine
            {
                ItemCode = createDto.ItemCode,
                MedicineName = createDto.MedicineName,
                CompanyId = createDto.CompanyId,
                GenericName = createDto.GenericName,
                GST = createDto.GST,
                BillCode = createDto.BillCode,
                ItemShort = createDto.ItemShort,
                Rack = createDto.Rack,
                Shelf = createDto.Shelf,
                TypeId = createDto.TypeId,
                Ingredients = createDto.Ingredients,
                Cess = createDto.Cess,
                Discount = createDto.Discount,
                ROL = createDto.ROL,
                PackItem = createDto.PackItem,
                HSNCode = createDto.HSNCode,
                PurchaseRate = createDto.PurchaseRate,
                SalesRate = createDto.SalesRate,
                LastBill = createDto.LastBill,
                LastPurchase = createDto.LastPurchase,
                Quantity = createDto.Quantity
            };

            _context.Medicines.Add(medicine);
            await _context.SaveChangesAsync();

            var createdMedicine = await _context.Medicines
                .Include(m => m.Company)
                .Include(m => m.Type)
                .FirstOrDefaultAsync(m => m.Id == medicine.Id);

            var result = new MedicineDto
            {
                ItemCode = createdMedicine.ItemCode,
                MedicineName = createdMedicine.MedicineName,
                Company = createdMedicine.Company.CompanyName,
                GenericName = createdMedicine.GenericName,
                GST = createdMedicine.GST,
                BillCode = createdMedicine.BillCode,
                ItemShort = createdMedicine.ItemShort,
                Rack = createdMedicine.Rack,
                Shelf = createdMedicine.Shelf,
                Type = createdMedicine.Type.TypeName,
                Ingredients = createdMedicine.Ingredients,
                Cess = createdMedicine.Cess,
                Discount = createdMedicine.Discount,
                ROL = createdMedicine.ROL,
                PackItem = createdMedicine.PackItem,
                HSNCode = createdMedicine.HSNCode,
                PurchaseRate = createdMedicine.PurchaseRate?.ToString("F2"),
                SalesRate = createdMedicine.SalesRate?.ToString("F2"),
                LastBill = createdMedicine.LastBill?.ToString("yyyy-MM-dd"),
                LastPurchase = createdMedicine.LastPurchase?.ToString("yyyy-MM-dd"),
                Quantity = createdMedicine.Quantity.ToString()
            };

            return CreatedAtAction("GetMedicine", new { id = result.Id }, result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMedicine(int id)
        {
            var medicine = await _context.Medicines.FindAsync(id);
            if (medicine == null)
            {
                return NotFound();
            }

            _context.Medicines.Remove(medicine);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MedicineExists(int id)
        {
            return _context.Medicines.Any(e => e.Id == id);
        }

        private int getId()
        {
            using (var con = new SqlConnection(_connectionString))
            {
                con.Open();
                var sql = "SELECT ISNULL(MAX(Id), 0) + 1 FROM Medicines;";
                using (var cmd = new SqlCommand(sql, con))
                {
                    return Convert.ToInt32(cmd.ExecuteScalar());
                }
            }
        }
    }
}
