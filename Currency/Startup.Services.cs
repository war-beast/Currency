using CurrencyApp.BLL.Interfaces;
using CurrencyApp.BLL.Services;
using CurrencyApp.DAL.Interface;
using CurrencyApp.DAL.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace CurrencyApp
{
	public partial class Startup
	{
		private void ConfigureCustomServices(IServiceCollection services)
		{
			#region data level

			services.AddTransient<IUnitOfWork, UnitOfWork>();

			#endregion

			#region businesslogic level

			services.AddTransient<ICbrCurrencyParsingService, CbrCurrencyParsingService>();
			services.AddTransient<ICbrCurrencyService, CbrCurrencyService>();
			services.AddTransient<IDailyRatesService, DailyRatesService>();

			#endregion

			#region presentation layer



			#endregion
		}
	}
}
