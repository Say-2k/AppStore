using System;
using System.Collections.Generic;
using System.Text;

namespace Common.Models
{
    public class UserModel
    {
        public int Id { get; set; }

        public string Username { get; set; }

        public string Email { get; set; }

        public byte[] Icon { get; set; }

        //public string Password { get; set; }

        //public int RoleId { get; set; }

        //public IEnumerable<AppModel> Apps{ get; set; }

    }
}
