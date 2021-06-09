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
    public class ProgramTypesController : ControllerBase
    {
        private readonly SportFitContext _context;

        public ProgramTypesController(SportFitContext context)
        {
            _context = context;
        }

        // GET: api/ProgramTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProgramType>>> GetProgramTypes()
        {
            return await _context.ProgramTypes.ToListAsync();
        }

        // GET: api/ProgramTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProgramType>> GetProgramType(Guid id)
        {
            var programType = await _context.ProgramTypes.FindAsync(id);

            if (programType == null)
            {
                return NotFound();
            }

            return Ok(programType);
        }
    }
}
