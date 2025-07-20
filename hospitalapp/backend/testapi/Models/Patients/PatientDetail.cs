using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace testapi.Models.Location
{
    public class PatientDetail
    {
        [Key]
        public int Id { get; set; }

        // Simple form fields
        public string PatientId { get; set; } = string.Empty;

        public string? PainIntensity { get; set; }
        public string? EconomicSituation { get; set; }
        public string? TreatmentDetails { get; set; }
        public string? SpiritualFaith { get; set; }
        public string? MentalSupport { get; set; }
        public string? Expectations { get; set; }
        public string? BasicNeeds { get; set; }
        public string? FacilitiesStatus { get; set; }
        public string? RelationshipStatus { get; set; }
        public string? PatientKnowledge { get; set; }
        public string? PatientConcerns { get; set; }
        public string? FamilyKnowledge { get; set; }
        public string? PrioritizedIssues { get; set; }
        public string? Summary { get; set; }
        public string? Plan { get; set; }

        // Navigation Properties
        public string? Treatments { get; set; }  // JSON string
        public string? Assistances { get; set; } // JSON string

        public List<Clinic>? Clinics { get; set; }
        public List<Difficulty>? Difficulties { get; set; }
        public List<FamilyMember>? FamilyMembers { get; set; }
    }

    public class Treatments
    {
        public bool Ayurveda { get; set; }
        public bool Homeo { get; set; }
        public bool Naturopathy { get; set; }
        public bool GreenMedicines { get; set; }
        public bool SidhaMedicines { get; set; }
        public bool Others { get; set; }
    }

    public class Assistances
    {
        public bool MedicineSupport { get; set; }
        public bool EducationalAssistance { get; set; }
        public bool FoodSupport { get; set; }
        public bool Rsby { get; set; }
        public bool Kaarunya { get; set; }
        public bool Others { get; set; }
    }
    public class ClinicMaster
    {
        [Key] // ✅ Explicitly define the primary key
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] // Optional: Auto increment
        public int Id { get; set; }

        [Required] // ✅ Make sure the name is required at DB level
        public string ClinicName { get; set; } = string.Empty;
    }



    public class Clinic
    {
        [Key]
        public int Id { get; set; }
        public string ClinicName { get; set; } = "";
        public string RegisterNo { get; set; } = "";
        public string Remarks { get; set; } = "";

        // Foreign Key
        public int PatientDetailId { get; set; }

        // Navigation Property
        [ForeignKey("PatientDetailId")]
        public PatientDetail? PatientDetail { get; set; }
    }

    
    public class Difficulty
    {
        [Key]
        public int Id { get; set; }
        public string DifficultyName { get; set; } = "";
        public string Impact { get; set; } = "";
        public string Remarks { get; set; } = "";

        // Foreign Key
        public int PatientDetailId { get; set; }

        // Navigation Property
        [ForeignKey("PatientDetailId")]
        public PatientDetail? PatientDetail { get; set; }
    }

    
    public class FamilyMember
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = "";
        public string Age { get; set; } = "";
        public string Relation { get; set; } = "";
        public string Education { get; set; } = "";
        public string Income { get; set; } = "";
        public string MaritalStatus { get; set; } = "";
        public bool LongTermPatient { get; set; }
        public string? LongTermDetails { get; set; } = "";

        // Foreign Key
        public int PatientDetailId { get; set; }

        // Navigation Property
        [ForeignKey("PatientDetailId")]
        public PatientDetail? PatientDetail { get; set; }
    }

    public class PatientDetailDto
    {
        public string PatientId { get; set; } = string.Empty;

        public string? PainIntensity { get; set; } = "";
        public string? EconomicSituation { get; set; } = "";
        public List<string>? Treatments { get; set; }
        public string? TreatmentDetails { get; set; } = "";
        public List<string>? Assistances { get; set; }
        public string? SpiritualFaith { get; set; } = "";
        public string? MentalSupport { get; set; } = "";
        public string? Expectations { get; set; } = "";
        public string? BasicNeeds { get; set; } = "";
        public string? FacilitiesStatus { get; set; } = "";
        public string? RelationshipStatus { get; set; } = "";
        public string? PatientKnowledge { get; set; } = "";
        public string? PatientConcerns { get; set; } = "";
        public string? FamilyKnowledge { get; set; } = "";
        public string? PrioritizedIssues { get; set; } = "";
        public string? Summary { get; set; } = "";
        public string? Plan { get; set; } = "";

        public List<ClinicDto>? Clinics { get; set; }
        public List<DifficultyDto>? Difficulties { get; set; }
        public List<FamilyMemberDto>? FamilyMembers { get; set; }
    }

    public class TreatmentsDto
    {
        public bool Ayurveda { get; set; }
        public bool Homeo { get; set; }
        public bool Naturopathy { get; set; }
        public bool GreenMedicines { get; set; }
        public bool SidhaMedicines { get; set; }
        public bool Others { get; set; }
    }

    public class AssistancesDto
    {
        public bool MedicineSupport { get; set; }
        public bool EducationalAssistance { get; set; }
        public bool FoodSupport { get; set; }
        public bool Rsby { get; set; }
        public bool Kaarunya { get; set; }
        public bool Others { get; set; }
    }

    public class ClinicDto
    {
        public string ClinicName { get; set; } = "";
        public string RegisterNo { get; set; } = "";
        public string Remarks { get; set; } = "";
    }

    public class DifficultyDto
    {
        public string DifficultyName { get; set; } = "";
        public string Impact { get; set; } = "";
        public string Remarks { get; set; } = "";
    }

    public class FamilyMemberDto
    {
        public string Name { get; set; } = "";
        public string Age { get; set; } = "";
        public string Relation { get; set; } = "";
        public string Education { get; set; } = "";
        public string Income { get; set; } = "";
        public string MaritalStatus { get; set; } = "";
        public bool LongTermPatient { get; set; }
        public string? LongTermDetails { get; set; } = "";
    }
}