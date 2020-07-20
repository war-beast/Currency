using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CurrencyApp.BLL.Dto;
using CurrencyApp.BLL.Extensions;
using CurrencyApp.BLL.Interfaces;
using CurrencyApp.DAL.Entity;
using CurrencyApp.DAL.Interface;

namespace CurrencyApp.BLL.Services
{
	public class CbrCurrencyService : BaseService, ICbrCurrencyService
	{
		#region private members

		private readonly IMapper _mapper;
		private readonly ICbrCurrencyParsingService _currencyParsingService;

		#endregion

		#region constructor

		public CbrCurrencyService(IUnitOfWork unitOfWork,
			IMapper mapper,
			ICbrCurrencyParsingService currencyParsingService) : base(unitOfWork)
		{
			_mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
			_currencyParsingService = currencyParsingService ?? throw new ArgumentNullException(nameof(currencyParsingService));
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
			var currencies = await _currencyParsingService.GetParsed();

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

				//TODO: здесь надо проверить дату и заполнить историю курсов от последней записи до текущего дня
				
			}

			await _unitOfWork.Save();
		}

	}
}
