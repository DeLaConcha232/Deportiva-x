using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UserRegistrationApi.Models
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int idUsuarios { get; set; }
        public string Nombre { get; set; }
        public string Email { get; set; }

        [Column(TypeName = "nvarchar(255)")]
        public string Contrasena { get; set; }
        public int? Postalcode { get; set; }
        public string Domicilio { get; set; }
        public string Telefono { get; set; }
        public DateTime FechaRegistro { get; set; }
        public byte descuentoInicial { get; set; } // Cambiado a byte
                                                   // public string Imagen { get; set; }

        // Navegación virtual
        public virtual ICollection<UserWishlist> Wishlists { get; set; }
    }
}
