﻿using CurrencyApp.BLL.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using CurrencyApp.BLL.Interfaces.Api;
using CurrencyApp.BLL.Models.Api;
using Microsoft.AspNetCore.Authorization;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace CurrencyApp.Controllers
{
	[Route("api/common")]
	[ApiController]
	public class ApiCommonController : ControllerBase
	{
		#region private members

		private readonly ICbrCurrencyService _cbrCurrencyService;

		#endregion

		#region constructor

		public ApiCommonController(ICbrCurrencyService cbrCurrencyService)
		{
			_cbrCurrencyService = cbrCurrencyService ?? throw new ArgumentNullException(nameof(cbrCurrencyService));
		}

		#endregion

		/// <summary>
		/// Этот метод добавлен для простоты обновления данных
		/// Если хочется оставить его в релизе, то нужно выполнять дополнительную проверку пользователя на соответствие уровня доступа
		/// Например сделать этот метод доступным только для роли "Администратор".
		/// </summary>
		/// <returns></returns>
		[HttpGet]
		[Route("update")]
		[AllowAnonymous]
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
		[Route("currencies/{pageSize}/{tablePage}")]
		[ResponseCache(VaryByQueryKeys = new[] { "pageSize", "tablePage"}, Duration = 300, Location = ResponseCacheLocation.Any)]
		public async Task<IActionResult> GetCurrencies(int pageSize = 5, int tablePage = 1)
		{
			var result = await _cbrCurrencyService.GetCurrencies(tablePage, pageSize);

			return Ok(JsonConvert.SerializeObject(result, Formatting.None, new JsonSerializerSettings
			{
				ContractResolver = new CamelCasePropertyNamesContractResolver(),
				ReferenceLoopHandling = ReferenceLoopHandling.Ignore
			}));
		}

		[HttpGet]
		[Route("currency/{id?}")]
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
				ContractResolver = new CamelCasePropertyNamesContractResolver(),
				ReferenceLoopHandling = ReferenceLoopHandling.Ignore
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
