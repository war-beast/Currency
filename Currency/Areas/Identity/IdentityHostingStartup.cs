using Microsoft.AspNetCore.Hosting;

[assembly: HostingStartup(typeof(Currency.Areas.Identity.IdentityHostingStartup))]
namespace Currency.Areas.Identity
{
	public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
            });
        }
    }
}