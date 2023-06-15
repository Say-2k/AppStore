using System;
using System.Collections.Generic;
using System.Text;

namespace Common.Models
{
    public class GetAppListParamsModel
    {
        /// <summary>
        /// Тип приложения
        /// </summary>
        public List<int> AppTypeIds { get; set; }

        /// <summary>
        /// Дата релиза
        /// </summary>
        public DateTime? ReleaseDate { get; set; }

        /// <summary>
        /// Идентификатор выпустившей компании
        /// </summary>
        public int? CompanyId { get; set; }

        /// <summary>
        /// Рейтинг
        /// </summary>
        public float? Rating { get; set; }

        /// <summary>
        /// Идентификаторы цен
        /// </summary>
        public List<int> PriceIds { get; set; }

        /// <summary>
        /// Идентификаторы жанров
        /// </summary>
        public List<int> GenreIds { get; set; }

        /// <summary>
        /// Идентификаторы платформ
        /// </summary>
        public List<int> PlatformIds { get; set; }

        /// <summary>
        /// Идентификаторы цен
        /// </summary>
        public List<int> LanguageIds { get; set; }

        /// <summary>
        /// Идентификаторы категорий
        /// </summary>
        public List<int> CategoryIds { get; set; }

        /// <summary>
        /// Название
        /// </summary>
        public string Title { get; set; }

    }
}
