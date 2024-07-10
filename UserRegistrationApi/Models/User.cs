using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class User
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int idUsuarios { get; set; }
    public string Nombre { get; set; }
    public string Email { get; set; }
    public string Contrasena { get; set; }
    public DateTime? FechaRegistro { get; set; }
    public int? DescuentoInicial { get; set; }
    public string? Imagen { get; set; }
    public string Telefono { get; set; }
    public string Postalcode { get; set; }
    public string Domicilio { get; set; }
}
