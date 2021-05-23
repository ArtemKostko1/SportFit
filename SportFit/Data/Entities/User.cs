using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SportFit.Data.Entities
{
    public class User : BaseEntity
    {       
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Login { get; set; }
        
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Password { get; set; }
        
        [Required]
        [Column(TypeName = "nvarchar(30)")]
        public string Nickname { get; set; }

        public string Avatar { get; set; }
        
        [Column(TypeName = "nvarchar(100)")] 
        public string FullName { get; set; }
        
        public DateTime BirthDate { get; set; }
        
        [Column(TypeName = "nvarchar(16)")] 
        public string MobilePhone { get; set; }
        
        [Column(TypeName = "nvarchar(100)")] 
        public string Email { get; set; }
        
        [Column(TypeName = "nvarchar(max)")] 
        public string Instagram { get; set; }
        
        [Column(TypeName = "nvarchar(max)")] 
        public string Vk { get; set; }


        public ICollection<Program> Programs { get; set; }
        public ICollection<Like> Likes { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public ICollection<SelectedProgram> SelectedPrograms { get; set; }
    }
}