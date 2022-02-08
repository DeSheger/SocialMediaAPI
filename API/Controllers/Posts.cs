using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Posts;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class Posts : BaseApiController
    {
        private readonly IMediator _mediator;
        public Posts(IMediator mediator)
        {
            _mediator = mediator;

        }

        [HttpGet]
        public async Task<ActionResult<List<Post>>> GetPosts()
        {
            var result = _mediator.Send(new List.Query());

            return await result;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Post>> GetPost(Guid id)
        {
            var result = _mediator.Send(new Detail.Query{id=id});

            return await result;
        }

        [HttpPost]
        public async Task<IActionResult> CreatePost(Post post)
        {
            await _mediator.Send(new Create.Command{post = post});

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult<Post>> EditPost(Post post)
        {
            return Ok(await _mediator.Send(new Edit.Command{post = post}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePost(Guid id)
        {
            return Ok(await _mediator.Send(new Delete.Command{Id = id}));
        }
    }
}