using CurrencyApp.BLL.Dto;
using System;
using System.Collections.Generic;

namespace CurrencyApp.BLL.Models
{
	public class CurrencyRateModel
	{
		public DateTime Date { get; set; }

		public IEnumerable<CurrencyDto> Currencies { get; set; }
	}
}
