using CurrencyApp.BLL.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CurrencyApp.BLL.Interfaces
{
	public interface ICurrencyService
	{
		/// <summary>
		/// Получение информации о валюте
		/// </summary>
		/// <param name="id">ИД валюты</param>
		/// <returns></returns>
		Task<CurrencyDto> Get(string id);

		/// <summary>
		/// Получение списка валют
		/// </summary>
		/// <param name="page">Страница списка</param>
		/// <param name="pageSize">Количество записей на страницу</param>
		/// <returns></returns>
		Task<IEnumerable<CurrencyDto>> GetCurrencies(int page = 1, int pageSize = 5);

		/// <summary>
		/// Количество валют в БД
		/// </summary>
		/// <returns></returns>
		Task<int> GetTotalCount();

		/// <summary>
		/// Обновить курсы валют. Если в БД нет каких-то валют, добавить их.
		/// </summary>
		/// <returns></returns>
		Task CreateOrUpdate();
	}
}
