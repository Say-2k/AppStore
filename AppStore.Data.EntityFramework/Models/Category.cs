using System;
using System.Collections.Generic;
using System.Text;

namespace AppStore.Data.EntityFramework.Models
{
    public class Category
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public byte[] CategoryPicture { get; set; }
    }
}
