using System;
using System.Collections.Generic;
using System.Text;
using CurrencyApp.BLL.Dto;

namespace CurrencyApp.BLL.Models
{
	public class CurrencyRateModel
	{
		public DateTime Date { get; set; }

		public IEnumerable<CurrencyDto> Currencies { get; set; }
	}
}
