using System;

namespace SportFit.Data.ModelTypes
{
    public class TProgram
    {
        public Guid Id { get; set; }
        
        public string PType { get; set; }
        
        public string PUser { get; set; }
        
        public string UAvatar { get; set; }
        
        public string Name { get; set; }
        
        public string CLevel { get; set; }
        
        public string Description { get; set; }
        
        public string ProgramContent { get; set; }
        
        public DateTime CreationDate { get; set; }
        
        public DateTime ModificationDate { get; set; }
    }
}