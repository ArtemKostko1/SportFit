using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SportFit.Data.Models
{
    public class UserProfile
    {
        [Key]
        [ForeignKey("User")]
        public Guid Id { get; set; }
        
        [Column(TypeName = "nvarchar(100)")] 
        public string FullName { get; set; }
        
        public DateTime BirthDate { get; set; }
        
        [Column(TypeName = "nvarchar(16)")] 
        public string MobilePhone { get; set; }
        
        [Column(TypeName = "nvarchar(100)")] 
        public string Email { get; set; }
        
        [Column(TypeName = "nvarchar(max)")] 
        public string Instagram { get; set; }
        
        [Column(TypeName = "nvarchar(max)")] 
        public string VK { get; set; }
        
        [Column(TypeName = "nvarchar(max)")] 
        public string Facebook { get; set; }
        
        [Column(TypeName = "nvarchar(max)")] 
        public string Twitter { get; set; }
        
        [Required] 
        public DateTime CreationDate { get; set; }
        
        public DateTime ModificationDate { get; set; }
    }
}