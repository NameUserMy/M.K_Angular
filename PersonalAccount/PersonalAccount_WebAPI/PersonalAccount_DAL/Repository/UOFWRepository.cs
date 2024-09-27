using PersonalAccount_DAL.EF;
using PersonalAccount_DAL.Interfaces;


namespace PersonalAccount_DAL.Repository
{

    
    public  class UOFWRepository:IUnitOfWork
    {

        private RegistrationRepository? _reg;
        private LogginRepository? _loggin;
        private AccountRepository? _accountRepository;
       
        
        private readonly AccountContext? _DB;
        public UOFWRepository(AccountContext db)
        {

            _DB = db;

        }


        public IRegistration Registration
        {
            get
            {
                if (_reg == null&&_DB!=null)
                {
                    _reg = new RegistrationRepository(_DB);
                }

                return _reg!;

            }
        }



        public ILoggin Loggin
        {
            get
            {
                if (_loggin == null && _DB != null)
                {
                    _loggin = new LogginRepository(_DB);
                }

                return _loggin!;

            }
        }

        public IAccount Account => _accountRepository=new AccountRepository(_DB!);
    }
}
