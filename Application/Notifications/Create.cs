using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Notifications
{
    public class Create
    {
        public class Command : IRequest<Notification> { public Notification notification { get; set; } }

        public class Handler : IRequestHandler<Command, Notification>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Notification> Handle(Command request, CancellationToken cancellationToken)
            {
                Notification result = new Notification
                {
                    Date = DateTime.Now,
                    Author = request.notification.Author,
                    AuthorId = request.notification.AuthorId,
                    Description = request.notification.Description,
                };

                _context.Notifications.Add(result);
                await _context.SaveChangesAsync();

                return result;
            }
        }
    }
}