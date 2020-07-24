using CurrencyApp.BLL.Interfaces;
using CurrencyApp.DAL.Entity;
using CurrencyApp.DAL.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyApp.BLL.Services
{
	public class DailyRatesService : BaseService, IDailyRatesService
	{
		#region constructor

		public DailyRatesService(IUnitOfWork unitOfWork) : base(unitOfWork)
		{
		}

		#endregion
		
		public async Task UpdateHistory(IEnumerable<ICurrencyRate> currencies)
		{
			#region validation

			if(currencies == null)
				throw new ArgumentNullException(nameof(currencies));

			#endregion

			var currenciesListing = currencies.ToList();

			//Если со дня предыдущего обновления курсов прошло несколько дней,
			//нужно заполнить историю всеми данными о курсах до текущего дня.
			var lastUpdateDate = await GetLastUpdateDate();

			var date = lastUpdateDate.AddDays(1);
			while (date <= DateTime.Today)
			{
				AddToHistory(currenciesListing, date);
				date = date.AddDays(1);
			}
		}

		#region private methods

		private void AddToHistory(IEnumerable<ICurrencyRate> currencies, DateTime checkingDate)
		{
			#region validation

			if (currencies == null)
				throw new ArgumentNullException(nameof(currencies));

			#endregion

			foreach (var currency in currencies)
			{
				var currencyRate = _unitOfWork.DailyRates
					.GetAll()
					.FirstOrDefault(x => x.CurrencyId.Equals(currency.Id) && x.Date == checkingDate);

				if (currencyRate == null)
				{
					_unitOfWork.DailyRates.Create(new DailyRate
					{
						Id = Guid.NewGuid(),
						CurrencyId = currency.Id,
						Date = checkingDate,
						Rate = currency.Rate
					});
				}
			}
		}

		private async Task<DateTime> GetLastUpdateDate()
		{
			var lastRates = await Task.Run(() => _unitOfWork
				.Currencies
				.GetAll()
				.Select(x => x.DayRates.OrderByDescending(y => y.Date)
					.FirstOrDefault())
				.Where(x => x != null)
				.ToList());

			if (lastRates.Any())
			{
				//Ориентируемся по самой последней дате.
				//Если какая-то валюта перестала обновляться, значит валюта стала не актуальной (удалена из списков валют).
				return lastRates
					.Select(x => x.Date)
					.Max();
			}
			else
			{
				return DateTime.Today;
			}
		}

		#endregion
	}
}
