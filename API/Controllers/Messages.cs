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

        [HttpGet("{userId}")]
        public async Task<ActionResult<List<Message>>> GetMessages(String userId)
        {
            var payload = new Message{AuthorId=userId};
            var result = _mediator.Send(new List.Query{message = payload});

            return await result;
        }


        [HttpPost]
        public async Task<IActionResult> CreatePost(Message message)
        {
            if(message.UserMessage == string.Empty)
            {
                return NoContent();
            }
            await _mediator.Send(new Create.Command{message = message});

            return Ok();
        }
    }
}