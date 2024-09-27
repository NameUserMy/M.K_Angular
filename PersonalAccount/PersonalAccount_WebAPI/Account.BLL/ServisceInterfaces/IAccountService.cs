using Account.BLL.DTO;
using PersonalAccount_DAL.Entities;


namespace Account.BLL.ServisceInterfaces
{
    public interface IAccountService
    {
        public Task<UserDTO> GetUserAsync(string loggin);
        public Task<bool> UserUpdateAsync(UserDTO user, string login);
    }
}
