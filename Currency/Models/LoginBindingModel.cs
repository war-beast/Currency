using System.ComponentModel.DataAnnotations;

namespace CurrencyApp.Models
{
	public class LoginBindingModel
	{
		[Required]
		[EmailAddress]
		public string Email { get; set; }

		[Required]
		[DataType(DataType.Password)]
		public string Password { get; set; }

		[Display(Name = "Запомнить меня.")]
		public bool RememberMe { get; set; }
	}
}
