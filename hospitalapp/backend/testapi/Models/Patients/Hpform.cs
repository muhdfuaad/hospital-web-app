using System.ComponentModel.DataAnnotations;

namespace testapi.Models.Patients
{
    public class Hpform
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int PatientId { get; set; }

        public string? District { get; set; }
        public string? Panchayath { get; set; }
        public string? Ward { get; set; }
        public string? Area { get; set; }
        public DateTime? Date { get; set; }
        public string? Diagnosis { get; set; }
        public string? Category { get; set; }
        public string? Status { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        public int Age { get; set; }

        public string? Gender { get; set; }
        public string? FinancialStatus { get; set; }
        public string? SpouseName { get; set; } = "";
        public string? FatherName { get; set; } = "";
        public string? MotherName { get; set; } = "";
        public string? AdhaarAddress { get; set; } = "";
        public string? CurrentAddress { get; set; } = "";

        [Required]
        public string PhoneNumber1 { get; set; } = string.Empty;

        public string? PhoneNumber2 { get; set; } = "";
        public string? AdhaarNumber { get; set; } = "";
        public string? ContactPerson { get; set; } = "";
        public string? Relation { get; set; } = "";
        public string? ContactPhone { get; set; } = "";

        public string? NeighbourResidence { get; set; } = "";
        public string? NeighbourPhone { get; set; } = "";
        public string? CommunityVolunteer { get; set; } = "";
        public string? CommunityVolunteerPhone { get; set; } = "";
        public string? WardMember { get; set; } = "";
        public string? WardMemberPhone { get; set; } = "";
        public string? AashaVolunteer { get; set; } = "";
        public string? AashaVolunteerPhone { get; set; } = "";
        public string? OtherPerson { get; set; } = "";
        public string? OtherPersonPhone { get; set; } = "";

        public string? HouseRoute { get; set; } = "";
        public string? Photograph { get; set; } = "";
        public string? AadharDoc { get; set; } = "";
    }

    public  class HpformsDto
    {
       
        public int PatientId { get; set; }
        public string? District { get; set; }
        public string? Panchayath { get; set; }
        public string? Ward { get; set; }
        public string? Area { get; set; } = "";
        public DateTime Date { get; set; }
        public string? Diagnosis { get; set; } = "";
        public string? Category { get; set; } = "";
        public string? Status { get; set; }

        public string Name { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }
        public string? FinancialStatus { get; set; }

        public string? SpouseName { get; set; } = "";
        public string? FatherName { get; set; } = "";
        public string? MotherName { get; set; } = "";
        public string? AdhaarAddress { get; set; } = "";
        public string? CurrentAddress { get; set; } = "";
        public string? PhoneNumber1 { get; set; }
        public string? PhoneNumber2 { get; set; } = "";
        public string? AdhaarNumber { get; set; } = "";
        public string? ContactPerson { get; set; } = "";
        public string? Relation { get; set; } = "";
        public string? ContactPhone { get; set; } = "";

        public string? NeighbourResidence { get; set; } = "";
        public string? NeighbourPhone { get; set; } = "";
        public string? CommunityVolunteer { get; set; } = "";
        public string? CommunityVolunteerPhone { get; set; } = "";
        public string? WardMember { get; set; } = "";
        public string? WardMemberPhone { get; set; } = "";
        public string? AashaVolunteer { get; set; } = "";
        public string? AashaVolunteerPhone { get; set; } = "";
        public string? OtherPerson { get; set; } = "";
        public string? OtherPersonPhone { get; set; } = "";

        public string? HouseRoute { get; set; } = "";

        public IFormFile? Photograph { get; set; } = null;
        public IFormFile? AadharDoc { get; set; } = null;
    }
}
