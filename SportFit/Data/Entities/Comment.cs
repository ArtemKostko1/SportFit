using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SportFit.Data.Entities
{
    public class Comment : BaseEntity
    {        
        [Required]
        public string Content { get; set; }

        [Required]
        public Program Program { get; set; }

        [Required]
        public User User { get; set; }
    }
}