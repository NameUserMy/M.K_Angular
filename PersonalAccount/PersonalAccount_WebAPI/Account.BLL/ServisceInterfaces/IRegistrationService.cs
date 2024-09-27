using Account.BLL.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Account.BLL.ServisceInterfaces
{
    public interface IRegistrationService
    {
        public Task<bool> RegisterAsync(UserDTO user);
    }
}
