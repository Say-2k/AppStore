using System;
using System.Collections.Generic;
using System.Text;

 namespace Common.Models
{
    public class CardModel
    {
        public int Id { get; set; }
        
        public string Title { get; set; }

        public string Description { get; set; }

        public string SubDescription { get; set; }

        public byte[] Picture { get; set; }

        public int Price { get; set; }

        public IEnumerable<PlatformModel> Platforms { get; set; }

        public IEnumerable<GenreModel> Genres { get; set; }
    }
}
