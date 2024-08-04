using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UserRegistrationApi.Migrations
{
    /// <inheritdoc />
    public partial class UpdatePasswordColumnLength : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DescuentoInicial",
                table: "Users",
                newName: "descuentoInicial");

            migrationBuilder.RenameColumn(
                name: "Tallas",
                table: "productos",
                newName: "Talla");

            migrationBuilder.RenameColumn(
                name: "Confeccion",
                table: "productos",
                newName: "Marca");

            migrationBuilder.AlterColumn<string>(
                name: "Contrasena",
                table: "Users",
                type: "nvarchar(60)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<string>(
                name: "Categoria",
                table: "productos",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Stock",
                table: "productos",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Categoria",
                table: "productos");

            migrationBuilder.DropColumn(
                name: "Stock",
                table: "productos");

            migrationBuilder.RenameColumn(
                name: "descuentoInicial",
                table: "Users",
                newName: "DescuentoInicial");

            migrationBuilder.RenameColumn(
                name: "Talla",
                table: "productos",
                newName: "Tallas");

            migrationBuilder.RenameColumn(
                name: "Marca",
                table: "productos",
                newName: "Confeccion");

            migrationBuilder.AlterColumn<string>(
                name: "Contrasena",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(60)");
        }
    }
}
