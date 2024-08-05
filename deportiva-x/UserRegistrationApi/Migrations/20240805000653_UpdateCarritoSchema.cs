using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UserRegistrationApi.Migrations
{
    /// <inheritdoc />
    public partial class UpdateCarritoSchema : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Imagen",
                table: "Users");

            migrationBuilder.AlterColumn<byte>(
                name: "descuentoInicial",
                table: "Users",
                type: "tinyint",
                nullable: false,
                defaultValue: (byte)0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "Postalcode",
                table: "Users",
                type: "int",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<DateTime>(
                name: "FechaRegistro",
                table: "Users",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Contrasena",
                table: "Users",
                type: "nvarchar(255)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(60)");

            migrationBuilder.CreateTable(
                name: "Carrito",
                columns: table => new
                {
                    idCarrito = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    idUsuarios = table.Column<int>(type: "int", nullable: false),
                    UseridUsuarios = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Carrito", x => x.idCarrito);
                    table.ForeignKey(
                        name: "FK_Carrito_Users_UseridUsuarios",
                        column: x => x.UseridUsuarios,
                        principalTable: "Users",
                        principalColumn: "idUsuarios",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserWishlist",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    idUsuario = table.Column<int>(type: "int", nullable: false),
                    idProducto = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserWishlist", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserWishlist_Users_idUsuario",
                        column: x => x.idUsuario,
                        principalTable: "Users",
                        principalColumn: "idUsuarios",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserWishlist_productos_idProducto",
                        column: x => x.idProducto,
                        principalTable: "productos",
                        principalColumn: "idProductos",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CarritoItems",
                columns: table => new
                {
                    idCarritoItems = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    idCarrito = table.Column<int>(type: "int", nullable: false),
                    idProductos = table.Column<int>(type: "int", nullable: false),
                    Cantidad = table.Column<int>(type: "int", nullable: false),
                    Precio = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    UseridUsuarios = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarritoItems", x => x.idCarritoItems);
                    table.ForeignKey(
                        name: "FK_CarritoItems_Carrito_idCarrito",
                        column: x => x.idCarrito,
                        principalTable: "Carrito",
                        principalColumn: "idCarrito",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CarritoItems_Users_UseridUsuarios",
                        column: x => x.UseridUsuarios,
                        principalTable: "Users",
                        principalColumn: "idUsuarios");
                    table.ForeignKey(
                        name: "FK_CarritoItems_productos_idProductos",
                        column: x => x.idProductos,
                        principalTable: "productos",
                        principalColumn: "idProductos",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Carrito_UseridUsuarios",
                table: "Carrito",
                column: "UseridUsuarios");

            migrationBuilder.CreateIndex(
                name: "IX_CarritoItems_idCarrito",
                table: "CarritoItems",
                column: "idCarrito");

            migrationBuilder.CreateIndex(
                name: "IX_CarritoItems_idProductos",
                table: "CarritoItems",
                column: "idProductos");

            migrationBuilder.CreateIndex(
                name: "IX_CarritoItems_UseridUsuarios",
                table: "CarritoItems",
                column: "UseridUsuarios");

            migrationBuilder.CreateIndex(
                name: "IX_UserWishlist_idProducto",
                table: "UserWishlist",
                column: "idProducto");

            migrationBuilder.CreateIndex(
                name: "IX_UserWishlist_idUsuario",
                table: "UserWishlist",
                column: "idUsuario");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CarritoItems");

            migrationBuilder.DropTable(
                name: "UserWishlist");

            migrationBuilder.DropTable(
                name: "Carrito");

            migrationBuilder.AlterColumn<int>(
                name: "descuentoInicial",
                table: "Users",
                type: "int",
                nullable: true,
                oldClrType: typeof(byte),
                oldType: "tinyint");

            migrationBuilder.AlterColumn<string>(
                name: "Postalcode",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "FechaRegistro",
                table: "Users",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AlterColumn<string>(
                name: "Contrasena",
                table: "Users",
                type: "nvarchar(60)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(255)");

            migrationBuilder.AddColumn<string>(
                name: "Imagen",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
