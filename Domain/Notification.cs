using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Notification
    {
        public Guid Id { get; set; }
        public string Author {get; set;}
        public string AuthorId { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
    }
}