using SportFit.Data.Entities;
using System;

namespace SportFit.Data.Models
{
    public class CommentModel : BaseEntity
    {
        public Guid Program { get; set; }
        public Guid User { get; set; }
        public string Nickname { get; set; }
        public string Avatar { get; set; }
        public string Content { get; set; }
    }
}