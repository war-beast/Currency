using AutoMapper;
using CurrencyApp.BLL.Mapping;
using Microsoft.Extensions.DependencyInjection;

namespace CurrencyApp
{
	public partial class Startup
	{
		private void ConfigureAutomapper(IServiceCollection services)
		{
			var config = new MapperConfiguration(cfg => {
				cfg.AddProfile(new MappingProfiles());
			});

			IMapper mapper = config.CreateMapper();
			services.AddSingleton(mapper);
		}
	}
}
