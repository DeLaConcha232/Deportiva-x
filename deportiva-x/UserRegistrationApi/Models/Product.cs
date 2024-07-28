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

        [Column(TypeName = "nvarchar(max)")]
        public List<string> Tallas { get; set; }
        public string Confeccion { get; set; }
    }
}
