using SportFit.Data.Entities;
using System;

namespace SportFit.Data.Models
{
    public class ProgramModel : BaseEntity
    {        
        public string PType { get; set; }
        
        public string PUser { get; set; }
        
        public string UAvatar { get; set; }
        
        public string Name { get; set; }
        
        public string CLevel { get; set; }
        
        public string Description { get; set; }
        
        public string Content { get; set; }

        public string PreView { get; set; }
    }
}