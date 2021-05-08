using System;
using System.ComponentModel.DataAnnotations;

namespace SportFit.Data.Models
{
    public class Comment
    {
        public Guid Id { get; set; }
        
        [Required]
        public Guid UserId { get; set; }
        
        [Required]
        public Guid ProgramId { get; set; }
        
        [Required]
        public string Content { get; set; }
        
        [Required]
        public DateTime CreationDate { get; set; }
        
        
        public Program Program { get; set; }
        
        public User User { get; set; }
    }
}