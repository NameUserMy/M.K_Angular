using Account.BLL.Services;
using Account.BLL.ServisceInterfaces;
using Microsoft.Extensions.DependencyInjection;
using PersonalAccount_DAL.Interfaces;
using PersonalAccount_DAL.Repository;


namespace Account.BLL.Infrastructure
{
    public static class AccountExtensions
    {
        public static void AddServiceAccount(this IServiceCollection services)
        {
            services.AddScoped<IRegistrationService, RegistrationService>();
            services.AddScoped<ILogginService, LogginService>();
            services.AddScoped<IAccountService, AccountService>();
            services.AddScoped<IUnitOfWork, UOFWRepository>();
        }
    }
}
