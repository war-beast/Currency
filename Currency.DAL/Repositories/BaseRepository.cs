using CurrencyApp.DAL.DataContext;
using System;

namespace CurrencyApp.DAL.Repositories
{
	public abstract class BaseRepository
	{
		protected readonly ApplicationContext _db;

		protected BaseRepository(ApplicationContext db)
		{
			_db = db ?? throw new ArgumentNullException(nameof(db));
		}
	}
}
