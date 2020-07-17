using CurrencyApp.DAL.DataContext;
using CurrencyApp.DAL.Entity;
using CurrencyApp.DAL.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CurrencyApp.DAL.Repositories
{
	public class CurrencyRepository : BaseRepository, IRepository<Currency>
	{
		#region constructor

		public CurrencyRepository(ApplicationContext db) : base(db)
		{
		}

		#endregion

		public Currency Get(string id)
		{
			#region validation

			if(string.IsNullOrWhiteSpace(id))
				throw new ArgumentNullException(nameof(id));

			#endregion

			return _db.Currencies
				.Include(x => x.DayRates)
				.First(x => x.Id == id);
		}

		public IEnumerable<Currency> GetAll()
		{
			return _db.Currencies
				.Include(x => x.DayRates);
		}

		public void Create(Currency item)
		{
			#region validation

			if (item == null)
				throw new ArgumentNullException(nameof(item));

			#endregion

			_db.Currencies.Add(item);
		}

		public void Update(Currency item)
		{
			#region validation

			if (item == null)
				throw new ArgumentNullException(nameof(item));

			#endregion

			var local = _db.Currencies
				.First(x => x.Id.Equals(item.Id));

			_db.Entry(local).CurrentValues.SetValues(item);
			_db.Entry(local.DayRates).CurrentValues.SetValues(item.DayRates);
		}

		public void Delete(string id)
		{
			#region validation

			if (string.IsNullOrWhiteSpace(id))
				throw new ArgumentNullException(nameof(id));

			#endregion

			var item = _db.Currencies.First(x => x.Id == id);

			_db.Currencies.Remove(item);
		}
	}
}
