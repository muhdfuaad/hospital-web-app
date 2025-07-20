using System.ComponentModel.DataAnnotations;

namespace testapi.Models
{
    public class Volunteer
    {
        [Key]
        public int Id { get; set; }
        public int Vol_Id { get; set; }
        public string VolName { get; set; }
        public string Gender { get; set; }
        public string Dob { get; set; }
        public string Age { get; set; }
        public string? BloodGroup { get; set; } = "";
        public string? Address { get; set; } = "";
        public string District { get; set; }
        public string Panchayath { get; set; }
        public string Ward_no { get; set; }

        public string Phone { get; set; }
        public string? Email { get; set; } = "";
        public string Type { get; set; }
        public string Job { get; set; }
        public string Status { get; set; }
        public string? Photo { get; set; } = "";

        public string Description { get; set; }

    }
    public class VolunteerDto
    {
        public int Vol_Id { get; set; }
        public string VolName { get; set; }
        public string Gender { get; set; }
        public string Dob { get; set; }
        public string Age { get; set; }            // Changed from int to string to match model
        public string BloodGroup { get; set; }
        public string Address { get; set; }
        public string District { get; set; }
        public string Panchayath { get; set; }
        public string Ward_no { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Type { get; set; }
        public string Job { get; set; }
        public string Status { get; set; }
        public string Description { get; set; }
        public IFormFile? Photo { get; set; } = null;
    }
}

