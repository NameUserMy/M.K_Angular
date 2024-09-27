using Account.BLL.DTO;
using Account.BLL.Services;
using Account.BLL.ServisceInterfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PersonalAccount_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogginController : ControllerBase
    {

        private ILogger<LogginController>? _logger;
        private readonly ILogginService? _logginService;
        private bool _result;
        public LogginController(ILogger<LogginController>? loger, ILogginService logginService) { 
        
            _logger = loger ?? throw new ArgumentNullException(nameof(loger));
            _logginService = logginService ?? throw new ArgumentNullException(nameof(_logginService));
        
        
        }
        
        [HttpPost]
        public  async Task<ActionResult> Loggin(LogginDTO login)

        {

                _logger.LogInformation($"Login  {login.Login} ");
                

            if (string.IsNullOrEmpty(login.Login) || string.IsNullOrEmpty(login.Pass))
            {

                return Ok(new { isLoggin = _result });

            }
            else
            {
                _logger.LogInformation($"Login  {login.Login} {login.Pass}");
               
                
                _result = await _logginService.IsLoginAsync(login.Login, login.Pass);
               
                
                _logger.LogInformation($"Login  {_result} ");
                return Ok(new { isLoggin = _result });

            }
        }
    }
}
