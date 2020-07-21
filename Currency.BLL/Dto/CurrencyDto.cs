using System.Collections.Generic;
using CurrencyApp.BLL.Interfaces;

namespace CurrencyApp.BLL.Dto
{
	public class CurrencyDto : ICurrencyRate
	{
		public string Id { get; set; }

		public string Name { get; set; }

		public float Rate { get; set; }

		public IEnumerable<DailyRateDto> DayRates { get; set; }
	}
}
