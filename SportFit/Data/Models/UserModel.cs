﻿using SportFit.Data.Entities;
using System;

namespace SportFit.Data.Models
{
    public class UserModel : BaseModificationTracking
    {
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
    }
}