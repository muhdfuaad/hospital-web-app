using System.ComponentModel.DataAnnotations.Schema;

namespace testapi.Models
{
    [Table("Users")]
    public class User
    {
        public int Id { get; set; }  // Primary key
        public string Name { get; set; } = "";
        public string Address { get; set; } = "";
        public string Email { get; set; } = "";
        public string Mobile { get; set; } = "";
        public string PhotoPath { get; set; } = ""; // relative or full path
    }
    public class UserDto
    {
        public string Name { get; set; } = "";
        public string Address { get; set; } = "";
        public string Email { get; set; } = "";
        public string Mobile { get; set; } = "";
        public IFormFile Photo { get; set; } 
    }
}
