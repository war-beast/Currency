using System.Collections.Generic;

namespace CurrencyApp.BLL.Dto
{
	public class CurrencyDto
	{
		public string Id { get; set; }

		public string Name { get; set; }

		public float Rate { get; set; }

		public IEnumerable<DailyRateDto> DayRates { get; set; }
	}
}
