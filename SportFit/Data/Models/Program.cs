using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SportFit.Data.Models
{
    public class Program
    {
        public Guid Id { get; set; }
        
        [Required]
        public Guid ProgramTypeId { get; set; }
        
        [Required]
        public Guid UserId { get; set; }
        
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Name { get; set; }
        
        [Required]
        public Guid ComplexityLevelId { get; set; }
        
        [Column(TypeName = "nvarchar(300)")]
        public string Description { get; set; }
        
        [Column(TypeName = "nvarchar(max)")]
        public string ProgramContent { get; set; }
        
        [Required]
        public DateTime CreationDate { get; set; }
        
        public DateTime ModificationDate { get; set; }
        

        public ProgramType ProgramType { get; set; }
        public ComplexityLevel ComplexityLevel { get; set; }


        public ICollection<Like> Likes { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public ICollection<Tag> Tags { get; set; }
        public ICollection<SelectedProgram> SelectedProgram { get; set; }
    }
}