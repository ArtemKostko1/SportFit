using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportFit.Data.Entities;

namespace SportFit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComplexityLevelsController : ControllerBase
    {
        private readonly SportFitContext _context;

        public ComplexityLevelsController(SportFitContext context)
        {
            _context = context;
        }

        // GET: api/ComplexityLevels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ComplexityLevel>>> GetComplexityLevels()
        {
            return await _context.ComplexityLevels.ToListAsync();
        }

        // GET: api/ComplexityLevels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ComplexityLevel>> GetComplexityLevel(Guid id)
        {
            var complexityLevel = await _context.ComplexityLevels.FindAsync(id);

            if (complexityLevel == null)
            {
                return NotFound();
            }

            return complexityLevel;
        }
    }
}
