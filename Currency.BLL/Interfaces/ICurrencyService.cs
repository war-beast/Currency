using CurrencyApp.BLL.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CurrencyApp.BLL.Interfaces
{
	public interface ICurrencyService
	{
		Task<CurrencyDto> Get(string id);

		Task<IEnumerable<CurrencyDto>> GetCurrencies();

		Task CreateOrUpdate();
	}
}
