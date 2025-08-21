using System.ComponentModel.DataAnnotations;

namespace HmsApi.Models.Common
{
    public class BillSequence
    {
        [Key]
        [MaxLength(50)]
        public string SequenceName { get; set; } = default!;
        public int CurrentNumber { get; set; }
    }
}