using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SportFit.Data.Models
{
    public class User
    {
        public Guid Id { get; set; }
        
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
        
        [Required]
        public DateTime CreationDate { get; set; }
        public DateTime ModificationDate { get; set; }
        

        public UserProfile UserProfile { get; set; }
        
        
        public ICollection<Program> Programs { get; set; }
        public ICollection<Like> Likes { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public ICollection<SelectedProgram> SelectedPrograms { get; set; }
    }
}