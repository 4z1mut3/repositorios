using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repositorios.Models
{
    public class User
    {
        private int Id { get; set; }
        private String Login { get; set; }
        private String Avatar { get; set; }
        private String Name { get; set; }

        public User() { }
        public User(int Id, String Login, String Avatar, String Name) {
            this.Id = Id;
            this.Avatar = Avatar;
            this.Login = Login;
            this.Name = Name;
        }

    }
}
