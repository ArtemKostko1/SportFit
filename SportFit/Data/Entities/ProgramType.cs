using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SportFit.Data.Entities
{
    public class ProgramType : BaseEntity
    {        
        [Required]
        public string Name { get; set; }

        
        public ICollection<Program> Programs { get; set; }
    }
}