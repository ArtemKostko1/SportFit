using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SportFit.Migrations
{
    public partial class fixCascade : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Programs_ProgramId",
                table: "Comments");

            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Users_UserId",
                table: "Comments");

            migrationBuilder.DropForeignKey(
                name: "FK_Likes_Programs_ProgramId",
                table: "Likes");

            migrationBuilder.DropForeignKey(
                name: "FK_Likes_Users_UserId",
                table: "Likes");

            migrationBuilder.DropForeignKey(
                name: "FK_SelectedPrograms_Programs_ProgramId",
                table: "SelectedPrograms");

            migrationBuilder.DropForeignKey(
                name: "FK_SelectedPrograms_Users_UserId",
                table: "SelectedPrograms");

            migrationBuilder.DeleteData(
                table: "ComplexityLevels",
                keyColumn: "Id",
                keyValue: new Guid("7a7a6886-9225-474d-8007-557034258731"));

            migrationBuilder.DeleteData(
                table: "ComplexityLevels",
                keyColumn: "Id",
                keyValue: new Guid("b3e7f24b-ba0c-43db-9307-b632c422360a"));

            migrationBuilder.DeleteData(
                table: "ComplexityLevels",
                keyColumn: "Id",
                keyValue: new Guid("eafd27ae-8c47-4c6e-97b4-5bbb5da030ce"));

            migrationBuilder.DeleteData(
                table: "ComplexityLevels",
                keyColumn: "Id",
                keyValue: new Guid("f4006f22-c9c3-4928-995e-0996f4509d79"));

            migrationBuilder.DeleteData(
                table: "ProgramTypes",
                keyColumn: "Id",
                keyValue: new Guid("86bbc068-fe4e-4425-8a21-e78aca9229cc"));

            migrationBuilder.DeleteData(
                table: "ProgramTypes",
                keyColumn: "Id",
                keyValue: new Guid("93c4a44e-ca1a-4b95-8b68-1ff38a39ab9e"));

            migrationBuilder.InsertData(
                table: "ComplexityLevels",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { new Guid("07858a3e-dcc8-4ee0-a54a-8466810997d9"), "Professional" },
                    { new Guid("0b28ab32-80f5-4dcf-9645-7bf2e12eacad"), "Hard" },
                    { new Guid("095aeda9-d7b5-4eb8-9c31-f2e13aa509fd"), "Medium" },
                    { new Guid("5dad22f3-f7bb-44ad-bf76-bf883134da66"), "Easy" }
                });

            migrationBuilder.InsertData(
                table: "ProgramTypes",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { new Guid("2e2cf7a7-93b9-4cb1-b424-9867adc8c4b9"), "Training program" },
                    { new Guid("7c193439-bd2d-442e-b94c-7843c866eea5"), "Meal plan" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Programs_ProgramId",
                table: "Comments",
                column: "ProgramId",
                principalTable: "Programs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Users_UserId",
                table: "Comments",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Likes_Programs_ProgramId",
                table: "Likes",
                column: "ProgramId",
                principalTable: "Programs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Likes_Users_UserId",
                table: "Likes",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_SelectedPrograms_Programs_ProgramId",
                table: "SelectedPrograms",
                column: "ProgramId",
                principalTable: "Programs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_SelectedPrograms_Users_UserId",
                table: "SelectedPrograms",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Programs_ProgramId",
                table: "Comments");

            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Users_UserId",
                table: "Comments");

            migrationBuilder.DropForeignKey(
                name: "FK_Likes_Programs_ProgramId",
                table: "Likes");

            migrationBuilder.DropForeignKey(
                name: "FK_Likes_Users_UserId",
                table: "Likes");

            migrationBuilder.DropForeignKey(
                name: "FK_SelectedPrograms_Programs_ProgramId",
                table: "SelectedPrograms");

            migrationBuilder.DropForeignKey(
                name: "FK_SelectedPrograms_Users_UserId",
                table: "SelectedPrograms");

            migrationBuilder.DeleteData(
                table: "ComplexityLevels",
                keyColumn: "Id",
                keyValue: new Guid("07858a3e-dcc8-4ee0-a54a-8466810997d9"));

            migrationBuilder.DeleteData(
                table: "ComplexityLevels",
                keyColumn: "Id",
                keyValue: new Guid("095aeda9-d7b5-4eb8-9c31-f2e13aa509fd"));

            migrationBuilder.DeleteData(
                table: "ComplexityLevels",
                keyColumn: "Id",
                keyValue: new Guid("0b28ab32-80f5-4dcf-9645-7bf2e12eacad"));

            migrationBuilder.DeleteData(
                table: "ComplexityLevels",
                keyColumn: "Id",
                keyValue: new Guid("5dad22f3-f7bb-44ad-bf76-bf883134da66"));

            migrationBuilder.DeleteData(
                table: "ProgramTypes",
                keyColumn: "Id",
                keyValue: new Guid("2e2cf7a7-93b9-4cb1-b424-9867adc8c4b9"));

            migrationBuilder.DeleteData(
                table: "ProgramTypes",
                keyColumn: "Id",
                keyValue: new Guid("7c193439-bd2d-442e-b94c-7843c866eea5"));

            migrationBuilder.InsertData(
                table: "ComplexityLevels",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { new Guid("eafd27ae-8c47-4c6e-97b4-5bbb5da030ce"), "Professional" },
                    { new Guid("f4006f22-c9c3-4928-995e-0996f4509d79"), "Hard" },
                    { new Guid("b3e7f24b-ba0c-43db-9307-b632c422360a"), "Medium" },
                    { new Guid("7a7a6886-9225-474d-8007-557034258731"), "Easy" }
                });

            migrationBuilder.InsertData(
                table: "ProgramTypes",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { new Guid("86bbc068-fe4e-4425-8a21-e78aca9229cc"), "Training program" },
                    { new Guid("93c4a44e-ca1a-4b95-8b68-1ff38a39ab9e"), "Meal plan" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Programs_ProgramId",
                table: "Comments",
                column: "ProgramId",
                principalTable: "Programs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Users_UserId",
                table: "Comments",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Likes_Programs_ProgramId",
                table: "Likes",
                column: "ProgramId",
                principalTable: "Programs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Likes_Users_UserId",
                table: "Likes",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SelectedPrograms_Programs_ProgramId",
                table: "SelectedPrograms",
                column: "ProgramId",
                principalTable: "Programs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SelectedPrograms_Users_UserId",
                table: "SelectedPrograms",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
