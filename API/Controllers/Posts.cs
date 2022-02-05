using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class Posts : BaseApiController
    {
        private readonly DataContext _context;
        public Posts(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Post>>> GetPosts()
        {
            var result = _context.Posts.ToListAsync();

            return await result;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Post>> GetPost(Guid id)
        {
            var result = _context.Posts.FindAsync(id);

            return await result;
        }

        [HttpPost]
        public async Task<ActionResult<Post>> SendPost()
        {
            
        }
    }
}