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

        [HttpGet("products")]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _context.Products.ToListAsync();
            return Ok(products);
        }

        [HttpGet("products/{id}")]
        public async Task<IActionResult> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] User userDto)
        {
            try
            {
                var existingUser = await _context.Users.FirstOrDefaultAsync(u =>
                    u.Email == userDto.Email
                );
                if (existingUser != null)
                {
                    return BadRequest("El correo electrónico ya está en uso.");
                }

                var hashedPassword = HashPassword(userDto.Contrasena);
                var newUser = new User
                {
                    Nombre = userDto.Nombre,
                    Email = userDto.Email,
                    Contrasena = hashedPassword,
                    Postalcode = userDto.Postalcode,
                    Domicilio = userDto.Domicilio,
                    Telefono = userDto.Telefono,
                    FechaRegistro = DateTime.Now,
                    DescuentoInicial = 1,
                    Imagen = userDto.Imagen
                };

                await _context.Users.AddAsync(newUser);
                await _context.SaveChangesAsync();

                var token = GenerateJwtToken(newUser);

                var response = new
                {
                    Token = token,
                    User = new
                    {
                        newUser.idUsuarios,
                        newUser.Nombre,
                        newUser.Email
                    }
                };

                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginCredentials credentials)
        {
            try
            {
                var user = await _context.Users.FirstOrDefaultAsync(u =>
                    u.Email == credentials.Email
                );

                if (
                    user == null
                    || !BCrypt.Net.BCrypt.Verify(credentials.Password, user.Contrasena)
                )
                {
                    return Unauthorized("Credenciales inválidas");
                }

                var token = GenerateJwtToken(user);

                var response = new
                {
                    Token = token,
                    User = new
                    {
                        user.idUsuarios,
                        user.Nombre,
                        user.Email
                    }
                };

                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        private string GenerateJwtToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration["JwtSettings:Secret"]);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(
                    new[]
                    {
                        new Claim(ClaimTypes.NameIdentifier, user.idUsuarios.ToString()),
                        new Claim(ClaimTypes.Email, user.Email)
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

        private string HashPassword(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }
    }
}
