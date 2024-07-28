using Microsoft.EntityFrameworkCore.Migrations;
using UserRegistrationApi.Models;

#nullable disable

namespace UserRegistrationApi.Migrations
{
    /// <inheritdoc />
    public partial class UpdateProductPricePrecision : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "DescuentoInicial",
                table: "Users",
                type: "int",
                nullable: true,
                oldClrType: typeof(byte),
                oldType: "tinyint",
                oldNullable: true
            );

            migrationBuilder.CreateTable(
                name: "productos",
                columns: table => new
                {
                    idProductos = table
                        .Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Precio = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Descripcion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Imagen = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Tallas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Confeccion = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_productos", x => x.idProductos);
                }
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(name: "productos");

            migrationBuilder.AlterColumn<byte>(
                name: "DescuentoInicial",
                table: "Users",
                type: "tinyint",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true
            );
        }
    }
}
