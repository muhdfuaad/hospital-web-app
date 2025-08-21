using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace HmsApi.Models.Sales
{
    public class SalesItem
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int SalesId { get; set; } // FK to SalesBill

        [Required]
        public int MedicineId { get; set; } // FK to Medicine

        // Frontend matching fields
        public string ItemCode { get; set; } // matches frontend itemCode
        public string ProductInfo { get; set; } // matches frontend productInfo (medicine name)
        public string Type { get; set; } // matches frontend type
        public int PackItem { get; set; } // matches frontend packItem

        [MaxLength(20)]
        public string BatchNo { get; set; } // matches frontend batchNo

        [MaxLength(10)]
        public string ExpiryDate { get; set; } // matches frontend expiryDate (MM-YYYY)

        public decimal Qty { get; set; } // matches frontend qty
        public int Free { get; set; } // matches frontend free
        public decimal DiscPercent { get; set; } = 0; // matches frontend discPercent
        public decimal PurchaseRate { get; set; } // matches frontend purchaseRate (read-only)
        public decimal Price { get; set; } // matches frontend price (S.Rate)
        public decimal MRP { get; set; } = 0; // matches frontend mrp
        public decimal GST { get; set; } // matches frontend gst
        public decimal Amount { get; set; } // matches frontend amount (calculated)

        [MaxLength(10)]
        public string HSNCode { get; set; } // matches frontend hsnCode

        // Additional backend fields
        public decimal BaseAmount { get; set; }
        public decimal GstAmount { get; set; }
        public decimal CgstAmount { get; set; }
        public decimal SgstAmount { get; set; }
        public decimal IgstAmount { get; set; }
        public decimal DiscountAmount { get; set; } = 0;
        public bool IsDeleted { get; set; } = false;
        public string? DeletedBy { get; set; } = "System";
        public DateTime? DeletedAt { get; set; }

        // Navigation
        [ForeignKey("SalesId")]
        [JsonIgnore]
        public SalesBill? SalesBill { get; set; }

        [ForeignKey("MedicineId")]
        [JsonIgnore]
        public Medicine? Medicine { get; set; }
    }
    public class SalesItemDto
    {
        public int? Id { get; set; } // null for new, set for update
        public int SalesId { get; set; }
        public int MedicineId { get; set; }

        // Frontend matching field names (EXACT MATCH)
        public string ItemCode { get; set; }
        public string ProductInfo { get; set; }
        public string Type { get; set; }
        public int PackItem { get; set; }
        public string BatchNo { get; set; }
        public string ExpiryDate { get; set; }
        public decimal Qty { get; set; }
        public int Free { get; set; }
        public decimal DiscPercent { get; set; } = 0;
        public decimal PurchaseRate { get; set; }
        public decimal Price { get; set; }
        public decimal MRP { get; set; } = 0;
        public decimal GST { get; set; }
        public decimal Amount { get; set; }
        public string HSNCode { get; set; }

        // Backend calculation fields
        public decimal BaseAmount { get; set; }
        public decimal GstAmount { get; set; }
        public decimal CgstAmount { get; set; }
        public decimal SgstAmount { get; set; }
        public decimal IgstAmount { get; set; }
        public decimal DiscountAmount { get; set; } = 0;
    }
}