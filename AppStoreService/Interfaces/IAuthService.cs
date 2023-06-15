using Common.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace AppStoreService.Interfaces
{
    public interface IAuthService
    {
        AuthorizationModel Login(LoginModel loginModel);

        bool Registration(RegistrationModel newUser);
    }
}
