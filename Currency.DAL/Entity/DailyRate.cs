using System;

namespace CurrencyApp.DAL.Entity
{
	public class DailyRate
	{
		public Guid Id { get; set; }

		public string CurrencyId { get; set; }

		public float Rate { get; set; }

		public DateTime Date { get; set; }

		#region navigation properties

		public Currency Currency { get; set; }

		#endregion
	}
}
