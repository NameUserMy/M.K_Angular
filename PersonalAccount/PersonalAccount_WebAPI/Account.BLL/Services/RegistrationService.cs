using Account.BLL.DTO;
using Account.BLL.ServisceInterfaces;
using PersonalAccount_DAL.Interfaces;


namespace Account.BLL.Services
{
    public class RegistrationService : IRegistrationService
    {
        private readonly IUnitOfWork _DB;
        public RegistrationService(IUnitOfWork unitOf)=>_DB = unitOf;
        
        
        public async Task<bool> RegisterAsync(UserDTO user)
        {

           
            if (user != null)
            {
               await  _DB.Registration.AddUserAsync(new PersonalAccount_DAL.Entities.User 
                 { 
                      Name=user.Name,
                      LastName=user.LastName,
                      Login = user.Login,
                      Pass = user.Pass


                 });

                return true;

            }
            return false;
        }
    }
}
