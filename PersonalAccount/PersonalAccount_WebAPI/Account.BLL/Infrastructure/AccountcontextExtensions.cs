using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PersonalAccount_DAL.EF;

namespace Account.BLL.Infrastructure
{
    public static class AccountcontextExtensions
    {

        public static void AddContext(this IServiceCollection services, string connect)
        {
            services.AddDbContext<AccountContext>(option => option.UseSqlite(connect));
        }
    }
}