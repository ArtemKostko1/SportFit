using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SportFit.Migrations
{
    public partial class changeBaseEntities : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreationDate",
                table: "Tags");

            migrationBuilder.DropColumn(
                name: "ModificationDate",
                table: "Tags");

            migrationBuilder.DropColumn(
                name: "CreationDate",
                table: "SelectedPrograms");

            migrationBuilder.DropColumn(
                name: "ModificationDate",
                table: "SelectedPrograms");

            migrationBuilder.DropColumn(
                name: "CreationDate",
                table: "ProgramTypes");

            migrationBuilder.DropColumn(
                name: "ModificationDate",
                table: "ProgramTypes");

            migrationBuilder.DropColumn(
                name: "CreationDate",
                table: "ProgramTags");

            migrationBuilder.DropColumn(
                name: "ModificationDate",
                table: "ProgramTags");

            migrationBuilder.DropColumn(
                name: "CreationDate",
                table: "Likes");

            migrationBuilder.DropColumn(
                name: "ModificationDate",
                table: "Likes");

            migrationBuilder.DropColumn(
                name: "CreationDate",
                table: "ComplexityLevels");

            migrationBuilder.DropColumn(
                name: "ModificationDate",
                table: "ComplexityLevels");

            migrationBuilder.InsertData(
                table: "ComplexityLevels",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { new Guid("f7025698-f847-4769-9bec-c00691a660aa"), "Professional" },
                    { new Guid("f2834669-c57d-48c3-bf6b-e36356f94f51"), "Hard" },
                    { new Guid("60e58b0f-490d-4ad3-b15e-439d3db78b5a"), "Medium" },
                    { new Guid("ca5e94cc-83bd-4f8c-bded-837d8526b0f4"), "Easy" }
                });

            migrationBuilder.InsertData(
                table: "ProgramTypes",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { new Guid("a9d3b040-3f57-4b21-9e1e-6323ca6e175e"), "Training program" },
                    { new Guid("fb980d9f-9b8c-4325-8570-75d0ca509700"), "Meal plan" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "ComplexityLevels",
                keyColumn: "Id",
                keyValue: new Guid("60e58b0f-490d-4ad3-b15e-439d3db78b5a"));

            migrationBuilder.DeleteData(
                table: "ComplexityLevels",
                keyColumn: "Id",
                keyValue: new Guid("ca5e94cc-83bd-4f8c-bded-837d8526b0f4"));

            migrationBuilder.DeleteData(
                table: "ComplexityLevels",
                keyColumn: "Id",
                keyValue: new Guid("f2834669-c57d-48c3-bf6b-e36356f94f51"));

            migrationBuilder.DeleteData(
                table: "ComplexityLevels",
                keyColumn: "Id",
                keyValue: new Guid("f7025698-f847-4769-9bec-c00691a660aa"));

            migrationBuilder.DeleteData(
                table: "ProgramTypes",
                keyColumn: "Id",
                keyValue: new Guid("a9d3b040-3f57-4b21-9e1e-6323ca6e175e"));

            migrationBuilder.DeleteData(
                table: "ProgramTypes",
                keyColumn: "Id",
                keyValue: new Guid("fb980d9f-9b8c-4325-8570-75d0ca509700"));

            migrationBuilder.AddColumn<DateTime>(
                name: "CreationDate",
                table: "Tags",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModificationDate",
                table: "Tags",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreationDate",
                table: "SelectedPrograms",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModificationDate",
                table: "SelectedPrograms",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreationDate",
                table: "ProgramTypes",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModificationDate",
                table: "ProgramTypes",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreationDate",
                table: "ProgramTags",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModificationDate",
                table: "ProgramTags",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreationDate",
                table: "Likes",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModificationDate",
                table: "Likes",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreationDate",
                table: "ComplexityLevels",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModificationDate",
                table: "ComplexityLevels",
                type: "datetime2",
                nullable: true);
        }
    }
}
