using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace HmsApi.Models.Sales
{
    public class SalesBill
    {
        [Key]
        public int SalesId { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public int CustomerId { get; set; } // FK to Customer table

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
        public decimal? RoundOff { get; set; }
        public decimal? FinalTotal { get; set; }
        public short? TaxType { get; set; }
        public bool IsCancelled { get; set; } = false;
        public bool IsFinalized { get; set; } = false; // Added for frontend

        // Navigation
        public ICollection<SalesItem> Items { get; set; }
    }

    public class SalesBillDto
    {
        public int SalesId { get; set; }
        public string InvoiceNo { get; set; }  // Add this to display the BillNo
        public DateTime Date { get; set; }
        public int CustomerId { get; set; }
        public DateTime InvoiceDate { get; set; }
        public short? PaymentType { get; set; }
        public decimal? GrossTotal { get; set; }
        public decimal? GstTotal { get; set; }
        public decimal? Discount { get; set; }
        public decimal? Cgst { get; set; }
        public decimal? Sgst { get; set; }
        public decimal? Igst { get; set; }
        public decimal? RoundOff { get; set; }
        public decimal? FinalTotal { get; set; }
        public short? TaxType { get; set; }
        public bool IsCancelled { get; set; }
        public bool IsFinalized { get; set; }
        public string CustomerName { get; set; }
        public List<SalesItemDto> Items { get; set; } = new();
    }

    public class CreateSalesBillDto
    {
        public DateTime Date { get; set; }
        public int CustomerId { get; set; }
        public string InvoiceNo { get; set; }
        public DateTime InvoiceDate { get; set; }
        public short? PaymentType { get; set; }
        public decimal? GrossTotal { get; set; }
        public decimal? GstTotal { get; set; }
        public decimal? Discount { get; set; }
        public decimal? Cgst { get; set; }
        public decimal? Sgst { get; set; }
        public decimal? Igst { get; set; }
        public decimal? RoundOff { get; set; }
        public decimal? FinalTotal { get; set; }
        public short? TaxType { get; set; }
        public bool IsCancelled { get; set; } = false;
        public bool IsFinalized { get; set; } = false;
    }

    public class UpdateSalesBillDto : CreateSalesBillDto
    {
        public int SalesId { get; set; }
        public List<SalesItemDto> Items { get; set; } = new();
    }
}