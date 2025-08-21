using System.ComponentModel.DataAnnotations;

namespace HmsApi.Models
{
    public class NursesNote
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string PatientId { get; set; }

        [Required]
        public string ReviewId { get; set; }

        [Required]
        public DateTime Date { get; set; }

        // Optional fields
        public string? Diagnosis { get; set; }
        public string? Situation { get; set; }

        public string? Consciousness { get; set; }  // "normal" | "different"
        public string? ConsciousnesGenderPlain { get; set; }

        public string? Assistance { get; set; } // "yes" | "no"
        public string? AssistanceDetails { get; set; }

        public string? PhysicalDifficulties { get; set; }

        public string? Food { get; set; }  // "normal" | "different"
        public string? FoodDetails { get; set; }

        public string? Sleep { get; set; }  // "normal" | "different"
        public string? SleepDetails { get; set; }

        public string? BowelMovements { get; set; }  // "normal" | "different"
        public string? BowelDetails { get; set; }

        public string? Urination { get; set; }  // "normal" | "different"
        public string? UrinationDetails { get; set; }

        public string? EmotionalFactors { get; set; }

        public string? BP { get; set; }
        public string? Pulse { get; set; }
        public string? Temperature { get; set; }
        public string? Height { get; set; }
        public string? Weight { get; set; }

        public string? GeneralHygiene { get; set; }  // "normal" | "different"
        public string? GeneralHygieneDesc { get; set; }

        public string? PersonalHygiene { get; set; }  // "normal" | "different"
        public string? PersonalHygieneDesc { get; set; }

        public string? OralHygiene { get; set; }  // "normal" | "different"
        public string? OralHygieneDesc { get; set; }

        public string? SkinHygiene { get; set; }  // "normal" | "different"
        public string? SkinHygieneDesc { get; set; }

        public string? PerinealHygiene { get; set; }  // "normal" | "different"
        public string? PerinealHygieneDesc { get; set; }

        public string? OtherHygiene { get; set; }  // "normal" | "different"
        public string? OtherHygieneDesc { get; set; }

        public string? SpecialConditions { get; set; }
        public string? OtherTreatments { get; set; }
        public string? Medications { get; set; }
        public string? PlanSuggestions { get; set; }
        public string? RehabilitationDetails { get; set; }
    }
}
