using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SportFit.Data.Entities
{
    public class Comment : BaseEntity
    {
        public Guid ProgramId { get; set; }
        
        public Guid UserId { get; set; }
        
        public string Content { get; set; }
        
        
        public User User { get; set; }
        public Program Program { get; set; }
    }

    public class Base
    {
        public int Id { get; set; }
    }

    public class ModificationTrackingBase : Base
    {
        public DateTime CreationTime { get; set; }
    }
}