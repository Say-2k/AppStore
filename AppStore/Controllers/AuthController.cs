using AppStoreService.Interfaces;
using Common.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;

namespace AppStore.Controllers
{
    /// <summary>
    /// Контроллер для авторизации
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        readonly IAuthService authService;

        /// <summary>
        /// Конструктор DI
        /// </summary>
        /// <param name="authService"></param>
        public AuthController(IAuthService authService)
        {
            this.authService = authService;
        }

        /// <summary>
        /// Авторизация пользователя
        /// </summary>
        /// <param name="loginModel">Модель авторизации</param>
        /// <returns>JWT Token</returns>
        [HttpPost("login")]
        public IActionResult Login(LoginModel loginModel)
        {
            try
            {
                return Ok(authService.Login(loginModel));
            }
            catch (Exception ex)
            {
                return Problem(detail: ex.Message);
            }
        }

        /// <summary>
        /// Регистрация нового пользователя
        /// </summary>
        /// <param name="newUser">Модель пользователя</param>
        /// <returns>Создан/не создан</returns>
        [HttpPost("register")]
        public IActionResult Register(RegistrationModel newUser)
        {
            try
            {
                return Ok(new { success = authService.Registration(newUser) });
            }
            catch (Exception ex)
            {
                return Problem(detail: ex.Message);
            }
        }
    }
}
