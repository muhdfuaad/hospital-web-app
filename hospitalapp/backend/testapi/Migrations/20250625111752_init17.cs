using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace testapi.Migrations
{
    /// <inheritdoc />
    public partial class init17 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PatientDetails",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PainIntensity = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EconomicSituation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TreatmentDetails = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SpiritualFaith = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MentalSupport = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Expectations = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BasicNeeds = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FacilitiesStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RelationshipStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PatientKnowledge = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PatientConcerns = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FamilyKnowledge = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PrioritizedIssues = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Summary = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Plan = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Treatments_Ayurveda = table.Column<bool>(type: "bit", nullable: true),
                    Treatments_Homeo = table.Column<bool>(type: "bit", nullable: true),
                    Treatments_Naturopathy = table.Column<bool>(type: "bit", nullable: true),
                    Treatments_GreenMedicines = table.Column<bool>(type: "bit", nullable: true),
                    Treatments_SidhaMedicines = table.Column<bool>(type: "bit", nullable: true),
                    Treatments_Others = table.Column<bool>(type: "bit", nullable: true),
                    Assistances_MedicineSupport = table.Column<bool>(type: "bit", nullable: true),
                    Assistances_EducationalAssistance = table.Column<bool>(type: "bit", nullable: true),
                    Assistances_FoodSupport = table.Column<bool>(type: "bit", nullable: true),
                    Assistances_Rsby = table.Column<bool>(type: "bit", nullable: true),
                    Assistances_Kaarunya = table.Column<bool>(type: "bit", nullable: true),
                    Assistances_Others = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PatientDetails", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Clinic",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ClinicName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RegisterNo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Remarks = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PatientDetailId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clinic", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Clinic_PatientDetails_PatientDetailId",
                        column: x => x.PatientDetailId,
                        principalTable: "PatientDetails",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Difficulty",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DifficultyName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Impact = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Remarks = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PatientDetailId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Difficulty", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Difficulty_PatientDetails_PatientDetailId",
                        column: x => x.PatientDetailId,
                        principalTable: "PatientDetails",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "FamilyMember",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Age = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Relation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Education = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Income = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MaritalStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LongTermPatient = table.Column<bool>(type: "bit", nullable: false),
                    LongTermDetails = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PatientDetailId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FamilyMember", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FamilyMember_PatientDetails_PatientDetailId",
                        column: x => x.PatientDetailId,
                        principalTable: "PatientDetails",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Clinic_PatientDetailId",
                table: "Clinic",
                column: "PatientDetailId");

            migrationBuilder.CreateIndex(
                name: "IX_Difficulty_PatientDetailId",
                table: "Difficulty",
                column: "PatientDetailId");

            migrationBuilder.CreateIndex(
                name: "IX_FamilyMember_PatientDetailId",
                table: "FamilyMember",
                column: "PatientDetailId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Clinic");

            migrationBuilder.DropTable(
                name: "Difficulty");

            migrationBuilder.DropTable(
                name: "FamilyMember");

            migrationBuilder.DropTable(
                name: "PatientDetails");
        }
    }
}
