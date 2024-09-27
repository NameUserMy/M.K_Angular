using Microsoft.EntityFrameworkCore;
using PersonalAccount_DAL.Entities;


namespace PersonalAccount_DAL.EF
{
    public class AccountContext:DbContext
    {

        public DbSet<User> Users { get; set; }
        public AccountContext(DbContextOptions<AccountContext> options):base(options) {
        
          
        
        }
    }
}
