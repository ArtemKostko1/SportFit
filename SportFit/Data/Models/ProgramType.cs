using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SportFit.Data.Models
{
    public class ProgramType
    {
        public Guid Id { get; set; }
        
        [Required]
        public string Name { get; set; }

        
        public ICollection<Program> Programs { get; set; }
    }
}