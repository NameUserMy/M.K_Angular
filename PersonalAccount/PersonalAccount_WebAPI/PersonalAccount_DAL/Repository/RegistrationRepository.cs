using Microsoft.EntityFrameworkCore;
using PersonalAccount_DAL.EF;
using PersonalAccount_DAL.Entities;
using PersonalAccount_DAL.Interfaces;


namespace PersonalAccount_DAL.Repository
{
    internal class RegistrationRepository : IRegistration
    {
        AccountContext? _DB;
        public RegistrationRepository(AccountContext context)=>_DB = context;
        public async Task AddUserAsync(User user)
        {
           await _DB.AddAsync(user);
           await _DB.SaveChangesAsync();
        }
        public async Task<bool> IsLoginAsync(string login)
        {
            var isLogin = await _DB.Users.FirstOrDefaultAsync(u => u.Login == login);

            if (isLogin != null)
            {
                return true;
            }
            return false;
        }
       
    }
}
