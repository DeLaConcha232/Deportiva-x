using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using BCrypt.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using UserRegistrationApi.Models;

namespace UserRegistrationApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _configuration;

        public UserController(AppDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost("register")] // Endpoint para registrar usuarios
        public async Task<IActionResult> RegisterUser([FromBody] User userDto)
        {
            try
            {
                // Validar y registrar el usuario en la base de datos
                var hashedPassword = HashPassword(userDto.Password);
                var newUser = new User
                {
                    Name = userDto.Name,
                    Email = userDto.Email,
                    Password = hashedPassword,
                    Postalcode = userDto.Postalcode,
                    Domicilio = userDto.Domicilio,
                    Telefono = userDto.Telefono
                };

                await _context.Users.AddAsync(newUser);
                await _context.SaveChangesAsync();

                // Generar token JWT
                var token = GenerateJwtToken(newUser);

                // Devolver el token junto con otros detalles si es necesario
                var response = new
                {
                    Token = token,
                    User = new
                    {
                        newUser.Id,
                        newUser.Name,
                        newUser.Email
                        // Agrega más campos según sea necesario
                    }
                };

                return Ok(response); // 200 OK
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}"); // 500 Internal Server Error
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginCredentials credentials)
        {
            try
            {
                // Buscar el usuario por email en la base de datos
                var user = await _context.Users.FirstOrDefaultAsync(u =>
                    u.Email == credentials.Email
                );

                // Verificar si el usuario existe y la contraseña es válida
                if (user == null || !BCrypt.Net.BCrypt.Verify(credentials.Password, user.Password))
                {
                    // Devolver un error de autenticación
                    return Unauthorized("Credenciales inválidas");
                }

                // Generar token JWT
                var token = GenerateJwtToken(user);

                // Devolver el token junto con otros detalles si es necesario
                var response = new
                {
                    Token = token,
                    User = new
                    {
                        user.Id,
                        user.Name,
                        user.Email
                        // Agrega más campos según sea necesario
                    }
                };

                return Ok(response); // 200 OK
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}"); // 500 Internal Server Error
            }
        }

        // Método para generar un token JWT
        private string GenerateJwtToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration["JwtSettings:Secret"]);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(
                    new Claim[]
                    {
                        new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                        new Claim(ClaimTypes.Email, user.Email),
                        // Puedes añadir más claims según tus necesidades (roles, etc.)
                    }
                ),
                Expires = DateTime.UtcNow.AddDays(
                    Convert.ToDouble(_configuration["JwtSettings:ExpireDays"])
                ),
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha256Signature
                )
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        // Método para hashear la contraseña
        private string HashPassword(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }
    }
}
