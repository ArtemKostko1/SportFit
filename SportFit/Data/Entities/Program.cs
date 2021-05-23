using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SportFit.Data.Entities
{
    public class Program : BaseEntity
    {        
        public Guid UserId { get; set; }

        public Guid ProgramTypeId { get; set; }
        
        public Guid ComplexityLevelId { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Name { get; set; }

        [Column(TypeName = "nvarchar(300)")]
        public string Description { get; set; }
        
        [Column(TypeName = "nvarchar(max)")]
        public string Content { get; set; }

        public string PreView { get; set; }


        public User User { get; set; }
        public ProgramType ProgramType { get; set; }
        public ComplexityLevel ComplexityLevel { get; set; }


        public ICollection<Like> Likes { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public ICollection<Tag> Tags { get; set; }
        public ICollection<SelectedProgram> SelectedPrograms { get; set; }
    }
}