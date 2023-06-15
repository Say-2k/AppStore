using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AppStore.Data.EntityFramework.Models
{
    [Table("picture")]
    public class Picture
    {
        public int Id { get; set; }

        public int AppId { get; set; }

        public int PictureOrder { get; set; }

        public byte[] PictureFile { get; set; }
    }
}
