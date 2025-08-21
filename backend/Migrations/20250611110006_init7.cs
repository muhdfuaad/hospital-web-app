using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HmsApi.Migrations
{
    /// <inheritdoc />
    public partial class init7 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Hpforms",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RegistrationNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    District = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Panchayath = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Ward = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Area = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Diagnosis = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Category = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Age = table.Column<int>(type: "int", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SpouseName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FatherName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MotherName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AdhaarAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CurrentAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AdhaarNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactPerson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Relation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactPhone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NeighbourResidence = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NeighbourPhone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CommunityVolunteer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CommunityVolunteerPhone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    WardMember = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    WardMemberPhone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AashaVolunteer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AashaVolunteerPhone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OtherPerson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OtherPersonPhone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HouseRoute = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Photograph = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AadharDoc = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hpforms", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Hpforms");
        }
    }
}
