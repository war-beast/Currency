using CurrencyApp.BLL.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CurrencyApp.BLL.Interfaces
{
	public interface ICurrencyParser
	{
		Task<IEnumerable<CurrencyDto>> GetParsed();
	}
}
