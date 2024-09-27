using Microsoft.EntityFrameworkCore;
using PersonalAccount_DAL.EF;
using PersonalAccount_DAL.Interfaces;

namespace PersonalAccount_DAL.Repository
{
    public class LogginRepository : ILoggin
    {
        AccountContext? _DB;

        public LogginRepository(AccountContext context) =>_DB = context;
        public async Task<bool> IsLoginAsync(string username, string password)
        {
          

            if(_DB != null&&!string.IsNullOrEmpty(username)&&!string.IsNullOrEmpty(password))
            {

                var userCheck = await _DB.Users.SingleOrDefaultAsync(e => e.Login == username);

                if (userCheck != null)
                {
                    return userCheck.Pass == password ? true : false;
                }
                else
                {
                    return false;
                };


            }


            return false;
        }
    }
}
