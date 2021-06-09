using SportFit.Data.Entities;
using System;

namespace SportFit.Data.Models
{
    public class ProgramModel : BaseModificationTracking
    {
        public Guid UserId { get; set; }
        public string UserNickname { get; set; }
        public string UserAvatar { get; set; }
        public string Name { get; set; }
        public Guid ProgramTypeId { get; set; }
        public string ProgramType { get; set; }
        public Guid ComplexityLevelId { get; set; }
        public string ComplexityLevel { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        public string PreView { get; set; }
    }
}