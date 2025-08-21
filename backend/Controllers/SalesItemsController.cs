using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HmsApi.Data;
using HmsApi.Models.Sales;

namespace HmsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesItemsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SalesItemsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/SalesItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SalesItem>>> GetSalesItems()
        {
            return await _context.SalesItems.ToListAsync();
        }

        // GET: api/SalesItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SalesItem>> GetSalesItem(int id)
        {
            var salesItem = await _context.SalesItems.FindAsync(id);

            if (salesItem == null)
            {
                return NotFound();
            }

            return salesItem;
        }

        // PUT: api/SalesItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSalesItem(int id, SalesItem salesItem)
        {
            if (id != salesItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(salesItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SalesItemExists(id))
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

        // POST: api/SalesItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SalesItem>> PostSalesItem(SalesItem salesItem)
        {
            _context.SalesItems.Add(salesItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSalesItem", new { id = salesItem.Id }, salesItem);
        }

        // DELETE: api/SalesItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSalesItem(int id)
        {
            var salesItem = await _context.SalesItems.FindAsync(id);
            if (salesItem == null)
            {
                return NotFound();
            }

            _context.SalesItems.Remove(salesItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SalesItemExists(int id)
        {
            return _context.SalesItems.Any(e => e.Id == id);
        }
    }
}
