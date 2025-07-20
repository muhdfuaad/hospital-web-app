using System.ComponentModel.DataAnnotations;

namespace testapi.Models
{
    public class Doctor
    {
        [Key]
        public int Id { get; set; }
        public string Doc_Id { get; set; }
        public string District { get; set; }
        public string Panchayath { get; set; }
        public string Ward_no { get; set; }
        public string DocName { get; set; }
        public string Address { get; set; }
        public string Gender { get; set; }
        public string Dob { get; set; }
        public string Age { get; set; }
        public string BloodGroup { get; set; } = "";
        [Required]
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

    public class DoctorDto
    {
        public string Doc_Id { get; set; }
        public string District { get; set; }
        public string Panchayath { get; set; }
        public string Ward_no { get; set; }
        public string DocName { get; set; }
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
