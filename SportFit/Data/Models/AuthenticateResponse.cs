using System;
using SportFit.Data.Entities;

namespace SportFit.Data.Models
{
    public class AuthenticateResponse
    {
        public Guid Id { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string Nickname { get; set; }
        public string Avatar { get; set; }
        public string FullName { get; set; }
        public DateTime? BirthDate { get; set; }
        public string MobilePhone { get; set; }
        public string Email { get; set; }
        public string Instagram { get; set; }
        public string Vk { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? ModificationDate { get; set; }

        public string Token { get; set; }


        public AuthenticateResponse(User user, string token)
        {
            Id = user.Id;
            Login = user.Login;
            Password = user.Password;
            Nickname = user.Nickname;
            Avatar = user.Avatar;
            FullName = user.FullName;
            BirthDate = user.BirthDate;
            MobilePhone = user.MobilePhone;
            Email = user.Email;
            Instagram = user.Instagram;
            Vk = user.Vk;
            CreationDate = user.CreationDate;
            ModificationDate = user.ModificationDate;

            Token = token;
        }
    }
}