using System;
using System.Collections.Generic;
using CurrencyApp.BLL.Dto;
using System.Threading.Tasks;

namespace CurrencyApp.BLL.Interfaces
{
	public interface IDailyRatesService
	{
		Task AddToHistory(IEnumerable<ICurrencyRate> currencies, DateTime checkingDate);
	}
}
