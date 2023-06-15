using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AppStore.Data.EntityFramework.Models
{
    [Table("pricing")]
    public class Pricing
    {
        public int Id { get; set; }

        public int FixedPrice { get; set; }
    }
}
