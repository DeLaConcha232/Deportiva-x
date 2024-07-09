namespace UserRegistrationApi.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Postalcode { get; set; }
        public string Domicilio { get; set; }
        public string Telefono { get; set; }
    }
}
