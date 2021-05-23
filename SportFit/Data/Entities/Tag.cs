using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SportFit.Data.Entities
{
    public class Tag : BaseEntity
    {        
        [Required]
        public string Content { get; set; }
        

        public ICollection<ProgramTag> ProgramTags { get; set; }
    }
}