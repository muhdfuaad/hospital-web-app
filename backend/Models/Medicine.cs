using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HmsApi.Models
{
    public class Medicine
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string ItemCode { get; set; }

        [Required]
        public string MedicineName { get; set; }

        // Foreign key for Company
        [Required]
        public int CompanyId { get; set; }

        [ForeignKey("CompanyId")]
        public MedicineCompany Company { get; set; }
        public string GenericName { get; set; }
        public decimal? GST { get; set; }
        public string BillCode { get; set; }
        public string ItemShort { get; set; }

        [StringLength(50)]
        public string Rack { get; set; }
        public string Shelf { get; set; }

        // Foreign key for Type
        [Required]
        public int TypeId { get; set; }

        [ForeignKey("TypeId")]
        public MedicineType Type { get; set; }
        public string Ingredients { get; set; }
        [StringLength(10)]
        public decimal? Cess{ get; set; }
        public decimal? Discount { get; set; }
        public string ROL { get; set; }
        public int PackItem { get; set; }
        public string HSNCode { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal? PurchaseRate { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal? SalesRate { get; set; }

        public DateTime? LastBill { get; set; }

        public DateTime? LastPurchase { get; set; }

        public int Quantity { get; set; } = 0;
    }

    // Company table
    public class MedicineCompany
    {
        [Key]
        public int CompanyId { get; set; }

        [Required]
        [StringLength(200)]
        public string CompanyName { get; set; }

        // Navigation property
        public virtual ICollection<Medicine> Medicines { get; set; } = new List<Medicine>();
    }

    // Medicine Type table
    public class MedicineType
    {
        [Key]
        public int TypeId { get; set; }

        [Required]
        [StringLength(100)]
        public string TypeName { get; set; }

        // Navigation property
        public virtual ICollection<Medicine> Medicines { get; set; } = new List<Medicine>();
    }

    // DTOs for API responses
    public class MedicineDto
    {
        public int Id { get; set; }
        public string ItemCode { get; set; }
        public string MedicineName { get; set; }

        // ✅ Add these two lines
        public int CompanyId { get; set; }
        public int TypeId { get; set; }

        public string Company { get; set; }
        public string GenericName { get; set; }
        public decimal? GST { get; set; }
        public string BillCode { get; set; }
        public string ItemShort { get; set; }
        public string Rack { get; set; }
        public string Shelf { get; set; }
        public string Type { get; set; }
        public string Ingredients { get; set; }
        public decimal? Cess{ get; set; }
        public decimal? Discount { get; set; }
        public string ROL { get; set; }
        public int PackItem { get; set; }
        public string HSNCode { get; set; }
        public string PurchaseRate { get; set; }
        public string SalesRate { get; set; }
        public string LastBill { get; set; }
        public string LastPurchase { get; set; }
        public string Quantity { get; set; }
    }


    public class CreateMedicineDto
    {
        [Required]
        public string ItemCode { get; set; }

        [Required]
        public string MedicineName { get; set; }

        [Required]
        // ✅ Add these two lines
        public int CompanyId { get; set; }
        public int TypeId { get; set; }

        public string GenericName { get; set; }
        public decimal? GST { get; set; }
        public string BillCode { get; set; }
        public string ItemShort { get; set; }
        public string Rack { get; set; }
        public string Shelf { get; set; }

        public string Ingredients { get; set; }
        public decimal? Cess{ get; set; }
        public decimal? Discount { get; set; }
        public string ROL { get; set; }
        public int PackItem { get; set; }
        public string HSNCode { get; set; }
        public decimal? PurchaseRate { get; set; }
        public decimal? SalesRate { get; set; }
        public DateTime? LastBill { get; set; }
        public DateTime? LastPurchase { get; set; }
        public int Quantity { get; set; }
    }

    public class UpdateMedicineDto
    {
        public string ItemCode { get; set; }

        [Required]
        public string MedicineName { get; set; }

        [Required]
        // ✅ Add these two lines
        public int CompanyId { get; set; }
        public int TypeId { get; set; }

        public string GenericName { get; set; }
        public decimal? GST { get; set; }
        public string BillCode { get; set; }
        public string ItemShort { get; set; }
        public string Rack { get; set; }
        public string Shelf { get; set; }

        public string Ingredients { get; set; }
        public decimal? Cess{ get; set; }
        public decimal? Discount { get; set; }
        public string ROL { get; set; }
        public int PackItem { get; set; }
        public string HSNCode { get; set; }
        public decimal? PurchaseRate { get; set; }
        public decimal? SalesRate { get; set; }
        public DateTime? LastBill { get; set; }
        public DateTime? LastPurchase { get; set; }
        public int Quantity { get; set; }
    }
}