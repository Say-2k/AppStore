using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace Common.Models
{
    public class AppModel
    {
        public int Id { get; set; }

        public int AppType { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Status { get; set; }

        public DateTime ReleaseDate { get; set; }

        public CompanyModel Company { get; set; }

        public float Rating { get; set; } //среднее значение оценок пользователей из комментов
        public int Price { get; set; }

        public byte[] Icon { get; set; }

        //public int Pcture { get; set; } //id или имя

        public IEnumerable<PictureModel> Pictures { get; set; }

        public byte[] File { get; set; }

        public IEnumerable<string> GenresName { get; set; }

        public IEnumerable<string> PlatformsName { get; set; }

        public IEnumerable<string> LanguagesName { get; set; }

        //public IEnumerable<string> CategoriesName { get; set; }

    }

}
