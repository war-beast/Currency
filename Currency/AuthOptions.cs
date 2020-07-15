using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace CurrencyApp
{
	public class AuthOptions
	{
		public const string ISSUER = "EtishopAuthServer"; // издатель токена
		public const string AUDIENCE = "EtishopAuthClient"; // потребитель токена
		const string KEY = "dflgkjmh8sfdkgn9u493rumnekrto4ioit$#^HFDFwttjig945gme";   // ключ для шифрации
		public const int LIFETIME = 30; // время жизни токена - 365 дней
		public static SymmetricSecurityKey GetSymmetricSecurityKey()
		{
			return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
		}
	}
}
