using Currency.DAL.DataContext;
using Currency.Util;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;

namespace Currency
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			var connectionString = Configuration.GetConnectionString("DefaultConnection");

			services.AddDbContext<IdentityContext>(options =>
				options.UseSqlServer(connectionString));

			//services.AddDbContext<ApplicationContext>(options =>
			//	options.UseSqlServer(connectionString));

			// ���������� �������� Idenity
			services.AddDefaultIdentity<IdentityUser>(options =>
				{
					options.SignIn.RequireConfirmedAccount = false;
					options.SignIn.RequireConfirmedEmail = false;
					options.SignIn.RequireConfirmedPhoneNumber = false;
					options.Password.RequireNonAlphanumeric = false;
					options.Password.RequireUppercase = false;
					options.Password.RequireDigit = false;
					options.Password.RequireLowercase = false;
					options.Password.RequiredLength = 4;
					options.User.RequireUniqueEmail = true;
					options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
				})
				.AddRoles<IdentityRole>()
				.AddEntityFrameworkStores<IdentityContext>()
				.AddDefaultTokenProviders()
				.AddErrorDescriber<CustomIdentityErrorDescriber>();

			services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
				.AddJwtBearer(options =>
				{
					options.RequireHttpsMetadata = true;
					options.TokenValidationParameters = new TokenValidationParameters
					{
						// ��������, ����� �� �������������� �������� ��� ��������� ������
						ValidateIssuer = true,
						// ������, �������������� ��������
						ValidIssuer = AuthOptions.ISSUER,

						// ����� �� �������������� ����������� ������
						ValidateAudience = true,
						// ��������� ����������� ������
						ValidAudience = AuthOptions.AUDIENCE,
						// ����� �� �������������� ����� �������������
						ValidateLifetime = true,

						// ��������� ����� ������������
						IssuerSigningKey = AuthOptions.GetSymmetricSecurityKey(),
						// ��������� ����� ������������
						ValidateIssuerSigningKey = true
					};
					options.SaveToken = true;
				});

			services.AddAuthentication(sharedOptions =>
				{
					sharedOptions.DefaultAuthenticateScheme = IdentityConstants.ApplicationScheme;
					sharedOptions.DefaultSignInScheme = IdentityConstants.ApplicationScheme;
				})
				.AddCookie(options => //CookieAuthenticationOptions
				{
					options.LoginPath = new Microsoft.AspNetCore.Http.PathString("/Identity/Account/Login");
				});

			services.AddControllersWithViews().AddNewtonsoftJson();

			services.AddMvc(option =>
			{
				option.EnableEndpointRouting = false;
			});
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				app.UseDatabaseErrorPage();
			}
			else
			{
				app.UseExceptionHandler("/Home/Error");
				// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
				app.UseHsts();
			}
			app.UseHttpsRedirection();
			app.UseStaticFiles();

			app.UseRouting();

			app.UseAuthentication();
			app.UseAuthorization();

			app.UseMvc(routes =>
			{
				routes.MapRoute(
					name: "default",
					template: "{controller=Home}/{action=Index}/{id?}");
			});
		}
	}
}
