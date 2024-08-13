using Microsoft.AspNetCore.Mvc;
using UserRegistrationApi.Models;
using UserRegistrationApi.Services;

namespace UserRegistrationApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly ForgotPasswordService _forgotPasswordService;

        public AccountController(ForgotPasswordService forgotPasswordService)
        {
            _forgotPasswordService = forgotPasswordService;
        }

        [HttpPost("forgot-password")]
        public IActionResult ForgotPassword([FromBody] ForgotPasswordRequest model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _forgotPasswordService.HandleForgotPassword(model.Email);
            return Ok("If an account with that email exists, you will receive a password reset link.");
        }
    }
}
