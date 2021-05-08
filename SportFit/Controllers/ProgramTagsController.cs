using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportFit.Data.Models;

namespace SportFit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProgramTagsController : ControllerBase
    {
        private readonly SportFitContext _context;

        public ProgramTagsController(SportFitContext context)
        {
            _context = context;
        }

        // GET: api/ProgramTags
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProgramTag>>> GetProgramTags()
        {
            return await _context.ProgramTags.ToListAsync();
        }

        // GET: api/ProgramTags/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProgramTag>> GetProgramTag(Guid id)
        {
            var programTag = await _context.ProgramTags.FindAsync(id);

            if (programTag == null)
            {
                return NotFound();
            }

            return programTag;
        }

        // PUT: api/ProgramTags/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProgramTag(Guid id, ProgramTag programTag)
        {
            programTag.Id = id;

            _context.Entry(programTag).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProgramTagExists(id))
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

        // POST: api/ProgramTags
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProgramTag>> PostProgramTag(ProgramTag programTag)
        {
            _context.ProgramTags.Add(programTag);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ProgramTagExists(programTag.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetProgramTag", new { id = programTag.Id }, programTag);
        }

        // DELETE: api/ProgramTags/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProgramTag(Guid id)
        {
            var programTag = await _context.ProgramTags.FindAsync(id);
            if (programTag == null)
            {
                return NotFound();
            }

            _context.ProgramTags.Remove(programTag);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProgramTagExists(Guid id)
        {
            return _context.ProgramTags.Any(e => e.Id == id);
        }
    }
}
