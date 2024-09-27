using Account.BLL.DTO;
using Account.BLL.ServisceInterfaces;
using AutoMapper;
using PersonalAccount_DAL.Entities;
using PersonalAccount_DAL.Interfaces;


namespace Account.BLL.Services
{
    public class AccountService : IAccountService
    {

        private readonly IUnitOfWork _DB;
        public AccountService(IUnitOfWork unitOf) => _DB = unitOf;
        public async Task<UserDTO> GetUserAsync(string loggin)
        {
            var mapper = new MapperConfiguration(conf => conf.CreateMap<User, UserDTO>()).CreateMapper();
            return mapper.Map<User, UserDTO>(await _DB.Account.GetUserAsync(loggin));
        }

        public async Task<bool> UserUpdateAsync(UserDTO user, string login)
        {
            return  await   _DB.Account.UserUpdateAsync(
                new User {
                    Name=user.Name,
                    LastName=user.LastName,
                    Login=user.Login,
                    Pass = user.Pass,
                },login);
           
        }
    }
}
