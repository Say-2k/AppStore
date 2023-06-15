using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AppStore.Data.EntityFramework.Models
{
    [Table("app_has_platform")]
    public class AppHasPlatform
    {
        public int AppId { get; set; }
        public int PlatformId { get; set; }
    }
}
