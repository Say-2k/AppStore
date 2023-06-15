using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AppStore.Data.EntityFramework.Models
{
    [Table("card")]
    public class Card
    {
        public int Id { get; set; }

        public int AppId { get; set; }

        public int CardTag { get; set; }

        public int CardOrder { get; set; }

        public string Description { get; set; }

        public string SubDescription { get; set; }

        public byte[] Picture { get; set; }

    }
}
