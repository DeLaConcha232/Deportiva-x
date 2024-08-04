using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UserRegistrationApi.Models
{
    public class UserWishlist
    {
        [Key]
        public int Id { get; set; }
        public int idUsuario { get; set; }
        public int idProducto { get; set; }

        [ForeignKey("idUsuario")]
        public virtual User User { get; set; }

        [ForeignKey("idProducto")]
        public virtual Product Product { get; set; }
    }
}
