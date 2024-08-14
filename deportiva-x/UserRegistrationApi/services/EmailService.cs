using System.Net;
using System.Net.Mail;

namespace UserRegistrationApi.Services
{
    public class EmailService
    {
        public void SendForgotPasswordEmail(string toEmail, string resetLink)
        {
            var fromAddress = new MailAddress("forgotdeportiva-x@deportiva-x.com", "Deportiva-X Support");
            var toAddress = new MailAddress(toEmail);
            const string fromPassword = "vythen-xuhzev-1Wavso";  // pssw
            const string subject = "Reset your password";
            string body = $"Please click the link to reset your password: {resetLink}";

            var smtp = new SmtpClient
            {
                Host = "smtp.hostinger.com",  // SMTP Hostinger
                Port = 587, // 456 x ssl
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
            };

            using (var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = subject,
                Body = body
            })
            {
                smtp.Send(message);
            }
        }
    }
}
