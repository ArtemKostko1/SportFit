using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SportFit.Data.Entities
{
    public class BaseModificationTracking : BaseEntity
    {
        public DateTime? CreationDate { get; set; }

        public DateTime? ModificationDate { get; set; }
    }
}
