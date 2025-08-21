using System.ComponentModel.DataAnnotations;

namespace HmsApi.Models
{
    public class VolunteersNote
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string PatientId { get; set; }

        [Required]
        public string ReviewId { get; set; }

        [Required]
        public DateTime Date { get; set; }
        [Required]
        public string volActivitiesDesc { get; set; }
    }
}
