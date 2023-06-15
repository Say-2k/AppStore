using System;
using System.Collections.Generic;
using System.Text;

namespace Common.Models
{
    public class PictureModel
    {
        public int Id { get; set; }

        public int AppId { get; set; }

        public int PictureOrder { get; set; }

        public byte[] PictureFile { get; set; }
    }
}
