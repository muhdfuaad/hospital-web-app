using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HmsApi.Migrations
{
    /// <inheritdoc />
    public partial class init3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "RegNo",
                table: "Formregs",
                newName: "Regno");

            migrationBuilder.AddColumn<string>(
                name: "Pdfpath",
                table: "Formregs",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Pdfpath",
                table: "Formregs");

            migrationBuilder.RenameColumn(
                name: "Regno",
                table: "Formregs",
                newName: "RegNo");
        }
    }
}
