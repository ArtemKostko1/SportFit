using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SportFit.Data.Entities
{
    public class SelectedProgram : BaseEntity
    {
        public Guid ProgramId { get; set; }
        public Guid UserId { get; set; }

        public User User { get; set; }
        public Program Program { get; set; }
    }
}