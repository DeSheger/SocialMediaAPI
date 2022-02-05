using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Posts
{
    public class Detail
    {
        public class Query : IRequest<Post> { public Guid id {get; set;} }

        public class Handler : IRequestHandler<Query, Post>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Post> Handle(Query request, CancellationToken cancellationToken)
            {
                var result = _context.Posts.FindAsync(request.id);
                return await result;
            }
        }
    }
}