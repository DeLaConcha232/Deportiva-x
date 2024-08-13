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
        public async Task<IActionResult> GetProduct(string id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        // [HttpGet("productscatalog")]
        // public async Task<IActionResult> GetProductsByCategory([FromQuery] string category)
        // {
        //     IQueryable<Product> productsQuery = _context.Products;

        //     if (!string.IsNullOrEmpty(category))
        //     {
        //         productsQuery = productsQuery.Where(p => p.Categoria == category);
        //     }

        //     var products = await productsQuery.ToListAsync();

        //     return Ok(products);
        // }

        [HttpGet("productscatalog")]
        public async Task<IActionResult> GetProductsByCategory([FromQuery] string category)
        {
            IQueryable<Product> productsQuery = _context.Products;

            if (!string.IsNullOrEmpty(category))
            {
                // Filtra productos que contengan la categoría especificada
                productsQuery = productsQuery.Where(p => p.Categoria.Contains(category));
            }

            var products = await productsQuery.ToListAsync();
            return Ok(products);
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
                    descuentoInicial = 1,
                    Wishlists = new List<UserWishlist>(), // Inicializar como lista vacía
                    CarritoItems = new List<CarritoItems>(), // Inicializar como lista vacía
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

            var cart = await _context.Carrito.FirstOrDefaultAsync(c => c.idUsuarios == user.idUsuarios);
            if (cart == null)
            {
                cart = new Carrito { idUsuarios = user.idUsuarios };
                _context.Carrito.Add(cart);
                await _context.SaveChangesAsync();
            }

            var cartItem = await _context.CarritoItems.FirstOrDefaultAsync(ci =>
                ci.idCarrito == cart.idCarrito &&
                ci.idProductos == product.idProductos &&
                ci.Talla == cartItemDto.Talla); // Verifica si el producto con la talla ya está en el carrito

            if (cartItem != null)
            {
                cartItem.Cantidad += cartItemDto.Cantidad;
            }
            else
            {
                cartItem = new CarritoItems
                {
                    idCarrito = cart.idCarrito,
                    idProductos = product.idProductos,
                    Cantidad = cartItemDto.Cantidad,
                    Precio = product.Precio,
                    Talla = cartItemDto.Talla // Guarda la talla seleccionada
                };
                _context.CarritoItems.Add(cartItem);
            }

            await _context.SaveChangesAsync();

            return Ok();
        }




        [HttpDelete("cart/clear/{userId}")]
        public async Task<IActionResult> ClearCart(int userId)
        {
            // Encuentra el carrito del usuario
            var cart = await _context.Carrito.FirstOrDefaultAsync(c => c.idUsuarios == userId);

            if (cart == null)
            {
                return NotFound("Carrito no encontrado para el usuario.");
            }

            // Obtiene todos los items del carrito de este usuario
            var cartItems = _context.CarritoItems.Where(ci => ci.idCarrito == cart.idCarrito);

            // Elimina todos los items del carrito
            _context.CarritoItems.RemoveRange(cartItems);
            await _context.SaveChangesAsync();

            // Verifica si es la primera compra del usuario y actualiza el descuento
            var user = await _context.Users.FindAsync(userId);
            if (user != null && user.descuentoInicial == 1)
            {
                user.descuentoInicial = 0;
                await _context.SaveChangesAsync();
            }

            return Ok();
        }






        public class CartItemDto
        {
            public int UserId { get; set; }
            public string ProductId { get; set; }
            public int Cantidad { get; set; }
            public decimal Price { get; set; }
            public string Talla { get; set; } // Nueva propiedad para la talla
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

            var cartItems = cart.CarritoItems.Select(ci => new
            {
                ci.idCarritoItems,
                ci.idProductos,
                Nombre = ci.Productos?.Nombre ?? "Producto no disponible",
                Precio = ci.Productos?.Precio ?? 0,
                Imagen = ci.Productos?.Imagen ?? "Imagen no disponible",
                ci.Cantidad,
                ci.Talla // Incluye la talla aquí
            }).ToList();

            // Aquí es donde se agrega el debug
            foreach (var item in cartItems)
            {
                Console.WriteLine($"Producto ID: {item.idProductos}, Nombre: {item.Nombre}, Precio: {item.Precio}, Imagen: {item.Imagen}");
            }

            return Ok(cartItems);
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

            // Aquí 'wishlist' es una lista de strings porque 'idProducto' es un string
            var products = await _context.Products
                .Where(p => wishlist.Contains(p.idProductos)) // idProductos ahora es string
                .ToListAsync();

            return Ok(products);
        }


        public class WishlistDto
        {
            public int UserId { get; set; }
            public string ProductId { get; set; }
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

        [HttpGet("orders/{userId}")]
        public async Task<IActionResult> GetOrders(int userId)
        {
            var orders = await _context.Orders
                .Where(o => o.UserId == userId)
                .Select(o => new
                {
                    o.Id,
                    o.OrderDate,
                    o.Estado,
                    o.TotalAmount,
                    OrderItems = o.OrderItems.Select(oi => new
                    {
                        oi.ProductId,
                        oi.Quantity,
                        oi.Price,
                        ProductImage = oi.Product.Imagen // Aquí se obtiene la imagen del producto
                    }).ToList()
                })
                .ToListAsync();

            return Ok(orders);
        }

        [HttpDelete("orders/cancel/{orderId}")]
        public async Task<IActionResult> CancelOrder(int orderId)
        {

            Console.WriteLine($"CancelOrder called with orderId: {orderId}");

            var order = await _context.Orders
                .Include(o => o.OrderItems)
                .FirstOrDefaultAsync(o => o.Id == orderId);

            if (order == null)
            {
                Console.WriteLine($"Order not found for orderId: {orderId}");
                return NotFound("Order not found.");
            }

            // Devolver el stock a los productos asociados al pedido
            foreach (var orderItem in order.OrderItems)
            {
                var product = await _context.Products.FindAsync(orderItem.ProductId);
                if (product != null)
                {
                    product.Stock += orderItem.Quantity;  // Devolver la cantidad al stock
                    _context.Products.Update(product);
                    Console.WriteLine($"Updated stock for productId: {orderItem.ProductId}, new stock: {product.Stock}");
                }
                else
                {
                    Console.WriteLine($"Product not found for productId: {orderItem.ProductId}");
                }
            }

            // Eliminar el pedido y sus items de la base de datos
            _context.OrderItems.RemoveRange(order.OrderItems);
            Console.WriteLine($"OrderItems removed for orderId: {orderId}");

            _context.Orders.Remove(order);
            Console.WriteLine($"Order removed for orderId: {orderId}");

            await _context.SaveChangesAsync();
            Console.WriteLine("Changes saved to the database");

            return Ok(new { message = "Order canceled and removed successfully." });
        }





        [HttpGet("{userId}")]
        public async Task<IActionResult> GetUserDetails(int userId)
        {
            var user = await _context.Users.FindAsync(userId);
            if (user == null)
            {
                return NotFound("User not found.");
            }

            return Ok(new
            {
                user.Nombre,
                user.Email,
                user.Domicilio,
                user.Postalcode,
                user.Telefono,
                user.descuentoInicial // Asegúrate de que el valor de descuentoInicial se incluya aquí
            });
        }




        [HttpPost("orders")]
        public async Task<IActionResult> CreateOrder([FromBody] OrderDto orderDto)
        {
            if (orderDto == null || orderDto.CartItems == null || !orderDto.CartItems.Any())
            {
                return BadRequest("Invalid order data.");
            }

            // Verificación de datos incompletos en los productos
            foreach (var item in orderDto.CartItems)
            {
                if (string.IsNullOrEmpty(item.ProductId) || item.Cantidad <= 0 || item.Price <= 0)
                {
                    return BadRequest("Incomplete product data in the order.");
                }
            }

            var user = await _context.Users.FindAsync(orderDto.UserId);
            if (user == null)
            {
                return NotFound("User not found.");
            }

            // Aplica el descuento del 25% si es la primera compra
            var totalAmount = orderDto.Total;
            bool discountApplied = false;
            if (user.descuentoInicial == 1)
            {
                totalAmount *= 0.75m; // Aplica el 25% de descuento
                discountApplied = true;
            }

            var order = new Order
            {
                UserId = orderDto.UserId,
                TotalAmount = totalAmount,
                OrderDate = DateTime.Now,
                Estado = "Pendiente",  // Puedes ajustar el estado según sea necesario
                OrderItems = new List<OrderItem>()
            };

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            foreach (var item in orderDto.CartItems)
            {
                var orderItem = new OrderItem
                {
                    OrderId = order.Id,
                    ProductId = item.ProductId,
                    Quantity = item.Cantidad,
                    Price = item.Price
                };

                // Actualiza el stock del producto
                var product = await _context.Products.FindAsync(item.ProductId);
                if (product != null)
                {
                    if (product.Stock < item.Cantidad)
                    {
                        return BadRequest("No hay suficiente stock disponible.");
                    }

                    product.Stock -= item.Cantidad;  // Disminuye el stock según la cantidad ordenada
                    _context.Products.Update(product);
                }

                order.OrderItems.Add(orderItem);
                _context.OrderItems.Add(orderItem);
            }

            await _context.SaveChangesAsync();

            // Limpia el carrito del usuario
            await ClearCart(user.idUsuarios);

            // Actualiza el campo descuentoInicial a 0 si se aplicó el descuento
            if (discountApplied)
            {
                user.descuentoInicial = 0;
                await _context.SaveChangesAsync();
            }

            return Ok(new { OrderId = order.Id });
        }



        [HttpPut("{userId}/updatediscount")]
        public async Task<IActionResult> UpdateUserDiscount(int userId)
        {
            var user = await _context.Users.FindAsync(userId);
            if (user == null)
            {
                return NotFound("User not found.");
            }

            user.descuentoInicial = 0;
            await _context.SaveChangesAsync();

            return Ok(new { message = "User discount updated successfully." });
        }



        public class OrderDto
        {
            public int UserId { get; set; }  // ID del usuario que realiza la orden
            public decimal Total { get; set; }  // Total de la orden
            public List<CartItemDto> CartItems { get; set; }  // Lista de items en la orden
        }

        public class OrderItemDto
        {
            public string ProductId { get; set; }  // ID del producto
            public int Quantity { get; set; }  // Cantidad de productos
            public decimal Price { get; set; }  // Precio unitario del producto
        }

        [HttpPost("resetpassword")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordRequest request)
        {
            try
            {
                var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
                if (user == null)
                {
                    return NotFound(new { message = "Invalid email." });
                }

                // Verifica el token si es necesario
                if (!IsValidToken(request.Token))
                {
                    return BadRequest(new { message = "Invalid or expired token." });
                }

                user.Contrasena = HashNewPassword(request.NewPassword);
                await _context.SaveChangesAsync();

                return Ok(new { message = "Password has been reset successfully." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        public class ResetPasswordRequest
        {
            public string Email { get; set; }
            public string NewPassword { get; set; }
            public string Token { get; set; } // Incluye el token si es necesario
        }

        private bool IsValidToken(string token)
        {
            // Aquí puedes añadir lógica para validar el token si es necesario
            return true;
        }


        private string HashNewPassword(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
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

