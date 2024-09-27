using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Account.BLL.DTO
{
    public class UserDTO
    {
        public int Id { get; set; }
        public string? Pass { get; set; }
        public string? Login { get; set; }
        public string? Name { get; set; }
        public string? LastName { get; set; }
    }
}
