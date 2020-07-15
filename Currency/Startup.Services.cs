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

			

			#endregion

			#region presentation layer

			

			#endregion
		}
	}
}
