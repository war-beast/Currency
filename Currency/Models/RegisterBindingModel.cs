using System.ComponentModel.DataAnnotations;

namespace CurrencyApp.Models
{
	public class RegisterBindingModel
	{
		[Required]
		[EmailAddress]
		[Display(Name = "Email")]
		public string Email { get; set; }

		[Required]
		[StringLength(100, ErrorMessage = "Поле {0} должно быть от {2} до {1} символов в длину.", MinimumLength = 4)]
		[DataType(DataType.Password)]
		[Display(Name = "Пароль")]
		public string Password { get; set; }

		[DataType(DataType.Password)]
		[Display(Name = "Повторите пароль")]
		[Compare("Password", ErrorMessage = "Пароль и подтверждение не совпадают")]
		public string ConfirmPassword { get; set; }
	}
}
