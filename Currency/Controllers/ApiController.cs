using CurrencyApp.BLL.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using CurrencyApp.BLL.Interfaces.Api;
using CurrencyApp.BLL.Models.Api;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace CurrencyApp.Controllers
{
	[Route("api/common")]
	[ApiController]
	public class ApiController : ControllerBase
	{
		#region private members

		private readonly ICbrCurrencyService _cbrCurrencyService;

		#endregion

		#region constructor

		public ApiController(ICbrCurrencyService cbrCurrencyService)
		{
			_cbrCurrencyService = cbrCurrencyService ?? throw new ArgumentNullException(nameof(cbrCurrencyService));
		}

		#endregion

		[HttpGet]
		[Route("update")]
		public async Task<IActionResult> UpdateCurrencies()
		{
			await _cbrCurrencyService.CreateOrUpdate();

			IResult result = new Result(true, string.Empty);

			return Ok(JsonConvert.SerializeObject(result, Formatting.None, new JsonSerializerSettings
			{
				ContractResolver = new CamelCasePropertyNamesContractResolver()
			}));
		}

		[HttpGet]
		[Route("currencies")]
		public async Task<IActionResult> GetCurrencies()
		{
			var result = await _cbrCurrencyService.GetCurrencies();

			return Ok(JsonConvert.SerializeObject(result, Formatting.None, new JsonSerializerSettings
			{
				ContractResolver = new CamelCasePropertyNamesContractResolver()
			}));
		}
	}
}
