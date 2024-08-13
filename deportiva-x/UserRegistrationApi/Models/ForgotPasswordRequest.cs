using System.ComponentModel.DataAnnotations;

namespace UserRegistrationApi.Models
{
    public class ForgotPasswordRequest
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
