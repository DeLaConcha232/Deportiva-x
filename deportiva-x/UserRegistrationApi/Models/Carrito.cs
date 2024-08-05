using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace UserRegistrationApi.Models
{
    public class Carrito
    {
        public int idCarrito { get; set; }
        public int idUsuarios { get; set; }
        public int UseridUsuarios { get; set; } // Nueva propiedad
        public User User { get; set; }
        public List<CarritoItems> CarritoItems { get; set; }
    }


    public class CarritoItems
    {
        public int idCarritoItems { get; set; }
        public int idCarrito { get; set; }
        public Carrito Carrito { get; set; }
        public int idProductos { get; set; }
        public int UseridUsuarios { get; set; } // Nueva propiedad
        public Product Productos { get; set; }
        public int Cantidad { get; set; }
        public decimal Precio { get; set; }
    }

}
