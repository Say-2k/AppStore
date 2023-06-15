using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AppStore.Data.EntityFramework.Models
{
    [Table("company_has_developer")]
    public class CompanyHasDeveloper
    {
        public int CompanyId { get; set; }
        public int UserId { get; set; }
    }
}
