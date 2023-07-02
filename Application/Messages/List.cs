using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Messages
{
    public class List
    {
        public class Query : IRequest<List<Message>>
        {
            public Message message { get; set; }
        }

        public class Handler : IRequestHandler<Query, List<Message>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Message>> Handle(Query request, CancellationToken cancellationToken)
            {
                var messages = await _context.Messages.ToListAsync();
                var finalMesseges = new List<Message>();

                foreach(var m in messages)
                {
                    if(request.message.AuthorId == m.AuthorId || request.message.AuthorId == m.AddresseeId)
                    {
                        finalMesseges.Add(m);
                    }
                }


                return finalMesseges;
            }
        }
    }
}