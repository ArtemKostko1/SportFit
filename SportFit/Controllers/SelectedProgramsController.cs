﻿using System;
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
        public async Task<ActionResult<IEnumerable<SelectedProgramModel>>> GetSelectedPrograms()
        {
            return await _context.SelectedPrograms
                .Include(p => p.Program)
                .ThenInclude(u => u.User)
                .Include(p => p.Program)
                .ThenInclude(pt => pt.ProgramType)
                .Include(p => p.Program)
                .ThenInclude(c => c.ComplexityLevel)
                .Select(s => new SelectedProgramModel()
                {
                    Id = s.Program.Id,
                    UserId = s.Program.User.Id,
                    UserNickname = s.Program.User.Nickname,
                    UserAvatar = s.Program.User.Avatar,
                    Name = s.Program.Name,
                    ProgramTypeId = s.Program.ProgramTypeId,
                    ProgramType = s.Program.ProgramType.Name,
                    ComplexityLevelId = s.Program.ComplexityLevelId,
                    ComplexityLevel = s.Program.ComplexityLevel.Name,
                    Description = s.Program.Description,
                    Content = s.Program.Content,
                    PreView = s.Program.PreView,
                    CreationDate = s.Program.CreationDate,
                    ModificationDate = s.Program.ModificationDate,
                    Likes = s.Program.Likes,
                    Comments = s.Program.Comments,
                    SelectedPrograms = s.Program.SelectedPrograms
                })
                .ToListAsync();
        }

        // GET: api/SelectedPrograms/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<SelectedProgramModel>>> GetSelectedProgram(Guid id)
        {
            return await _context.SelectedPrograms
                .Include(p => p.Program)
                .ThenInclude(u => u.User)
                .Include(p => p.Program)
                .ThenInclude(pt => pt.ProgramType)
                .Include(p => p.Program)
                .ThenInclude(c => c.ComplexityLevel)
                .Where(s => s.UserId == id)
                .Select(s => new SelectedProgramModel()
                {
                    Id = s.Id,
                    ProgramId = s.ProgramId,
                    UserId = s.Program.User.Id,
                    UserNickname = s.Program.User.Nickname,
                    UserAvatar = s.Program.User.Avatar,
                    Name = s.Program.Name,
                    ProgramTypeId = s.Program.ProgramTypeId,
                    ProgramType = s.Program.ProgramType.Name,
                    ComplexityLevelId = s.Program.ComplexityLevelId,
                    ComplexityLevel = s.Program.ComplexityLevel.Name,
                    Description = s.Program.Description,
                    Content = s.Program.Content,
                    PreView = s.Program.PreView,
                    CreationDate = s.Program.CreationDate,
                    ModificationDate = s.Program.ModificationDate,
                    Likes = s.Program.Likes,
                    Comments = s.Program.Comments,
                    SelectedPrograms = s.Program.SelectedPrograms
                })
                .ToListAsync();
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
