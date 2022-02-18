using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if(!userManager.Users.Any()) 
            {
                var users = new List<AppUser>
                {
                    new AppUser
                    {
                        DisplayName = "Piotr",
                        UserName = "piotr",
                        Email = "piotr@test.com"
                    }
                };

                foreach(var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
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