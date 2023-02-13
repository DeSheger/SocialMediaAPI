using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Notifications;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class Notifications : BaseApiController
    {
        private readonly IMediator _mediator;
        public Notifications(IMediator mediator)
        {
            _mediator = mediator;

        }

        [HttpGet]
        public async Task<ActionResult<List<Notification>>> GetNotifications()
        {
            var result = _mediator.Send(new List.Query());

            return await result;
        }


        [HttpPost]
        public async Task<IActionResult> CreatePost(Notification notification)
        {
            await _mediator.Send(new Create.Command{notification = notification});

            return Ok();
        }
    }
}