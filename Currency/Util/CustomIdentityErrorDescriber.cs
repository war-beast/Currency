using Microsoft.AspNetCore.Identity;

namespace Currency.Util
{
	public class CustomIdentityErrorDescriber : IdentityErrorDescriber
	{
		public override IdentityError DefaultError() { return new IdentityError { Code = nameof(DefaultError), Description = $"Возникла непредвиденная ошибка." }; }
		public override IdentityError ConcurrencyFailure() { return new IdentityError { Code = nameof(ConcurrencyFailure), Description = "Ошибка оптимистичного параллелизма, объект был изменен." }; }
		public override IdentityError PasswordMismatch() { return new IdentityError { Code = nameof(PasswordMismatch), Description = "Неправильный пароль." }; }
		public override IdentityError InvalidToken() { return new IdentityError { Code = nameof(InvalidToken), Description = "Неправильный токен." }; }
		public override IdentityError LoginAlreadyAssociated() { return new IdentityError { Code = nameof(LoginAlreadyAssociated), Description = "Пользователь с таким логином уже зарегистрирован." }; }
		public override IdentityError InvalidUserName(string userName) { return new IdentityError { Code = nameof(InvalidUserName), Description = $"Имя '{userName}' задано не верно, оно может содержать только буквы и цифры." }; }
		public override IdentityError InvalidEmail(string email) { return new IdentityError { Code = nameof(InvalidEmail), Description = $"Email '{email}' указан не правильно." }; }
		public override IdentityError DuplicateUserName(string userName) { return new IdentityError { Code = nameof(DuplicateUserName), Description = $"Имя '{userName}' уже занято." }; }
		public override IdentityError DuplicateEmail(string email) { return new IdentityError { Code = nameof(DuplicateEmail), Description = $"Email '{email}' уже зарегистрирован." }; }
		public override IdentityError InvalidRoleName(string role) { return new IdentityError { Code = nameof(InvalidRoleName), Description = $"Роль '{role}' указана не правильно." }; }
		public override IdentityError DuplicateRoleName(string role) { return new IdentityError { Code = nameof(DuplicateRoleName), Description = $"Роль '{role}' уже занята." }; }
		public override IdentityError UserAlreadyHasPassword() { return new IdentityError { Code = nameof(UserAlreadyHasPassword), Description = "Пользователь уже указал пароль." }; }
		public override IdentityError UserLockoutNotEnabled() { return new IdentityError { Code = nameof(UserLockoutNotEnabled), Description = "Блокировка не задана для этого пользователя." }; }
		public override IdentityError UserAlreadyInRole(string role) { return new IdentityError { Code = nameof(UserAlreadyInRole), Description = $"Пользователль уже в роли '{role}'." }; }
		public override IdentityError UserNotInRole(string role) { return new IdentityError { Code = nameof(UserNotInRole), Description = $"Пользователь не в роли '{role}'." }; }
		public override IdentityError PasswordTooShort(int length) { return new IdentityError { Code = nameof(PasswordTooShort), Description = $"Пароли должны быть длиной как минимум {length} символов." }; }
		public override IdentityError PasswordRequiresNonAlphanumeric() { return new IdentityError { Code = nameof(PasswordRequiresNonAlphanumeric), Description = "Пароль должен иметь как минимум 1 не буквенно-цифровой символ." }; }
		public override IdentityError PasswordRequiresDigit() { return new IdentityError { Code = nameof(PasswordRequiresDigit), Description = "Пароль должен иметь как минимум 1 цифру ('0'-'9')." }; }
		public override IdentityError PasswordRequiresLower() { return new IdentityError { Code = nameof(PasswordRequiresLower), Description = "Парооль должен содержать как минимум 1 символ в нижнем регистре ('а'-'я')." }; }
		public override IdentityError PasswordRequiresUpper() { return new IdentityError { Code = nameof(PasswordRequiresUpper), Description = "Парооль должен содержать как минимум 1 символ в верхнем регистре ('А'-'Я')." }; }
	}
}
