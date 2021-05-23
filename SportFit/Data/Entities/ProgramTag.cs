using System;
using System.ComponentModel.DataAnnotations;

namespace SportFit.Data.Entities
{
    public class ProgramTag : BaseEntity
    {
        [Required]
        public Guid ProgramId { get; set; }
        
        [Required]
        public Guid TagId { get; set; }
        
        
        public Program Program { get; set; }
        public Tag Tag { get; set; }
    }
}