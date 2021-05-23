using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SportFit.Data.Entities
{
    public class SelectedProgram : BaseEntity
    {
        [Required]
        public Program Program { get; set; }

        [Required]
        public User User { get; set; }
    }
}