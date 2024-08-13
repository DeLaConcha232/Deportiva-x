namespace UserRegistrationApi.Services
{
    public class ForgotPasswordService
    {
        private readonly EmailService _emailService;

        public ForgotPasswordService(EmailService emailService)
        {
            _emailService = emailService;
        }

        public void HandleForgotPassword(string userEmail)
        {
            // Lógica para generar el enlace de reseteo de contraseña
            string resetLink = GenerateResetLink(userEmail);

            // Envío del correo
            _emailService.SendForgotPasswordEmail(userEmail, resetLink);
        }

        private string GenerateResetLink(string userEmail)
        {
            // Lógica para generar el enlace de reseteo
            return $"https://www.deportiva-x.com/reset-password?email={userEmail}&token=generatedToken";
        }
    }
}
