using CurrencyApp.BLL.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CurrencyApp.BLL.Interfaces
{
	public interface ICurrencyService
	{
		Task<CurrencyDto> Get(string id);

		Task<IEnumerable<CurrencyDto>> GetCurrencies(int page = 1, int pageSize = 5);

		Task<int> GetTotalCount();

		Task CreateOrUpdate();
	}
}
