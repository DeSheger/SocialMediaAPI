using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if(!context.Posts.Any())
            {
                var posts = new List<Post>
                {
                    new Post
                    {
                        Title = "Post 1",
                        Date = DateTime.Now,
                        Image = null,
                        Description = "Post 1 description here",
                    },
                    new Post
                    {
                        Title = "Post 2",
                        Date = DateTime.Now,
                        Image = null,
                        Description = "Post 2 description here",
                    },
                    new Post
                    {
                        Title = "Post 1",
                        Date = DateTime.Now,
                        Image = null,
                        Description = "Post 2 description here",
                    },
                };
                await context.Posts.AddRangeAsync(posts);
                await context.SaveChangesAsync();
            }
        }
    }
}