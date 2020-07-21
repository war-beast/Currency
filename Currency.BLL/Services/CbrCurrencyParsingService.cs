using CurrencyApp.BLL.Dto;
using CurrencyApp.BLL.Interfaces;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Xml.Linq;
using CurrencyApp.BLL.Models;

namespace CurrencyApp.BLL.Services
{
	public class CbrCurrencyParsingService : ICbrCurrencyParsingService
	{
		#region private members

		private readonly IHttpClientFactory _customClientFactory;

		private const string CurrencyFeedUrl = "http://www.cbr.ru/scripts/XML_daily.asp"; //Url XML-фида курсов валют

		#endregion

		#region constructor

		public CbrCurrencyParsingService(IHttpClientFactory customClientFactory)
		{
			_customClientFactory = customClientFactory;
		}

		#endregion

		public async Task<CurrencyRateModel> GetParsed(DateTime? date = null)
		{
			//Формат даты в параметре ДД/ММ/ГГГГ
			var dateParam = (date ?? DateTime.Today)
				.ToString("d", CultureInfo.CreateSpecificCulture("fr-FR"));

			var client = _customClientFactory.CreateClient();
			using var response = await client.GetAsync($"{CurrencyFeedUrl}?date_req={dateParam}");

			if (response.IsSuccessStatusCode)
			{
				await using var documentStream = await response.Content.ReadAsStreamAsync();
				var xmlDocument = await XDocument.LoadAsync(documentStream, LoadOptions.None, CancellationToken.None);
				if (xmlDocument?.Root == null)
					throw new InvalidOperationException($"Произошла ошибка при парсинге фида курсов валют. Время ошибки: {DateTime.Now}");

				DateTime.TryParse(xmlDocument.Root.Attribute("Date")?.Value, out var documentDate);

				var currencies = xmlDocument
					.Descendants("Valute")
					.Select(x => new CurrencyDto
					{
						Id = x.Attribute("ID")?.Value,
						Name = x.Descendants("Name").First().Value,
						Rate = float.TryParse(x.Descendants("Value").First().Value, out var rate) ? rate : 0f
					});

				return new CurrencyRateModel
				{
					Date = documentDate,
					Currencies = currencies
				};
			}
			else
			{
				throw new InvalidOperationException($"Произошла ошибка при получении курса валют. Время ошибки: {DateTime.Now}");
			}
		}
	}
}
