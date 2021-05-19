using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportFit.Data.Models;
using SportFit.Data.ModelTypes;

namespace SportFit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProgramsController : ControllerBase
    {
        private readonly SportFitContext _context;

        public ProgramsController(SportFitContext context)
        {
            _context = context;
        }

        // GET: api/Programs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TProgram>>> GetPrograms()
        {
            return await (from program in _context.Programs
                join programType in _context.ProgramTypes on program.ProgramTypeId equals programType.Id
                join complexityLevel in _context.ComplexityLevels on program.ComplexityLevelId equals complexityLevel.Id
                join user in _context.Users on program.UserId equals user.Id
                select new TProgram()
                {
                    Id = program.Id,
                    PUser = user.Nickname,
                    UAvatar = user.Avatar,
                    Name = program.Name,
                    PType = programType.Name,
                    CLevel = complexityLevel.Name,
                    Description = program.Description,
                    ProgramContent = program.ProgramContent,
                    CreationDate = program.CreationDate,
                    ModificationDate = program.ModificationDate
                }).ToListAsync();
        }

        // GET: api/Programs/5
        [HttpGet("{id}")]
        public TProgram GetProgram(Guid id)
        {
            return (from program in _context.Programs
                join programType in _context.ProgramTypes on program.ProgramTypeId equals programType.Id
                join complexityLevel in _context.ComplexityLevels on program.ComplexityLevelId equals complexityLevel.Id
                join user in _context.Users on program.UserId equals user.Id
                where program.Id == id
                select new TProgram()
                {
                    Id = program.Id,
                    PUser = user.Nickname,
                    UAvatar = user.Avatar,
                    Name = program.Name,
                    PType = programType.Name,
                    CLevel = complexityLevel.Name,
                    Description = program.Description,
                    ProgramContent = program.ProgramContent,
                    CreationDate = program.CreationDate,
                    ModificationDate = program.ModificationDate
                }).FirstOrDefault();
        }

        // PUT: api/Programs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProgram(Guid id, SportFit.Data.Models.Program program)
        {
            program.Id = id;

            _context.Entry(program).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProgramExists(id))
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

        // POST: api/Programs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SportFit.Data.Models.Program>> PostProgram(SportFit.Data.Models.Program program)
        {
            program.Id = Guid.NewGuid();
            program.CreationDate = DateTime.Now;
            
            _context.Programs.Add(program);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ProgramExists(program.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetProgram", new { id = program.Id }, program);
        }

        // DELETE: api/Programs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProgram(Guid id)
        {
            var program = await _context.Programs.FindAsync(id);
            if (program == null)
            {
                return NotFound();
            }

            _context.Programs.Remove(program);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProgramExists(Guid id)
        {
            return _context.Programs.Any(e => e.Id == id);
        }
    }
}
