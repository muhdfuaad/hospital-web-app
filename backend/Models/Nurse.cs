using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace HmsApi.Models
{
    public class Nurse
    {
        [Key]
        public int Id { get; set; }
        public string Nurse_Id { get; set; }
        public string District { get; set; }
        public string Panchayath { get; set; }
        public string Ward_no { get; set; }
        public string NurseName { get; set; }
        public string Address { get; set; }
        public string Gender { get; set; }
        public string Dob { get; set; }
        public string Age { get; set; }
        public string BloodGroup { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Specialization { get; set; }
        public string Degree { get; set; }
        public string Experience { get; set; }
        public string LicenseNumber { get; set; }
        public string Department { get; set; }
        public string? Photo { get; set; } = "";
        public string Description { get; set; }
    }

    public class NurseDto
    {
        public string Nurse_Id { get; set; }
        public string District { get; set; }
        public string Panchayath { get; set; }
        public string Ward_no { get; set; }
        public string NurseName { get; set; }
        public string Address { get; set; }
        public string Gender { get; set; }
        public string Dob { get; set; }
        public string Age { get; set; }
        public string BloodGroup { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Specialization { get; set; }
        public string Degree { get; set; }
        public string Experience { get; set; }
        public string LicenseNumber { get; set; }
        public string Department { get; set; }
        public string Description { get; set; }
        public IFormFile? Photo { get; set; } = null;
    }
}
