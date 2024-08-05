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
                // if (userDto.Imagen == null)
                // {
                //     return BadRequest("The Imagen field is required.");
                // }

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
                    descuentoInicial = 1,
                    // Imagen = userDto.Imagen
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


        [HttpPost("cart/add")]
        public async Task<IActionResult> AddToCart([FromBody] CartItemDto cartItemDto)
        {
            var user = await _context.Users.FindAsync(cartItemDto.UserId);
            if (user == null)
            {
                return NotFound("User not found.");
            }

            var product = await _context.Products.FindAsync(cartItemDto.ProductId);
            if (product == null)
            {
                return NotFound("Product not found.");
            }

            // Verifica si existe un carrito para el usuario
            var cart = await _context.Carrito.FirstOrDefaultAsync(c => c.idUsuarios == user.idUsuarios);
            if (cart == null)
            {
                // Si no existe, crea uno nuevo
                cart = new Carrito { idUsuarios = user.idUsuarios };
                _context.Carrito.Add(cart);
                await _context.SaveChangesAsync();
            }

            // Verifica si el producto ya está en el carrito
            var cartItem = await _context.CarritoItems.FirstOrDefaultAsync(ci => ci.idCarrito == cart.idCarrito && ci.idProductos == product.idProductos);
            if (cartItem != null)
            {
                // Si ya está, incrementa la cantidad
                cartItem.Cantidad += cartItemDto.Cantidad;
            }
            else
            {
                // Si no está, agrega el nuevo producto al carrito
                cartItem = new CarritoItems
                {
                    idCarrito = cart.idCarrito,
                    idProductos = product.idProductos,
                    Cantidad = cartItemDto.Cantidad,
                    Precio = product.Precio
                };
                _context.CarritoItems.Add(cartItem);
            }

            await _context.SaveChangesAsync();

            return Ok();
        }

        public class CartItemDto
        {
            public int UserId { get; set; }
            public int ProductId { get; set; }
            public int Cantidad { get; set; }
        }

        [HttpGet("cart/{userId}")]
        public async Task<IActionResult> GetCartItems(int userId)
        {
            var cart = await _context.Carrito
                .Include(c => c.CarritoItems)
                .ThenInclude(ci => ci.Productos)
                .FirstOrDefaultAsync(c => c.idUsuarios == userId);

            if (cart == null)
            {
                return NotFound("Cart not found.");
            }

            return Ok(cart.CarritoItems);
        }

        [HttpDelete("cart/remove/{idCarritoItems}")]
        public async Task<IActionResult> RemoveFromCart(int idCarritoItems)
        {
            var cartItem = await _context.CarritoItems.FindAsync(idCarritoItems);
            if (cartItem == null)
            {
                return NotFound("Cart item not found.");
            }

            _context.CarritoItems.Remove(cartItem);
            await _context.SaveChangesAsync();

            return Ok();
        }




        [HttpPost("wishlist/add")]
        public async Task<IActionResult> AddToWishlist([FromBody] WishlistDto wishlistDto)
        {
            var user = await _context.Users.FindAsync(wishlistDto.UserId);
            if (user == null)
            {
                return NotFound("User not found.");
            }

            var product = await _context.Products.FindAsync(wishlistDto.ProductId);
            if (product == null)
            {
                return NotFound("Product not found.");
            }

            var wishlistItem = new UserWishlist
            {
                idUsuario = wishlistDto.UserId,
                idProducto = wishlistDto.ProductId
            };

            _context.UserWishlist.Add(wishlistItem);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPost("wishlist/remove")]
        public async Task<IActionResult> RemoveFromWishlist([FromBody] WishlistDto wishlistDto)
        {
            var wishlistItem = await _context.UserWishlist
                .FirstOrDefaultAsync(uw => uw.idUsuario == wishlistDto.UserId && uw.idProducto == wishlistDto.ProductId);

            if (wishlistItem == null)
            {
                return NotFound("Wishlist item not found.");
            }

            _context.UserWishlist.Remove(wishlistItem);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpGet("wishlist/{userId}")]
        public async Task<IActionResult> GetWishlist(int userId)
        {
            var wishlist = await _context.UserWishlist
                .Where(uw => uw.idUsuario == userId)
                .Select(uw => uw.idProducto)
                .ToListAsync();

            if (wishlist == null || !wishlist.Any())
            {
                return NotFound("Wishlist not found.");
            }

            var products = await _context.Products
                .Where(p => wishlist.Contains(p.idProductos))
                .ToListAsync();

            return Ok(products);
        }

        public class WishlistDto
        {
            public int UserId { get; set; }
            public int ProductId { get; set; }
        }




        [HttpGet("products/search")]
        public async Task<IActionResult> SearchProducts([FromQuery] string query)
        {
            if (string.IsNullOrEmpty(query))
            {
                return BadRequest("Query parameter is required.");
            }

            // Convertimos la consulta a minúsculas para una búsqueda insensible a mayúsculas/minúsculas
            var lowercaseQuery = query.ToLower();

            var products = await _context.Products
                .Where(p => EF.Functions.Like(p.Nombre.ToLower(), $"%{lowercaseQuery}%") || EF.Functions.Like(p.Descripcion.ToLower(), $"%{lowercaseQuery}%"))
                .ToListAsync();

            if (!products.Any())
            {
                return NotFound("No products found matching the query.");
            }

            return Ok(products);
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

