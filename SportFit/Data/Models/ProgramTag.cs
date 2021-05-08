using System;
using System.ComponentModel.DataAnnotations;

namespace SportFit.Data.Models
{
    public class ProgramTag
    {
        public Guid Id { get; set; }

        [Required]
        public Guid ProgramId { get; set; }
        
        [Required]
        public Guid TagId { get; set; }
        
        
        public Program Program { get; set; }
        public Tag Tag { get; set; }
    }
}