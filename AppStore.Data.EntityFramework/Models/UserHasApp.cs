using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AppStore.Data.EntityFramework.Models
{
    [Table("user_has_app")]
    public class UserHasApp
    {
        public int UserId { get; set; }
        public int AppId { get; set; }
    }
}
