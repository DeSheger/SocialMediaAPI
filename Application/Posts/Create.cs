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
        public class Query : IRequest<Post> { public Post post { get; set; } }

        public class Handler : IRequestHandler<Query, Post>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Post> Handle(Query request, CancellationToken cancellationToken)
            {
                Post result = new Post
                {
                    Title = request.post.Title,
                    Date = DateTime.Now,
                    Image = request.post.Image,
                    Description = request.post.Description,
                };

                await _context.Posts.AddRangeAsync(result);
                await _context.SaveChangesAsync();

                return result;
            }
        }
    }
}