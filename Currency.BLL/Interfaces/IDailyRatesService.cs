using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CurrencyApp.BLL.Interfaces
{
	public interface IDailyRatesService
	{
		/// <summary>
		/// Добавление курсов валют на указанные день
		/// </summary>
		/// <param name="currencies">Курсы валют</param>
		/// <param name="checkingDate">Дата курса</param>
		void AddToHistory(IEnumerable<ICurrencyRate> currencies, DateTime checkingDate);
	}
}
