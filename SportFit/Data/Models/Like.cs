using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SportFit.Data.Models
{
    public class Like
    {
        public Guid Id { get; set; }

        [Required]
        public Guid ProgramId { get; set; }
        
        [Required]
        public Guid UserId { get; set; }
        
        
        public Program Program { get; set; }
        public User User { get; set; }
    }
}