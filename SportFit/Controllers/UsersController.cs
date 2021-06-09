using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportFit.Data.Entities;
using SportFit.Data.Models;
using SportFit.Helpers;
using SportFit.Services;

namespace SportFit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly SportFitContext _context;
        public UsersController(IUserService userService, SportFitContext context)
        {
            _userService = userService;
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();
            return Ok(users);
        }

        // GET: api/Users/id
        [HttpGet("{id}")]
        public async Task<ActionResult<UserModel>> GetById(Guid id)
        {
            var user = await _context.Users
                .Where(u => u.Id == id)
                .Select(u => new UserModel()
                {
                    Id = u.Id,
                    Login = u.Login,
                    Password = u.Password,
                    Nickname = u.Nickname,
                    Avatar = u.Avatar,
                    FullName = u.FullName,
                    BirthDate = u.BirthDate,
                    MobilePhone = u.MobilePhone,
                    Email = u.Email,
                    Instagram = u.Instagram,
                    Vk = u.Vk,
                    CreationDate = u.CreationDate,
                    ModificationDate = u.ModificationDate
                }).FirstAsync();
            
            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpPost("authenticate")]
        public IActionResult Authenticate(AuthenticateRequest model)
        {
            var response = _userService.Authenticate(model);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(response);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserModel userModel)
        {
            userModel.CreationDate = DateTime.Now;
            var response = await _userService.Register(userModel);

            if (response == null)
            {
                return BadRequest(new {message = "Didn't register!"});
            }

            return Ok(response);
        }
        
        // PUT: api/Users/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(Guid id, User user)
        {
            user.Id = id;
            user.ModificationDate = DateTime.Now;

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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

        /*// DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }*/

        private bool UserExists(Guid id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}
