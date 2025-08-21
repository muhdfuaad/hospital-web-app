using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;

namespace HmsApi.Models
{
    [Table("Formregs")]
    public class Formreg
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [Required]
        public string Regno { get; set; }

        [Required]
        public int Gender { get; set; }

        public DateTime Dob { get; set; }

        public string Address { get; set; }

        public string Nation { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public bool IsNew { get; set; }

        public string Photopath { get; set; } // Stores image path

        public string Pdfpath { get; set; }   // ✅ NEW: Stores PDF file path
    }

    // DTO used for receiving form-data (multipart/form-data)
    public class FormregDto
    {
        public string Name { get; set; }

        public string Regno { get; set; }

        public string Gender { get; set; } // will be parsed to int

        public string Dob { get; set; } // will be parsed to DateTime

        public string Address { get; set; }

        public string Nation { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public bool IsNew { get; set; }

        public IFormFile Photopath { get; set; } // ✅ Image file upload

        public IFormFile Pdf { get; set; }       // ✅ NEW: PDF file upload
    }
}
