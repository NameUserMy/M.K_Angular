using PersonalAccount_DAL.Entities;


namespace PersonalAccount_DAL.Interfaces
{
    public  interface IRegistration
    {
        public Task<bool> IsLoginAsync(string login);
        public Task AddUserAsync(User user);
    }
}
