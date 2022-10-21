using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Posts
{
    public class Create
    {
        public class Command : IRequest<Post> { public Post post { get; set; } }

        public class Handler : IRequestHandler<Command, Post>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Post> Handle(Command request, CancellationToken cancellationToken)
            {
                Post result = new Post
                {
                    Title = request.post.Title,
                    Date = DateTime.Now,
                    Author = request.post.Author,
                    AuthorId = request.post.AuthorId,
                    Image = request.post.Image,
                    Description = request.post.Description,
                };

                _context.Posts.Add(result);
                await _context.SaveChangesAsync();

                return result;
            }
        }
    }
}