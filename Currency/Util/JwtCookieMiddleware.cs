using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace Currency.Util
{
	public class JwtCookieMiddleware
	{
		private readonly RequestDelegate _next;

		public JwtCookieMiddleware(RequestDelegate next)
		{
			_next = next ?? throw new ArgumentNullException(nameof(next));
		}

		public Task Invoke(HttpContext ctx)
		{
			if (ctx.Request.Cookies.TryGetValue("access_token", out var accessToken))
			{
				if (!string.IsNullOrEmpty(accessToken))
				{
					string bearerToken = $"Bearer {accessToken}";
					ctx.Request.Headers.Remove("Authorization");
					ctx.Request.Headers.Add("Authorization", bearerToken);

					ctx.Response.Headers.Add("X-Content-Type-Options", "nosniff");
					ctx.Response.Headers.Add("X-Xss-Protection", "1");
					ctx.Response.Headers.Add("X-Frame-Options", "DENY");
				}
			}
			return this._next(ctx);
		}
	}
	public static class JwtCookieMiddlewareExtensions
	{
		public static IApplicationBuilder UseJwtCookie(this IApplicationBuilder build)
		{
			return build.UseMiddleware<JwtCookieMiddleware>();
		}
	}
}
