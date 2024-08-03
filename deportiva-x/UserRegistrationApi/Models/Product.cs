using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace UserRegistrationApi.Models
{
    public class Product
    {
        public int idProductos { get; set; }
        public string Nombre { get; set; }
        public decimal Precio { get; set; }
        public string Descripcion { get; set; }
        public string Imagen { get; set; }

        public int Stock { get; set; }

        public string Categoria { get; set; }

        public string Marca { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public List<string> Talla { get; set; }

        // Navegación virtual
        public virtual ICollection<UserWishlist> Wishlists { get; set; }
    }
}
