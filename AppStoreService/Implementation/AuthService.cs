using AppStore.Data.EntityFramework;
using AppStore.Data.EntityFramework.Models;
using AppStoreService.Interfaces;
using Common.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace AppStoreService.Implementation
{
    public class AuthService : IAuthService
    {
        readonly IConfiguration _configuration;
        readonly ApplicationContext applicationContext;
        readonly string PREFIX = "Bearer ";

        public AuthService(IConfiguration configuration, ApplicationContext applicationContext)
        {
            _configuration = configuration;
            this.applicationContext = applicationContext;
        }

        public AuthorizationModel Login(LoginModel loginModel)
        {
            var user = applicationContext.User
                .FirstOrDefault(e => 
                    (loginModel.UsernameOrEmail.Contains('@') 
                        ? e.Email == loginModel.UsernameOrEmail 
                        : e.Username == loginModel.UsernameOrEmail) 
                    && e.Password == HashPassword(loginModel.Password));
            if (user == null)
            {
                throw new Exception("User is not found");
            }
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Secret"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Username),
                    new Claim(ClaimTypes.Name, user.Email),
                    new Claim(ClaimTypes.Role, applicationContext.Role.FirstOrDefault(e => e.Id == user.RoleId).Name),
                }),
                Issuer = _configuration["Jwt:Issuer"],
                Audience = _configuration["Jwt:Audience"],
                Expires = DateTime.UtcNow.AddHours(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var jwtToken = new JwtSecurityTokenHandler().WriteToken(token);
            return new AuthorizationModel
            {
                User = new UserModel 
                { 
                    Id = user.Id,
                    Username = user.Username,
                    Email = user.Email,
                    Icon = user.Icon
    },
                Token = PREFIX + jwtToken

            };
        }

        public bool Registration(RegistrationModel registrationModel)
        {
            User user = new User
            {
                Username = registrationModel.Username,
                Password = HashPassword(registrationModel.Password),
                Email = registrationModel.Email,
                RoleId = 1
            };

            applicationContext.User.Add(user);
            applicationContext.SaveChanges();
            return true;
        }

        static string HashPassword(string password)
        {
            using (SHA256 sha256Hash = SHA256.Create())
            {
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(password));

                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }
                return builder.ToString();
            }
        }
    }
}
