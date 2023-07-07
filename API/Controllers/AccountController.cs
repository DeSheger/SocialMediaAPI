using System.Threading.Tasks;
using API.DTOs;
using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        public AccountController(UserManager<AppUser> userManager,
        SignInManager<AppUser> signInManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if (user == null)
            {
                return Unauthorized();
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (result.Succeeded)
            {
                return new UserDto
                {
                    Id = user.Id,
                    DisplayName = user.DisplayName,
                    Image = null,
                    Token = "This will be token",
                    Username = user.UserName,
                };
            }
            return Unauthorized();
        }

        [HttpPost("register")]
        public async Task<ActionResult> CreateUser(RegisterDto userDto)
        {

            foreach (var userFromList in _userManager.Users)
            {
                if(userFromList.Email == userDto.Email || userFromList.DisplayName == userDto.DisplayName 
                || userFromList.UserName == userDto.Username)
                {
                    return BadRequest("Same Email/Displayname/Username");
                } 
            }
            
            AppUser user = new AppUser
            {
                DisplayName = userDto.DisplayName,
                UserName = userDto.Username,
                Email = userDto.Email
            };

            await _userManager.CreateAsync(user, userDto.Password);

            return Ok();
        }

        [HttpGet("users")]
        public async Task<ActionResult<List<UserDto>>> UsersList()
        {
            var usersList = new List<UserDto>();
            foreach (var user in _userManager.Users)
            {
                usersList.Add(
                    new UserDto
                    {
                        Id = user.Id,
                        DisplayName = user.DisplayName,
                        Image = null,
                        Token = "This will be token",
                        Username = user.UserName,
                    }
                );
            }

            return usersList;
        }
    }
}