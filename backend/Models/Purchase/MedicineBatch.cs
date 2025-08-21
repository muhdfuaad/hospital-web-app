using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

namespace HmsApi.Models.Purchase
{
    public class MedicineBatch
    {

        [Key]
        public int Id { get; set; }

        // Foreign key to Medicine
        [Required]
        public int MedicineId { get; set; }

        [ForeignKey("MedicineId")]
        public Medicine Medicine { get; set; }
        [Required]
        public string BatchNo { get; set; }

        [Required]
        public DateTime ExpiryDate { get; set; }

        // Quantity & Stock
        [Required]
        public int Qty { get; set; }

        public int PackItem { get; set; } // Total tablets in a strip

        public int FreeQty { get; set; } = 0;
        public int TotalQty { get; set; }      // = Qty * PackItem (calculated in frontend)
        public int TotalFreeQty { get; set; }  // = FreeQty * PackItem
        public int CurrentStock { get; set; }  // = TotalQty + TotalFreeQty

        [Required]
        public decimal PurchaseRate { get; set; }

        [Required]
        public decimal SalesRate { get; set; }

        public decimal MRP { get; set; } = 0;
        public decimal? StripMrp { get; set; }
        public decimal? StripRate { get; set; }

        // Tax Info
        [Required]
        public decimal GST { get; set; }
        public string HSNCode { get; set; }
        public decimal DiscountPercent { get; set; } = 0;

        public decimal DiscountAmount { get; set; } = 0;

        // Purchase Info (back-reference)
        public int PurchaseItemId { get; set; }

        [ForeignKey(nameof(PurchaseItemId))]  // ✅ This is the key fix
        public PurchaseItem PurchaseItem { get; set; }

        // Flags
        public bool IsActive { get; set; } = true; // For batch recall/discontinuation

        public bool IsExpired => ExpiryDate < DateTime.Today;
    }

    public class MedicineBatchDto
    {
        public int? Id { get; set; }  // Optional for create, required for update

        public int MedicineId { get; set; }

        public string BatchNo { get; set; }

        public DateTime ExpiryDate { get; set; }

        public int Qty { get; set; }
        public int PackItem { get; set; } 
        public int FreeQty { get; set; } = 0;

        public int TotalQty { get; set; }
        public int TotalFreeQty { get; set; }
        public int CurrentStock { get; set; }

        public decimal PurchaseRate { get; set; }

        public decimal SalesRate { get; set; }

        public decimal MRP { get; set; } = 0;
        public decimal? StripMrp { get; set; }
        public decimal? StripRate { get; set; }

        public decimal GST { get; set; }

        public string? HSNCode { get; set; }

        public decimal DiscountPercent { get; set; } = 0;

        public decimal DiscountAmount { get; set; } = 0;

        public int PurchaseItemId { get; set; }

        public bool IsActive { get; set; } = true;
    }
}
