using System;
using CurrencyApp.BLL.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;
using CurrencyApp.BLL.Models;

namespace CurrencyApp.BLL.Interfaces
{
	public interface ICurrencyParser
	{
		Task<CurrencyRateModel> GetParsed(DateTime? date = null);
	}
}
