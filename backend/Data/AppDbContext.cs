using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HmsApi.Models;
using HmsApi.Models.Doctors;
using HmsApi.Models.Location;
using HmsApi.Models.Patients;
using HmsApi.Models.Purchase;
using HmsApi.Models.Sales;
using HmsApi.Models.Common;

namespace HmsApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<User> Users => Set<User>();
        public DbSet<Formreg> Formregs => Set<Formreg>();
        public DbSet<District> Districts => Set<District>();
        public DbSet<Panchayath> Panchayaths => Set<Panchayath>();
        public DbSet<Hpform> Hpforms => Set<Hpform>();
        public DbSet<Volunteer> Volunteers => Set<Volunteer>();
        public DbSet<Doctor> Doctors => Set<Doctor>();
        public DbSet<Nurse> Nurses => Set<Nurse>();
        public DbSet<PatientCategory> PatientCategories => Set<PatientCategory>();
        public DbSet<PatientDetail> PatientDetails => Set<PatientDetail>();
        public DbSet<Clinic> Clinics => Set<Clinic>();
        public DbSet<Difficulty> Difficulties => Set<Difficulty>();
        public DbSet<FamilyMember> FamilyMembers => Set<FamilyMember>();
        public DbSet<ClinicMaster> ClinicMasters => Set<ClinicMaster>();

        public DbSet<DoctorsReview> DoctorsReviews => Set<DoctorsReview>();
        public DbSet<Investigation> Investigations => Set<Investigation>();
        public DbSet<Medication> Medications => Set<Medication>();

        public DbSet<Supplier> Suppliers => Set<Supplier>();
        public DbSet<SupplierType> SupplierTypes => Set<SupplierType>();


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure PatientDetail relationships
            modelBuilder.Entity<PatientDetail>()
                .HasMany(p => p.Clinics)
                .WithOne(c => c.PatientDetail)
                .HasForeignKey(c => c.PatientDetailId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<PatientDetail>()
                .HasMany(p => p.Difficulties)
                .WithOne(d => d.PatientDetail)
                .HasForeignKey(d => d.PatientDetailId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<PatientDetail>()
                .HasMany(p => p.FamilyMembers)
                .WithOne(f => f.PatientDetail)
                .HasForeignKey(f => f.PatientDetailId)
                .OnDelete(DeleteBehavior.Cascade);

            // Configure string lengths and constraints if needed
            modelBuilder.Entity<PatientDetail>()
                .HasIndex(p => p.PatientId)
                .IsUnique();

            // Configure JSON columns for Treatments and Assistances
            modelBuilder.Entity<PatientDetail>()
                .Property(p => p.Treatments)
                .HasColumnType("nvarchar(max)");

            modelBuilder.Entity<PatientDetail>()
                .Property(p => p.Assistances)
                .HasColumnType("nvarchar(max)");

            // Configure LongTermDetails as optional
            modelBuilder.Entity<FamilyMember>()
                .Property(f => f.LongTermDetails)
                .IsRequired(false);

            modelBuilder.Entity<DoctorsReview>()
                .HasMany(d => d.Investigations)
                .WithOne(i => i.DoctorsReview)
                .HasForeignKey(i => i.DoctorsReviewId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<DoctorsReview>()
                .HasMany(d => d.Medications)
                .WithOne(m => m.DoctorsReview)
                .HasForeignKey(m => m.DoctorsReviewId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Supplier>()
            .HasOne(s => s.SupplierType)
            .WithMany(t => t.Suppliers)
            .HasForeignKey(s => s.SupplierTypeId)
            .OnDelete(DeleteBehavior.Restrict); // Optional

            modelBuilder.Entity<Supplier>()
                .Property(s => s.Stopped)
                .HasDefaultValue("N");

            modelBuilder.Entity<Supplier>()
                .Property(s => s.Status)
                .HasDefaultValue("1");

            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<PurchaseBill>()
                .HasMany(p => p.Items)
                .WithOne(i => i.PurchaseBill)
                .HasForeignKey(i => i.PurchaseId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<PurchaseItem>()
                .HasOne(i => i.PurchaseBill)
                .WithMany(p => p.Items)
                .HasForeignKey(i => i.PurchaseId);

            modelBuilder.Entity<MedicineBatch>()
                .HasOne(b => b.PurchaseItem)
                .WithMany()
                .HasForeignKey(b => b.PurchaseItemId);

            modelBuilder.Entity<SalesBill>()
                 .HasMany(s => s.Items)
                 .WithOne(i => i.SalesBill)
                 .HasForeignKey(i => i.SalesId)
                 .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<SalesItem>()
                .HasOne(i => i.SalesBill)
                .WithMany(s => s.Items)
                .HasForeignKey(i => i.SalesId);

            modelBuilder.Entity<BillSequence>()
                .HasKey(x => x.SequenceName);

            // Optional seed rows so preview works before first POST
            modelBuilder.Entity<BillSequence>().HasData(
                new BillSequence { SequenceName = "Sales", CurrentNumber = 0 },
                new BillSequence { SequenceName = "Purchase", CurrentNumber = 0 }
            );
        }

        public DbSet<PatientAssignment> PatientAssignments => Set<PatientAssignment>();
        public DbSet<DoctorsNote> DoctorsNotes => Set<DoctorsNote>();
        public DbSet<Symptom> Symptoms => Set<Symptom>();
        public DbSet<NursesNote> NursesNotes => Set<NursesNote>();
        public DbSet<VolunteersNote> VolunteersNotes => Set<VolunteersNote>();
        public DbSet<NursesReview> NursesReviews => Set<NursesReview>();
        public DbSet<NursesProcedure> NursesProcedures => Set<NursesProcedure>();
        public DbSet<Medicine> Medicines => Set<Medicine>();
        public DbSet<MedicineCompany> MedicineCompanies => Set<MedicineCompany>();
        public DbSet<MedicineType> MedicineTypes => Set<MedicineType>();

        public DbSet<PurchaseBill> PurchaseBills => Set<PurchaseBill>();
        public DbSet<PurchaseItem> PurchaseItems => Set<PurchaseItem>();
        public DbSet<MedicineBatch> MedicineBatches => Set<MedicineBatch>();

        public DbSet<SalesBill> SalesBills => Set<SalesBill>();
        public DbSet<SalesItem> SalesItems => Set<SalesItem>();
        public DbSet<BillSequence> BillSequences => Set<BillSequence>();
        public DbSet<HpformsCategory> HpformsCategories => Set<HpformsCategory>();
    }
}