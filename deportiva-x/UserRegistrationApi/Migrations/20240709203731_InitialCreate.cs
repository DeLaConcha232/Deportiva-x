using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UserRegistrationApi.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IdUsuarios",
                table: "Users",
                newName: "idUsuarios");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "idUsuarios",
                table: "Users",
                newName: "IdUsuarios");
        }
    }
}
