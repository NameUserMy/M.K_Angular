using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PersonalAccount_DAL.Interfaces
{
    public interface IUnitOfWork
    {
        public IRegistration Registration { get; }
        public ILoggin Loggin { get; }
        public IAccount Account { get; }
    }
}
