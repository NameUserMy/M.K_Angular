

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PersonalAccount_DAL.EF;
using PersonalAccount_DAL.Entities;
using PersonalAccount_DAL.Interfaces;

namespace PersonalAccount_DAL.Repository
{
    public class AccountRepository : IAccount
    {
        AccountContext? _DB;
        public AccountRepository(AccountContext context) => _DB = context;
        public async Task<User> GetUserAsync(string login)
        {
          var user= await  _DB.Users.SingleOrDefaultAsync(e=>e.Login == login);

            if (user != null)
            {

                return user;
            }
            else {

                 throw new ArgumentNullException();
            
            }


        }

        public async Task<bool> UserUpdateAsync(User user, string login)
        {
            var userTarget = await _DB.Users.SingleOrDefaultAsync(e => e.Login == login);


            if (userTarget != null)
            {

                userTarget.Login = user.Login;
                userTarget.Pass = user.Pass;
                userTarget.Name = user.Name;
                user.LastName = user.LastName;

                await _DB.SaveChangesAsync();
                return true;

            }
            else {

                return false;

            }
           

           
        }
    }
}
