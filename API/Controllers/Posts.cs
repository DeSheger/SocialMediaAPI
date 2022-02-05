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
        public async Task<ActionResult<Post>> CreatePost(Post post)
        {
            await _mediator.Send(new Create.Query{post = post});

            return Ok();
        }
    }
}