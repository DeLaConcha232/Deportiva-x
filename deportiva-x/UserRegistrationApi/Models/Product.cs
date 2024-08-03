using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

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

        // Campo privado para el almacenamiento interno
        private string _talla;

        [NotMapped] // Evita que EF intente mapear esto a una columna en la base de datos
        public List<string> Talla
        {
            get => string.IsNullOrEmpty(_talla) ? new List<string>() : _talla.Trim('[', ']').Split(',').Select(t => t.Trim()).ToList();
            set => _talla = value == null ? "" : string.Join(",", value);
        }

        [Column("Talla")] // Esto mapea el campo privado a la columna 'Talla' en la base de datos
        public string TallaDb
        {
            get => _talla;
            set => _talla = value;
        }

        public virtual ICollection<UserWishlist> Wishlists { get; set; }
        public virtual ICollection<CarritoItems> CarritoItems { get; set; }
    }
}
