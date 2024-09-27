using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Account.BLL.ServisceInterfaces
{
    public interface ILogginService
    {

        public Task<bool> IsLoginAsync(string username, string password);

    }
}
