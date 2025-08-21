using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

namespace HmsApi.Models.Doctors

{
    public class DoctorsReview
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string PatientId { get; set; }

        [Required]
        public string ReviewId { get; set; }

        public DateTime Date { get; set; }

        // Navigation Properties
        public List<Investigation> Investigations { get; set; } = new List<Investigation>();
        public List<Medication> Medications { get; set; } = new List<Medication>();
    }

    public class Investigation
    {
        [Key]
        public int Id { get; set; }

        public string InvestigationName { get; set; }
        public string Findings { get; set; }

        // Foreign Key
        public int DoctorsReviewId { get; set; }

        [JsonIgnore]
        [ValidateNever] 
        public DoctorsReview DoctorsReview { get; set; }
    }

    public class Medication
    {
        [Key]
        public int Id { get; set; }

        public string Medicine { get; set; }
        public string Prescription { get; set; }
        public string Remarks { get; set; }

        // Foreign Key
        public int DoctorsReviewId { get; set; }
        
        [JsonIgnore]
        [ValidateNever]
        public DoctorsReview DoctorsReview { get; set; }
    }
}