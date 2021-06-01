using SportFit.Data.Entities;
using System;

namespace SportFit.Data.Models
{
    public class ProgramModel : BaseEntity
    {        
        public string ProgramType { get; set; }
        
        public string UserNickname { get; set; }
        
        public string UserAvatar { get; set; }
        
        public string Name { get; set; }
        
        public string ComplexityLevel { get; set; }
        
        public string Description { get; set; }
        
        public string Content { get; set; }

        public string PreView { get; set; }
    }
}