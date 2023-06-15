using System;
using System.Collections.Generic;
using System.Text;

namespace Common.Models
{
    public class AuthorizationModel
    {
        public UserModel User { get; set; }
        public string Token { get; set; }
    }
}
