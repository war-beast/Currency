using System.Collections.Generic;

namespace CurrencyApp.DAL.Entity
{
	public class Currency
	{
		public string Id { get; set; }

		public string Name { get; set; }

		public float Rate { get; set; }

		public IEnumerable<DailyRate> DayRates { get; set; }
	}
}
