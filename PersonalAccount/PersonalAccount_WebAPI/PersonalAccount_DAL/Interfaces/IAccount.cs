using PersonalAccount_DAL.Entities;

namespace PersonalAccount_DAL.Interfaces
{
    public interface IAccount
    {
        public Task<User> GetUserAsync(string loggin);
        public Task<bool> UserUpdateAsync(User user,string login);
    }
}
