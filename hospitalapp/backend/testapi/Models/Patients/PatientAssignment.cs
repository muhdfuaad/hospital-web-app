using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace testapi.Models.Patients
{
    public class PatientAssignment
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string AssignmentId { get; set; } = string.Empty;

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public string Time { get; set; } = string.Empty;

        [Required]
        public string PatientId { get; set; } = string.Empty;

        [Required]
        public string DoctorId { get; set; } = string.Empty;

        [Required]
        public string VolunteerId { get; set; } = string.Empty;

        [Required]
        public string NurseId { get; set; } = string.Empty;

        public string? Description { get; set; } = string.Empty;
    }

    public class PatientAssignmentDto
    {
        public string AssignmentId { get; set; } = string.Empty;

        public DateTime Date { get; set; }

        public string Time { get; set; } = string.Empty;

        public string PatientId { get; set; } = string.Empty;

        public string DoctorId { get; set; } = string.Empty;

        public string VolunteerId { get; set; } = string.Empty;

        public string NurseId { get; set; } = string.Empty;

        public string? Description { get; set; } = string.Empty;
    }
}
