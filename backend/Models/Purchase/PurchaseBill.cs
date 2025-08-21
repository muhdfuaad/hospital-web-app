using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace HmsApi.Models.Purchase
{
    public class PurchaseBill
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int PurchaseId { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public int SupplierId { get; set; } // Foreign key to Supplier table

        [Required]
        [JsonPropertyName("invoiceNo")]
        public string InvoiceNo { get; set; }

        public DateTime InvoiceDate { get; set; }
        public short? PaymentType { get; set; }

        public decimal? GrossTotal { get; set; }
        public decimal? GstTotal { get; set; }
        public decimal? Discount { get; set; }
        public decimal? Cgst { get; set; }
        public decimal? Sgst { get; set; }
        public decimal? Igst { get; set; }
        public decimal? CessAmount { get; set; }
        public decimal? RoundOff { get; set; }
        public decimal? FinalTotal { get; set; }
        public short? TaxType { get; set; } //0-Credit  1-Cash   2-Others

        public bool IsCancelled { get; set; } = false;

        // Navigation
        public ICollection<PurchaseItem> Items { get; set; }
    }

    public class PurchaseBillDto
    {
        public int? PurchaseId { get; set; }  // Optional for creation, required for update

        public DateTime Date { get; set; }

        public int SupplierId { get; set; }

        public string InvoiceNo { get; set; }

        public DateTime InvoiceDate { get; set; }

        public short? PaymentType { get; set; }

        public decimal? GrossTotal { get; set; }

        public decimal? GstTotal { get; set; }

        public decimal? Discount { get; set; }

        public decimal? Cgst { get; set; }

        public decimal? Sgst { get; set; }

        public decimal? Igst { get; set; }

        public decimal? CessAmount { get; set; }

        public decimal? RoundOff { get; set; }

        public decimal? FinalTotal { get; set; }

        public short? TaxType { get; set; }

        public bool IsCancelled { get; set; } = false;

        // Use this for table display
        public string SupplierName { get; set; }

        public List<PurchaseItemDto> Items { get; set; } = new();
    }

    public class CreatePurchaseBillDto
    {
        public int PurchaseId {  get; set; }
        public DateTime Date { get; set; }
        public int SupplierId { get; set; }
        public string InvoiceNo { get; set; }
        public DateTime InvoiceDate { get; set; }
        public short? PaymentType { get; set; }
        public decimal? GrossTotal { get; set; }
        public decimal? GstTotal { get; set; }
        public decimal? Discount { get; set; }
        public decimal? Cgst { get; set; }
        public decimal? Sgst { get; set; }
        public decimal? Igst { get; set; }
        public decimal? CessAmount { get; set; }
        public decimal? RoundOff { get; set; }
        public decimal? FinalTotal { get; set; }
        public short? TaxType { get; set; }

        public bool IsCancelled { get; set; } = false;
        // 🔑 Add this so POST can handle items too
        public List<PurchaseItemDto> Items { get; set; } = new();
    }

    public class UpdatePurchaseBillDto : CreatePurchaseBillDto
    {
        public int PurchaseId { get; set; }

        // Add this property:
        public List<PurchaseItemDto> Items { get; set; } = new();
    }

}
