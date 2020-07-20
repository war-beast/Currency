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

		public void AddToHistory(IEnumerable<ICurrencyRate> currencies, DateTime checkingDate)
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

				if(currencyRate == null)
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

			Task.Run(async () => await _unitOfWork.Save());
		}
	}
}
