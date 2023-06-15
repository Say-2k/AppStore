using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AppStore.Data.EntityFramework.Models
{
    [Table("app")]
    public class App
    {
        public int Id { get; set; }

        public int AppType { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Status { get; set; }

        public DateTime ReleaseDate { get; set; }

        public int CompanyId { get; set; }

        public float Rating { get; set; } //среднее значение оценок пользователей из комментов

        //public int MainPictureId { get; set; }

        public int PriceId { get; set; }

        public byte[] Icon { get; set; }

        public byte[] Picture { get; set; }


        public byte[] File { get; set; }
    }
}
