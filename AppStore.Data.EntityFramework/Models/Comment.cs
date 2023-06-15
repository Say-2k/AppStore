using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AppStore.Data.EntityFramework.Models
{
    [Table("comment")]
    public class Comment
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public int AppId { get; set; }

        public string CommentText { get; set; } //так ли text

        public DateTime Date { get; set; } //так ли дата

        public int Rating { get; set; }
    }
}
