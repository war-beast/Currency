using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CurrencyApp.BLL.Interfaces
{
	public interface IDailyRatesService
	{
		/// <summary>
		/// Обновление истории курсов валют
		/// </summary>
		/// <param name="currencies">Список валют</param>
		Task UpdateHistory(IEnumerable<ICurrencyRate> currencies);
	}
}
