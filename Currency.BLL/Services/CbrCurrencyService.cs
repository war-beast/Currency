using AutoMapper;
using CurrencyApp.BLL.Dto;
using CurrencyApp.BLL.Interfaces;
using CurrencyApp.DAL.Entity;
using CurrencyApp.DAL.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyApp.BLL.Services
{
	public class CbrCurrencyService : BaseService, ICbrCurrencyService
	{
		#region private members

		private readonly IMapper _mapper;
		private readonly ICbrCurrencyParsingService _currencyParsingService;
		private readonly IDailyRatesService _dailyRatesService;

		#endregion

		#region constructor

		public CbrCurrencyService(IUnitOfWork unitOfWork,
			IMapper mapper,
			ICbrCurrencyParsingService currencyParsingService, 
			IDailyRatesService dailyRatesService) : base(unitOfWork)
		{
			_mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
			_currencyParsingService = currencyParsingService ?? throw new ArgumentNullException(nameof(currencyParsingService));
			_dailyRatesService = dailyRatesService ?? throw new ArgumentNullException(nameof(dailyRatesService));
		}


		#endregion

		public async Task<CurrencyDto> Get(string id) =>
			await Task.Run(() => _mapper.Map<CurrencyDto>(_unitOfWork.Currencies.Get(id)));

		public async Task<IEnumerable<CurrencyDto>> GetCurrencies(int page = 1, int pageSize = 5) =>
			await Task.Run(() => _mapper.Map<IEnumerable<CurrencyDto>>(
					_unitOfWork
					.Currencies
					.GetAll()
					.Skip((page - 1) * pageSize)
					.Take(pageSize)));

		public async Task<int> GetTotalCount() =>
			await Task.Run(() => _unitOfWork.Currencies.GetAll().Count());


		public async Task CreateOrUpdate()
		{
			//Получаем фид, с обязательным указанием сегодняшней даты
			//т.к. после 14:00 фид показывает курсы на следующий день
			var currencies = await _currencyParsingService.GetParsed(DateTime.Today);

			foreach (var currency in currencies.Currencies)
			{
				var existCurrency = _unitOfWork.Currencies.Get(currency.Id);

				if (existCurrency == null)
				{
					_unitOfWork.Currencies.Create(_mapper.Map<Currency>(currency));
				}
				else
				{
					_unitOfWork.Currencies.Update(existCurrency);
				}
				
			}

			await _unitOfWork.Save();

			//Если со дня обновления курсов прошло несколько дней,
			//нужно заполнить историю всеми данными о курсах до текущего дня.
			var lastUpdateDate = await GetLastUpdateDate();

			var date = lastUpdateDate;
			while (date <= DateTime.Today)
			{
				_dailyRatesService.AddToHistory(currencies.Currencies, date);
				date = date.AddDays(1);
			}
		}

		#region private methods

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
