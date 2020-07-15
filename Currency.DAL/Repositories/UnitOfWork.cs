using System;
using System.Collections.Generic;
using System.Text;
using CurrencyApp.DAL.DataContext;
using CurrencyApp.DAL.Entity;
using CurrencyApp.DAL.Interface;
using Microsoft.EntityFrameworkCore;

namespace CurrencyApp.DAL.Repositories
{
	public class UnitOfWork : IUnitOfWork, IDisposable
	{
		#region private members

		private ApplicationContext _db;
		private CurrencyRepository _currencyRepository;

		private bool disposed = false;

		#endregion

		public UnitOfWork(DbContextOptions<ApplicationContext> options)
		{
			if (options == null)
				throw new ArgumentNullException(nameof(options));

			_db = new ApplicationContext(options);
		}

		public IRepository<Currency> CurrencyRepository => _currencyRepository ??= new CurrencyRepository(_db);

		public void Save()
		{
			throw new NotImplementedException();
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
