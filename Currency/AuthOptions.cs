using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace Currency
{
	public class AuthOptions
	{
		public const string ISSUER = "EtishopAuthServer"; // издатель токена
		public const string AUDIENCE = "EtishopAuthClient"; // потребитель токена
		const string KEY = "8no1.VLjjrjOitxp`&r%";   // ключ для шифрации
		public const int LIFETIME = 30; // время жизни токена - 365 дней
		public static SymmetricSecurityKey GetSymmetricSecurityKey()
		{
			return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
		}
	}
}
