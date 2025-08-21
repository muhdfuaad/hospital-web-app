using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

namespace HmsApi.Models
{
    public class Supplier
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string AccNo { get; set; } = string.Empty;

        [Required]
        public string Name { get; set; } = string.Empty;

        // Foreign key and navigation property
        public int SupplierTypeId { get; set; }
        [JsonIgnore] // Prevent Swagger from serializing circular references
        public SupplierType SupplierType { get; set; }
        public string Address { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;

        public string? Post { get; set; }
        public string Pin { get; set; } = string.Empty;
        [Phone]
        public string Phone { get; set; } = string.Empty;

        public string? Whatsapp { get; set; }

        [EmailAddress]
        public string? Email { get; set; }

        public string? GstNo { get; set; }

        public string? DiscPercentage { get; set; }

        // ✅ Your requested backend-only fields
        [Required]
        [StringLength(1)]
        public string Stopped { get; set; } = "N"; // "Y" or "N"

        [Required]
        [StringLength(1)]
        public string Status { get; set; } = "1"; // "1" (active) or "0" (expired)
    }

    public class SupplierType
    {
        public int SupplierTypeId { get; set; }
        public string TypeName { get; set; }

        // Navigation property
        public ICollection<Supplier> Suppliers { get; set; }
    }

    public class SupplierDto
    {
        public int Id { get; set; }
        public string AccNo { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Location { get; set; }
        public string Post { get; set; }
        public string Pin { get; set; }
        public string Phone { get; set; }
        public string Whatsapp { get; set; }
        public string Email { get; set; }

        public int SupplierTypeId { get; set; }

        public string SupplierTypeName { get; set; }

        public string GstNo { get; set; }
        public string? DiscPercentage { get; set; }
    }

    public class CreateSupplierDto
    {
        public string AccNo { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Location { get; set; }
        public string Post { get; set; }
        public string Pin { get; set; }
        public string Phone { get; set; }
        public string Whatsapp { get; set; }
        public string Email { get; set; }

        public int SupplierTypeId { get; set; } // ✅ Replaces string Type

        public string GstNo { get; set; }
        public string? DiscPercentage { get; set; }
    }

    public class UpdateSupplierDto : CreateSupplierDto { }

    public class SupplierTypeDto
    {
        public int SupplierTypeId { get; set; }
        public string TypeName { get; set; }
    }

    public class SupplierTypeInputDto
{
    public string TypeName { get; set; }
}


}
