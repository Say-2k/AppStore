using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AppStore.Data.EntityFramework.Models
{
    [Table("app_has_genre")]
    public class AppHasGenre
    {
        public int AppId { get; set; }

        public int GenreId { get; set; }
    }
}
