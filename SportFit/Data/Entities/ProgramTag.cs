using System;
using System.ComponentModel.DataAnnotations;

namespace SportFit.Data.Entities
{
    public class ProgramTag : BaseEntity
    {
        public Guid ProgramId { get; set; }
        
        public Guid TagId { get; set; }
        
        
        public Program Program { get; set; }
        public Tag Tag { get; set; }
    }
}