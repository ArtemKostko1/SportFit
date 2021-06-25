using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SportFit.Migrations
{
    public partial class changeProgramEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "Users",
                type: "nvarchar(50)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(50)");

            migrationBuilder.AlterColumn<string>(
                name: "Nickname",
                table: "Users",
                type: "nvarchar(30)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(30)");

            migrationBuilder.AlterColumn<string>(
                name: "Login",
                table: "Users",
                type: "nvarchar(50)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(50)");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Programs",
                type: "nvarchar(60)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(50)");

            migrationBuilder.AlterColumn<string>(
                name: "Content",
                table: "Programs",
                type: "nvarchar(MAX)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "ComplexityLevels",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { new Guid("6b2db819-004b-434a-b356-5c5772c3b9b3"), "Легко" },
                    { new Guid("fdc5cfe9-d44c-4b37-acb3-c324f0bc3c5b"), "Средне" },
                    { new Guid("c3ed170d-ba4b-4081-a795-24b75aab78e2"), "Сложно" },
                    { new Guid("e35608e5-9f62-4ab2-9546-57518841480c"), "Профессионально" }
                });

            migrationBuilder.InsertData(
                table: "ProgramTypes",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { new Guid("6bee3b9a-fe39-4bd1-984f-90cab9e69b71"), "Программа тренировки" },
                    { new Guid("6ae7c82c-cf2d-47f0-8492-67e8cd46ee5b"), "План питания" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "ComplexityLevels",
                keyColumn: "Id",
                keyValue: new Guid("6b2db819-004b-434a-b356-5c5772c3b9b3"));

            migrationBuilder.DeleteData(
                table: "ComplexityLevels",
                keyColumn: "Id",
                keyValue: new Guid("c3ed170d-ba4b-4081-a795-24b75aab78e2"));

            migrationBuilder.DeleteData(
                table: "ComplexityLevels",
                keyColumn: "Id",
                keyValue: new Guid("e35608e5-9f62-4ab2-9546-57518841480c"));

            migrationBuilder.DeleteData(
                table: "ComplexityLevels",
                keyColumn: "Id",
                keyValue: new Guid("fdc5cfe9-d44c-4b37-acb3-c324f0bc3c5b"));

            migrationBuilder.DeleteData(
                table: "ProgramTypes",
                keyColumn: "Id",
                keyValue: new Guid("6ae7c82c-cf2d-47f0-8492-67e8cd46ee5b"));

            migrationBuilder.DeleteData(
                table: "ProgramTypes",
                keyColumn: "Id",
                keyValue: new Guid("6bee3b9a-fe39-4bd1-984f-90cab9e69b71"));

            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "Users",
                type: "nvarchar(50)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(50)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Nickname",
                table: "Users",
                type: "nvarchar(30)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(30)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Login",
                table: "Users",
                type: "nvarchar(50)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(50)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Programs",
                type: "nvarchar(50)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(60)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Content",
                table: "Programs",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(MAX)",
                oldNullable: true);

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
    }
}
