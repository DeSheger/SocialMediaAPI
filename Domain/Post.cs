using System;

namespace Domain
{
    public class Post
    {

        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Author {get; set;}
        public string AuthorId { get; set; }
        public DateTime Date { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
    }
}