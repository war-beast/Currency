using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CurrencyApp.DAL.Migrations.Application
{
    public partial class v_02 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DailyRates",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CurrencyId = table.Column<string>(nullable: true),
                    Rate = table.Column<float>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DailyRates", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DailyRates_Currencies_CurrencyId",
                        column: x => x.CurrencyId,
                        principalTable: "Currencies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DailyRates_CurrencyId",
                table: "DailyRates",
                column: "CurrencyId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DailyRates");
        }
    }
}
