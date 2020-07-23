using System;
using System.Threading.Tasks;
using AutoMapper;
using CurrencyApp.BLL.Interfaces;
using CurrencyApp.BLL.Mapping;
using CurrencyApp.BLL.Services;
using CurrencyApp.DAL.DataContext;
using CurrencyApp.DAL.Interface;
using CurrencyApp.DAL.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace CurrencyApp.Console
{
	class Program
	{
		private static ICbrCurrencyService _cbrCurrencyService;

		static async Task Main(string[] args)
		{
			RegisterServices();

			while (true)
			{
				System.Console.WriteLine("Введите команду обновления курсов");
				var command = System.Console.ReadLine() ?? string.Empty;
				if (command.Equals("update"))
				{
					await _cbrCurrencyService.CreateOrUpdate();
				}
				else
				{
					System.Console.WriteLine("Введена не правильная команда.");
				}
			}
		}

		private static void RegisterServices()
		{
			var config = new MapperConfiguration(cfg => { cfg.AddProfile(new MappingProfiles()); });

			IMapper mapper = config.CreateMapper();

			var services = new ServiceCollection()
				.AddHttpClient()
				.AddDbContext<ApplicationContext>(options =>
					options.UseSqlServer(
						"Server=(local);Database=CurrencyApp;Trusted_Connection=True;MultipleActiveResultSets=true"))
				.AddScoped<IUnitOfWork, UnitOfWork>()
				.AddSingleton(mapper)
				.AddTransient<ICbrCurrencyParsingService, CbrCurrencyParsingService>()
				.AddTransient<ICbrCurrencyService, CbrCurrencyService>()
				.AddTransient<IDailyRatesService, DailyRatesService>()
				.BuildServiceProvider();

			_cbrCurrencyService = services.GetService<ICbrCurrencyService>()
			                      ?? throw new InvalidOperationException("Service not registered");
		}
	}
}
