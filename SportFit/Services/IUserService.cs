using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using SportFit.Data.Entities;
using SportFit.Data.Models;

namespace SportFit.Services
{
    public interface IUserService
    {
        AuthenticateResponse Authenticate(AuthenticateRequest model);
        Task<AuthenticateResponse> Register(UserModel userModel);
        IEnumerable<User> GetAll();
        User GetById(Guid id);
    }
}