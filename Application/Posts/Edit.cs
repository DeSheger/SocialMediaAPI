using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Posts
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Post post { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var result = await _context.Posts.FindAsync(request.post.Id);

                result.Title = request.post.Title;
                result.Date = DateTime.Now;
                result.Image = request.post.Image;
                result.Description = request.post.Description;

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}