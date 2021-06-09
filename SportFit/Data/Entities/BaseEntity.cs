using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SportFit.Data.Entities
{
    public class BaseEntity
    {
        public Guid Id { get; set; }
    }
}
