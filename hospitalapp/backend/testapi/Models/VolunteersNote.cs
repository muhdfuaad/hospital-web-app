using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json;

namespace testapi.Models
{// 🟩 VolunteerNote: Stores individual submitted notes
    public class VolunteersNote
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string PatientId { get; set; }

        [Required]
        public string ReviewId { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime Date { get; set; }

        public string? CellsJson { get; set; }
        public string? DescriptionsJson { get; set; }

        // Helper properties (not mapped to DB) to work with JSON more easily in code
        [NotMapped]
        public Dictionary<string, bool> Cells
        {
            get => string.IsNullOrEmpty(CellsJson)
                ? new Dictionary<string, bool>()
                : JsonSerializer.Deserialize<Dictionary<string, bool>>(CellsJson);
            set => CellsJson = JsonSerializer.Serialize(value);
        }

        [NotMapped]
        public Dictionary<string, string> Descriptions
        {
            get => string.IsNullOrEmpty(DescriptionsJson)
                ? new Dictionary<string, string>()
                : JsonSerializer.Deserialize<Dictionary<string, string>>(DescriptionsJson);
            set => DescriptionsJson = JsonSerializer.Serialize(value);
        }

    }

    // 🟦 VolunteerProcedure: Master table of all available procedures
    public class VolunteersProcedure
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
    }


}
