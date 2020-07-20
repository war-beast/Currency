using System;

namespace CurrencyApp.BLL.Dto
{
	public class DailyRateDto
	{
		public Guid Id { get; set; }

		public string CurrencyId { get; set; }

		public float Rate { get; set; }

		public string Date { get; set; }

		public CurrencyDto Currency { get; set; }
	}
}
