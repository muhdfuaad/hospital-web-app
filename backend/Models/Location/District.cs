using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HmsApi.Models.Location
{
    [Table("Districts")]
    public class District
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public int Status { get; set; }

    }

    [Table("Panchayath")]
    public class Panchayath
    {
        [Key]
        public int Id { get; set; }
        public int DstId { get; set; }

        [Required]
        public string Name { get; set; }

        public int Status { get; set; }

        
    }
    public class Panchayath_view
    {
        [Key]
        public int Id { get; set; }
        public string DstId { get; set; }
        public string DstName { get; set; }

        public string Name { get; set; }

        public int Status { get; set; }



    }
}
