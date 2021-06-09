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
    public class ProgramsController : ControllerBase
    {
        private readonly SportFitContext _context;

        public ProgramsController(SportFitContext context)
        {
            _context = context;
        }

        // GET: api/programs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProgramModel>>> GetPrograms()
        {
            return await _context.Programs
                .Include(pt => pt.ProgramType)
                .Include(c => c.ComplexityLevel)
                .Include(u => u.User)
                .Select(p => new ProgramModel()
                {
                    Id = p.Id,
                    UserId = p.UserId,
                    UserNickname = p.User.Nickname,
                    UserAvatar = p.User.Avatar,
                    Name = p.Name,
                    ProgramTypeId = p.ProgramTypeId,
                    ProgramType = p.ProgramType.Name,
                    ComplexityLevelId = p.ComplexityLevelId,
                    ComplexityLevel = p.ComplexityLevel.Name,
                    Description = p.Description,
                    Content = p.Content,
                    PreView = p.PreView,
                    CreationDate = p.CreationDate,
                    ModificationDate = p.ModificationDate
                })
                .ToListAsync();
        }
        
        // GET: api/userPrograms
        [HttpGet("{id}/myPrograms")]
        public async Task<ActionResult<IEnumerable<ProgramModel>>> GetUserPrograms(Guid id)
        {
            return await _context.Programs
                .Include(pt => pt.ProgramType)
                .Include(c => c.ComplexityLevel)
                .Include(u => u.User)
                .Where(p => p.UserId == id)
                .Select(p => new ProgramModel()
                {
                    Id = p.Id,
                    UserId = p.UserId,
                    UserNickname = p.User.Nickname,
                    UserAvatar = p.User.Avatar,
                    Name = p.Name,
                    ProgramTypeId = p.ProgramTypeId,
                    ProgramType = p.ProgramType.Name,
                    ComplexityLevelId = p.ComplexityLevelId,
                    ComplexityLevel = p.ComplexityLevel.Name,
                    Description = p.Description,
                    Content = p.Content,
                    PreView = p.PreView,
                    CreationDate = p.CreationDate,
                    ModificationDate = p.ModificationDate
                }).ToListAsync();
        }

        // GET: api/Programs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProgramModel>> GetProgram(Guid id)
        {
            var program = await _context.Programs
                .Include(pt => pt.ProgramType)
                .Include(c => c.ComplexityLevel)
                .Include(u => u.User)
                .Where(p => p.Id == id)
                .Select(p => new ProgramModel()
                {
                    Id = p.Id,
                    UserId = p.UserId,
                    UserNickname = p.User.Nickname,
                    UserAvatar = p.User.Avatar,
                    Name = p.Name,
                    ProgramTypeId = p.ProgramTypeId,
                    ProgramType = p.ProgramType.Name,
                    ComplexityLevelId = p.ComplexityLevelId,
                    ComplexityLevel = p.ComplexityLevel.Name,
                    Description = p.Description,
                    Content = p.Content,
                    PreView = p.PreView,
                    CreationDate = p.CreationDate,
                    ModificationDate = p.ModificationDate
                }).FirstAsync();
            
            if (program == null)
            {
                return NotFound();
            }

            return Ok(program);
        }

        // PUT: api/Programs/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProgram(Guid id, SportFit.Data.Entities.Program program)
        {
            program.Id = id;
            program.ModificationDate = DateTime.Now;

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
        public async Task<ActionResult<SportFit.Data.Entities.Program>> PostProgram(SportFit.Data.Entities.Program program)
        {
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
            var likes = await _context.Likes
                .Where(l => l.ProgramId == id).ToListAsync();
            
            var comments = await _context.Comments
                .Where(c => c.ProgramId == id).ToListAsync();
            
            var selectedPrograms = await _context.SelectedPrograms
                .Where(s => s.ProgramId == id).ToListAsync();
            
            _context.Likes.RemoveRange(likes);
            _context.Comments.RemoveRange(comments);
            _context.SelectedPrograms.RemoveRange(selectedPrograms);
            
            
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
