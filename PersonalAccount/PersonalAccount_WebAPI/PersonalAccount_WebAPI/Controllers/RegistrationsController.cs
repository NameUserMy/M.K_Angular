using Account.BLL.DTO;
using Account.BLL.ServisceInterfaces;
using Microsoft.AspNetCore.Mvc;



namespace PersonalAccount_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationsController : ControllerBase
    {
        private readonly IRegistrationService? _userRegistration;
        private ILogger<RegistrationsController>? _logger;
        private bool _result;
        public RegistrationsController(IRegistrationService registration, ILogger<RegistrationsController> logger) 
        {
            _userRegistration = registration;
            _logger = logger;
            
        }

        [HttpPost]
        public async Task <ActionResult> Registration(UserDTO user)
        {


            _logger.LogInformation("Registrations");
            if (_userRegistration != null)
            {
                _result = await _userRegistration.RegisterAsync(user);

                _logger.LogInformation($"Registration successful: {_result}");
                return   Ok(new { IsRegistration = _result});
            }
            else
            {

              return  Ok(new { IsRegistration = _result });

            }
        }
    }
}
