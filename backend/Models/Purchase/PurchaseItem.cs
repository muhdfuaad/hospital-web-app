using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using HmsApi.Models.Purchase;

namespace HmsApi.Models
{
    public class PurchaseItem
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int PurchaseId { get; set; } // FK to PurchaseBill

        [Required]
        public int MedicineId { get; set; } // FK to Medicines

        [MaxLength(20)]
        public string BatchNo { get; set; }

        [MaxLength(10)]
        public string ExpiryDate { get; set; }
        public int PackItem { get; set; }
        public int Qty { get; set; }
        public int FreeQty { get; set; }

        public decimal PurchaseRate { get; set; }
        public decimal SalesRate { get; set; }
        public decimal Gst { get; set; }

        [MaxLength(10)]
        public string HsnCode { get; set; }

        public decimal BaseAmount { get; set; }
        public decimal GstAmount { get; set; }
        public decimal CgstAmount { get; set; }
        public decimal SgstAmount { get; set; }
        public decimal IgstAmount { get; set; }

        public decimal? Mrp { get; set; }
        public decimal? StripMrp { get; set; }
        public decimal? StripRate { get; set; }
        public decimal? DiscountPercent { get; set; }
        public decimal? DiscountAmount { get; set; }
        public decimal TotalAmount { get; set; }
        public bool IsDeleted { get; set; } = false;
        public string? DeletedBy { get; set; } = "System"; // Default to "System" for now

        public DateTime? DeletedAt { get; set; }



        // Navigation
        [ForeignKey("PurchaseId")]
        [JsonIgnore]
        public PurchaseBill? PurchaseBill { get; set; }

        [ForeignKey("MedicineId")]
        [JsonIgnore]
        public Medicine? Medicine { get; set; }
    }

    public class PurchaseItemDto
    {
        public int? Id { get; set; }  // null for new, set for update
        public int PurchaseId { get; set; }
        public int MedicineId { get; set; }

        public string? BatchNo { get; set; }
        public string? ExpiryDate { get; set; }
        public int PackItem { get; set; }
        public int Qty { get; set; }
        public int FreeQty { get; set; }

        public decimal PurchaseRate { get; set; }
        public decimal SalesRate { get; set; }
        public decimal Gst { get; set; }
        public string? HsnCode { get; set; }

        public decimal BaseAmount { get; set; }
        public decimal GstAmount { get; set; }
        public decimal CgstAmount { get; set; }
        public decimal SgstAmount { get; set; }
        public decimal IgstAmount { get; set; }

        public decimal? Mrp { get; set; }
        public decimal? StripMrp { get; set; }
        public decimal? StripRate { get; set; }
        public decimal? DiscountPercent { get; set; }
        public decimal? DiscountAmount { get; set; }
        public decimal TotalAmount { get; set; }
    }

}
