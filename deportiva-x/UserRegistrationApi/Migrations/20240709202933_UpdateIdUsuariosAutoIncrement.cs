using System;
using Microsoft.EntityFrameworkCore.Migrations;
using UserRegistrationApi.Models;

#nullable disable

namespace UserRegistrationApi.Migrations
{
    /// <inheritdoc />
    public partial class UpdateIdUsuariosAutoIncrement : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(name: "Password", table: "Users", newName: "Nombre");

            migrationBuilder.RenameColumn(name: "Name", table: "Users", newName: "Contrasena");

            migrationBuilder.RenameColumn(name: "Id", table: "Users", newName: "IdUsuarios");

            migrationBuilder.AddColumn<byte>(
                name: "DescuentoInicial",
                table: "Users",
                type: "tinyint",
                nullable: true
            );

            migrationBuilder.AddColumn<DateTime>(
                name: "FechaRegistro",
                table: "Users",
                type: "datetime2",
                nullable: true
            );

            migrationBuilder.AddColumn<string>(
                name: "Imagen",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "DescuentoInicial", table: "Users");

            migrationBuilder.DropColumn(name: "FechaRegistro", table: "Users");

            migrationBuilder.DropColumn(name: "Imagen", table: "Users");

            migrationBuilder.RenameColumn(name: "Nombre", table: "Users", newName: "Password");

            migrationBuilder.RenameColumn(name: "Contrasena", table: "Users", newName: "Name");

            migrationBuilder.RenameColumn(name: "IdUsuarios", table: "Users", newName: "Id");
        }
    }
}
