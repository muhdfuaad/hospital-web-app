using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;


namespace HmsApi.Models.Doctors
{
    public class DoctorsNote
    {
        [Key]
        public int Id { get; set; }  // Primary Key

        [Required]
        public string PatientId { get; set; } = string.Empty;

        [Required]
        public string ReviewId { get; set; } = string.Empty;  // Foreign key to assignment/review table
        
        [Required] 
        public DateTime Date { get; set; }
        public string HistoryOfIllness { get; set; } = string.Empty;
        public List<Symptom> Symptoms { get; set; } = new List<Symptom>();// ✅ Navigation property for symptoms
        public string PresentMedications { get; set; } = string.Empty;
        public string AssociatedIllness { get; set; } = string.Empty;
        public string Pulse { get; set; } = string.Empty;
        public string BP { get; set; } = string.Empty;
        public string Height { get; set; } = string.Empty;
        public string Weight { get; set; } = string.Empty;
        public string GeneralExamination { get; set; } = string.Empty;
        public string SystematicExamination { get; set; } = string.Empty;
        public string AdditionalNotes { get; set; } = string.Empty;
    }

    public class Symptom
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        public string PQRSTDescription { get; set; } = string.Empty;

        // Foreign key reference to DoctorsNote
        [ForeignKey("DoctorsNote")]
        public int? DoctorsNoteId { get; set; }

        [JsonIgnore]
        [ValidateNever]
        public DoctorsNote DoctorsNote { get; set; }
    }
}
