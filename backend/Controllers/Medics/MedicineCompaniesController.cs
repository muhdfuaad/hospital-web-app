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
    public class MedicineCompaniesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MedicineCompaniesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/MedicineCompanies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MedicineCompanyDto>>> GetMedicineCompanies()
        {
            var companies = await _context.MedicineCompanies.ToListAsync();

            var result = companies.Select(c => new MedicineCompanyDto
            {
                CompanyId = c.CompanyId,
                CompanyName = c.CompanyName
            }).ToList();

            return Ok(result);
        }

        // GET: api/MedicineCompanies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MedicineCompanyDto>> GetMedicineCompany(int id)
        {
            var company = await _context.MedicineCompanies.FindAsync(id);

            if (company == null)
            {
                return NotFound();
            }

            var result = new MedicineCompanyDto
            {
                CompanyId = company.CompanyId,
                CompanyName = company.CompanyName
            };

            return Ok(result);
        }

        // PUT: api/MedicineCompanies/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMedicineCompany(int id, UpdateMedicineCompanyDto updateDto)
        {
            var company = await _context.MedicineCompanies.FindAsync(id);
            if (company == null)
            {
                return NotFound();
            }

            if (!string.IsNullOrWhiteSpace(updateDto.CompanyName))
            {
                // Check for duplicate company name
                var duplicateName = await _context.MedicineCompanies
                    .AnyAsync(c => c.CompanyName == updateDto.CompanyName && c.CompanyId != id);
                if (duplicateName)
                {
                    return BadRequest("Company name already exists.");
                }

                company.CompanyName = updateDto.CompanyName;
            }

            _context.Entry(company).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MedicineCompanyExists(id))
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

        // POST: api/MedicineCompanies
        [HttpPost]
        public async Task<ActionResult<MedicineCompanyDto>> PostMedicineCompany(CreateMedicineCompanyDto createDto)
        {
            // Check for duplicate company name
            var duplicateName = await _context.MedicineCompanies
                .AnyAsync(c => c.CompanyName == createDto.CompanyName);
            if (duplicateName)
            {
                return BadRequest("Company name already exists.");
            }

            var company = new MedicineCompany
            {
                CompanyName = createDto.CompanyName
            };

            _context.MedicineCompanies.Add(company);
            await _context.SaveChangesAsync();

            var result = new MedicineCompanyDto
            {
                CompanyId = company.CompanyId,
                CompanyName = company.CompanyName
            };

            return Ok(result);
        }

        // DELETE: api/MedicineCompanies/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMedicineCompany(int id)
        {
            var company = await _context.MedicineCompanies.FindAsync(id);
            if (company == null)
            {
                return NotFound();
            }

            // Check if company is being used by any medicines
            var isUsed = await _context.Medicines.AnyAsync(m => m.CompanyId == id);
            if (isUsed)
            {
                return BadRequest("Cannot delete company as it is being used by medicines.");
            }

            _context.MedicineCompanies.Remove(company);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // GET: api/MedicineCompanies/search?term=company
        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<MedicineCompanyDto>>> SearchMedicineCompanies(string term)
        {
            var query = _context.MedicineCompanies.AsQueryable();

            if (!string.IsNullOrWhiteSpace(term))
            {
                query = query.Where(c => c.CompanyName.Contains(term));
            }

            var companies = await query.ToListAsync();

            var result = companies.Select(c => new MedicineCompanyDto
            {
                CompanyId = c.CompanyId,
                CompanyName = c.CompanyName
            }).ToList();

            return Ok(result);
        }

        private bool MedicineCompanyExists(int id)
        {
            return _context.MedicineCompanies.Any(e => e.CompanyId == id);
        }
    }

    // DTOs for MedicineCompany
    public class MedicineCompanyDto
    {
        public int CompanyId { get; set; }
        public string CompanyName { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }

    public class CreateMedicineCompanyDto
    {
        public string CompanyName { get; set; }
    }

    public class UpdateMedicineCompanyDto
    {
        public string CompanyName { get; set; }
    }
}