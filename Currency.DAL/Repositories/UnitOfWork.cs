using CurrencyApp.DAL.DataContext;
using CurrencyApp.DAL.Entity;
using CurrencyApp.DAL.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace CurrencyApp.DAL.Repositories
{
	public class UnitOfWork : IUnitOfWork, IDisposable
	{
		#region private members

		private ApplicationContext _db;
		private CurrencyRepository _currencyRepository;
		private DailyRateRepository _dailyRateRepository;

		private bool disposed = false;

		#endregion

		public UnitOfWork(DbContextOptions<ApplicationContext> options)
		{
			if (options == null)
				throw new ArgumentNullException(nameof(options));

			_db = new ApplicationContext(options);
		}

		public IRepository<Currency> Currencies => _currencyRepository ??= new CurrencyRepository(_db);
		public IRepository<DailyRate> DailyRates => _dailyRateRepository ??= new DailyRateRepository(_db);

		public async Task Save()
		{
			await _db.SaveChangesAsync();
		}

		public virtual void Dispose(bool disposing)
		{
			if (disposed)
				return;

			if (disposing)
			{
				_db.Dispose();
			}
			this.disposed = true;
		}

		public void Dispose()
		{
			Dispose(true);
			GC.SuppressFinalize(this);
		}
	}
}
