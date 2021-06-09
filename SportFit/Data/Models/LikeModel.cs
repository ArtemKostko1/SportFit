using SportFit.Data.Entities;
using System;

namespace SportFit.Data.Models
{
    public class LikeModel : BaseEntity
    {
        public Guid ProgramId { get; set; }
        public Guid UserId { get; set; }
    }
}