using Domain;
using MediatR;
using Persistence;

namespace Application.Messages
{
   public class Create
    {
        public class Command : IRequest<Message> { public Message message { get; set; } }

        public class Handler : IRequestHandler<Command, Message>
        {
            private readonly DataContext _context;
            
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Message> Handle(Command request, CancellationToken cancellationToken)
            {
                Message result = new Message
                {
                    AuthorId = request.message.AuthorId,
                    AddresseeId = request.message.AddresseeId,
                    AuthorDisplayName = request.message.AuthorDisplayName,
                    UserMessage = request.message.UserMessage,
                    Date = DateTime.Now,
                };

                _context.Messages.Add(result);
                await _context.SaveChangesAsync();

                return result;
            }
        }
    }
}