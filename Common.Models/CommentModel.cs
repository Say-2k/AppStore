using System;
using System.Collections.Generic;
using System.Text;

namespace Common.Models
{
    public class CommentModel
    {
        public int Id { get; set; }

        public int UserId { get; set; }
        public string UserName { get; set; }
        public byte[] Icon { get; set; }

        public int AppId { get; set; }

        public string CommentText { get; set; }

        public DateTime Date { get; set; }

        public int Rating { get; set; }
    }
}
