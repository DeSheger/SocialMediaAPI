using Application.Messages;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class Messages : BaseApiController
    {
        private readonly IMediator _mediator;
        public Messages(IMediator mediator)
        {
            _mediator = mediator;

        }

        [HttpGet]
        public async Task<ActionResult<List<Message>>> GetNotifications(Message message)
        {
            var result = _mediator.Send(new List.Query{message = message});

            return await result;
        }


        [HttpPost]
        public async Task<IActionResult> CreatePost(Message message)
        {
            await _mediator.Send(new Create.Command{message = message});

            return Ok();
        }
    }
}