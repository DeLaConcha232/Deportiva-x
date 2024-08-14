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
            string resetLink = GenerateResetLink(userEmail);

            _emailService.SendForgotPasswordEmail(userEmail, resetLink);
        }

        private string GenerateResetLink(string userEmail)
        {
            return $"https://www.deportiva-x.com/reset-password?email={userEmail}&token=generatedToken";
        }
    }
}
