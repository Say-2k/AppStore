using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AppStore.Data.EntityFramework.Models
{
    [Table("role")]
    public class Role
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}

