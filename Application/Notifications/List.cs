using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Notifications
{
    public class List
    {
        public class Query : IRequest<List<Notification>>
        {

        }

        public class Handler : IRequestHandler<Query, List<Notification>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Notification>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Notifications.ToListAsync();
            }
        }
    }
}