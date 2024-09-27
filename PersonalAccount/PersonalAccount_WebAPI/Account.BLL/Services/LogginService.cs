using Account.BLL.ServisceInterfaces;
using PersonalAccount_DAL.Interfaces;


namespace Account.BLL.Services
{
    public class LogginService : ILogginService
    {
        private readonly IUnitOfWork _DB;
        public LogginService(IUnitOfWork unitOf) => _DB = unitOf;

        public async Task<bool> IsLoginAsync(string username, string password)
        {
            return await  _DB.Loggin.IsLoginAsync(username, password);
        }
    }
}
