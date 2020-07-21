using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using CurrencyApp.DAL.DataContext;
using CurrencyApp.DAL.Entity;
using CurrencyApp.DAL.Interface;

namespace CurrencyApp.DAL.Repositories
{
	public class DailyRateRepository : BaseRepository, IRepository<DailyRate>
	{
		#region constructor

		public DailyRateRepository(ApplicationContext db) : base(db)
		{
			
		}

		#endregion

		public DailyRate Get(string id)
		{
			#region validation

			if (string.IsNullOrWhiteSpace(id))
				throw new ArgumentNullException(nameof(id));

			#endregion

			return _db.DailyRates
				.First(x => x.Id.ToString().Equals(id));
		}

		public IEnumerable<DailyRate> GetAll()
		{
			return _db.DailyRates;
		}

		public void Create(DailyRate item)
		{
			#region validation

			if (item == null)
				throw new ArgumentNullException(nameof(item));

			#endregion

			_db.DailyRates.Add(item);
		}

		public void Update(DailyRate item)
		{
			//В целях исходной задачи не имеет значения
			throw new NotImplementedException();
		}

		public void Delete(string id)
		{
			//В целях исходной задачи не имеет значения
			throw new NotImplementedException();
		}
	}
}
