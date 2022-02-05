using System;
using System.Collections.Generic;

namespace Domain
{
    public class User
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Password { get; set; }
        
        public ICollection<Post> Posts { get; set; }
    }
}