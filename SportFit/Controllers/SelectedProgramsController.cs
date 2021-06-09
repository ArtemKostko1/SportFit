using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportFit.Data.Entities;
using SportFit.Data.Models;

namespace SportFit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SelectedProgramsController : ControllerBase
    {
        private readonly SportFitContext _context;

        public SelectedProgramsController(SportFitContext context)
        {
            _context = context;
        }

        // GET: api/SelectedPrograms
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SelectedProgram>>> GetSelectedPrograms()
        {
            return await _context.SelectedPrograms.ToListAsync();
        }

        // GET: api/SelectedPrograms/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<SelectedProgramModel>>> GetSelectedProgram(Guid id)
        {
            return await (from selectedProgram in _context.SelectedPrograms
                join program in _context.ProgramTypes on selectedProgram.ProgramId equals program.Id
                join programType in _context.ProgramTypes on selectedProgram.Program.ProgramTypeId equals programType.Id
                join complexityLevel in _context.ComplexityLevels on selectedProgram.Program.ComplexityLevelId equals complexityLevel.Id
                join user in _context.Users on selectedProgram.Program.UserId equals user.Id
                where selectedProgram.UserId == id
                select new SelectedProgramModel()
                {
                    Id = selectedProgram.Program.Id,
                    UserId = selectedProgram.User.Id,
                    UserNickname = selectedProgram.User.Nickname,
                    UserAvatar = selectedProgram.User.Avatar,
                    Name = selectedProgram.Program.Name,
                    ProgramTypeId = selectedProgram.Program.ProgramTypeId,
                    ProgramType = programType.Name,
                    ComplexityLevelId = selectedProgram.Program.ComplexityLevelId,
                    ComplexityLevel = complexityLevel.Name,
                    Description = selectedProgram.Program.Description,
                    Content = selectedProgram.Program.Content,
                    PreView = selectedProgram.Program.PreView,
                    CreationDate = selectedProgram.Program.CreationDate,
                    ModificationDate = selectedProgram.Program.ModificationDate
                }).ToListAsync();
        }

        // PUT: api/SelectedPrograms/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSelectedProgram(Guid id, SelectedProgram selectedProgram)
        {
            selectedProgram.Id = id;

            _context.Entry(selectedProgram).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SelectedProgramExists(id))
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

        // POST: api/SelectedPrograms
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SelectedProgram>> PostSelectedProgram(SelectedProgram selectedProgram)
        {
            _context.SelectedPrograms.Add(selectedProgram);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (SelectedProgramExists(selectedProgram.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetSelectedProgram", new { id = selectedProgram.Id }, selectedProgram);
        }

        // DELETE: api/SelectedPrograms/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSelectedProgram(Guid id)
        {
            var selectedProgram = await _context.SelectedPrograms.FindAsync(id);
            if (selectedProgram == null)
            {
                return NotFound();
            }

            _context.SelectedPrograms.Remove(selectedProgram);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SelectedProgramExists(Guid id)
        {
            return _context.SelectedPrograms.Any(e => e.Id == id);
        }
    }
}
