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
		[ResponseCache(VaryByQueryKeys = new[] { "page", "pageSize" }, Duration = 300, Location = ResponseCacheLocation.Any)]
		public async Task<IActionResult> GetCurrencies(int page = 1, int pageSize = 5)
		{
			var result = await _cbrCurrencyService.GetCurrencies(page, pageSize);

			return Ok(JsonConvert.SerializeObject(result, Formatting.None, new JsonSerializerSettings
			{
				ContractResolver = new CamelCasePropertyNamesContractResolver()
			}));
		}

		[HttpGet]
		[Route("currency")]
		[ResponseCache(VaryByQueryKeys = new[] { "id" }, Duration = 300, Location = ResponseCacheLocation.Any)]
		public async Task<IActionResult> GetCurrencyDetails(string id)
		{
			#region validation

			if (string.IsNullOrWhiteSpace(id))
			{
				var result = new Result(isSuccess: false, errorMessage: "Не задано обязательное поле Id");
				return BadRequest(JsonConvert.SerializeObject(result, Formatting.None, new JsonSerializerSettings
				{
					ContractResolver = new CamelCasePropertyNamesContractResolver()
				}));
			}

			#endregion

			var currencyDetails = await _cbrCurrencyService.Get(id);

			return Ok(JsonConvert.SerializeObject(currencyDetails, Formatting.None, new JsonSerializerSettings
			{
				ContractResolver = new CamelCasePropertyNamesContractResolver()
			}));
		}

		[HttpGet]
		[Route("currencyCount")]
		[ResponseCache(Duration = 300, Location = ResponseCacheLocation.Any)]
		public async Task<IActionResult> GetCount()
		{
			var result = await _cbrCurrencyService.GetTotalCount();
			return Ok(JsonConvert.SerializeObject(result, Formatting.None, new JsonSerializerSettings
			{
				ContractResolver = new CamelCasePropertyNamesContractResolver()
			}));
		}
	}
}
