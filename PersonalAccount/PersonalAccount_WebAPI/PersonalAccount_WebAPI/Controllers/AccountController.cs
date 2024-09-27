using Account.BLL.DTO;
using Account.BLL.Services;
using Account.BLL.ServisceInterfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PersonalAccount_DAL.Interfaces;
using System.Linq;

namespace PersonalAccount_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {


        private readonly ILogger<AccountController>? _logger;
        private readonly IAccountService? _accountService;
        private bool _result;
        public AccountController(IAccountService accountService,ILogger<AccountController> logger) {
            _logger = logger;
            _accountService = accountService;


        }


        [HttpGet("{login}")]
        public async Task<ActionResult<UserDTO>> GetUser(string login)
        {
            
            var user= await _accountService?.GetUserAsync(login)!;
            return user;
        }


        [HttpPut]
        public async Task<ActionResult> UpdateUser(UserDTO user,string login) {


            _logger.LogInformation($"{login} {user.Name}  {user.LastName} {user.Pass} {user.Login} ");
            


            if (string.IsNullOrEmpty(login) || user==null)
            {
                _result=false;
                return Ok(new { isUpdate = _result });
            }
            else
            {
                _result = await _accountService.UserUpdateAsync(user, login);
                return Ok(new { isUpdate = _result });

            }



        }


    }
}
