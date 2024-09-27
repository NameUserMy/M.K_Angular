using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PersonalAccount_DAL.Interfaces
{
    public interface ILoggin
    {
        public Task<bool> IsLoginAsync(string username, string password);
    }
}
