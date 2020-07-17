using System.IO;
using CurrencyApp.DAL.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace CurrencyApp.DAL.DataContext
{
	public sealed class ApplicationContext : DbContext
	{
		public DbSet<Currency> Currencies { get; set; }
		public DbSet<DailyRate> DailyRates { get; set; }

		public ApplicationContext(DbContextOptions<ApplicationContext> options)
			: base(options)
		{
			Database.EnsureCreated();
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Currency>()
				.HasMany<DailyRate>(x => x.DayRates)
				.WithOne(x => x.Currency)
				.HasForeignKey(x => x.CurrencyId)
				.OnDelete(DeleteBehavior.Cascade);
		}
	}

	public class ApplicationContextFactory : IDesignTimeDbContextFactory<ApplicationContext>
	{
		ApplicationContext IDesignTimeDbContextFactory<ApplicationContext>.CreateDbContext(string[] args)
		{
			var config = new ConfigurationBuilder()
				.SetBasePath(Path.Combine(Directory.GetCurrentDirectory()))
				.AddJsonFile("appsettings.json", optional: true).Build();

			var optionsBuilder = new DbContextOptionsBuilder<ApplicationContext>();
			optionsBuilder.UseSqlServer(config.GetConnectionString("DefaultConnection"));

			return new ApplicationContext(optionsBuilder.Options);
		}
	}
}
