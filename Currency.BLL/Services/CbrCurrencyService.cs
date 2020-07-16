using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CurrencyApp.BLL.Dto;
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
			await Task.Run(() => _mapper.Map<CurrencyDto>(_unitOfWork.CurrencyRepository.Get(id)));

		public async Task<IEnumerable<CurrencyDto>> GetCurrencies(int page = 1, int pageSize = 5) =>
			await Task.Run(() => _mapper.Map<IEnumerable<CurrencyDto>>(
					_unitOfWork
					.CurrencyRepository
					.GetAll()
					.Skip((page - 1) * pageSize)
					.Take(pageSize)));

		public async Task<int> GetTotalCount() => 
			await Task.Run(() =>_unitOfWork.CurrencyRepository.GetAll().Count());


		public async Task CreateOrUpdate()
		{
			var currencies = await _currencyParsingService.GetParsed();

			foreach (var currency in currencies)
			{
				var existCurrency = _unitOfWork.CurrencyRepository
					.GetAll()
					.FirstOrDefault(x => x.Id.Equals(currency.Id));

				if (existCurrency == null)
					_unitOfWork.CurrencyRepository.Create(_mapper.Map<Currency>(currency));
				else
					_unitOfWork.CurrencyRepository.Update(_mapper.Map<Currency>(currency));
			}

			await _unitOfWork.Save();
		}

	}
}
