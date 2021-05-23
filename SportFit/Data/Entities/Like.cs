using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SportFit.Data.Entities
{
    public class Like : BaseEntity
    {
        [Required]
        public Program Program { get; set; }

        [Required]
        public User User { get; set; }
    }
}