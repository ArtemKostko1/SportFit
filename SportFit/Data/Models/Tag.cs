using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SportFit.Data.Models
{
    public class Tag
    {
        public Guid Id { get; set; }
        
        [Required]
        public string Content { get; set; }
        

        public ICollection<ProgramTag> ProgramTags { get; set; }
    }
}