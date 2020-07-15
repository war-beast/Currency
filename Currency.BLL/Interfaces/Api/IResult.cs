namespace CurrencyApp.BLL.Interfaces.Api
{
	public interface IResult
	{
		bool IsSuccess { get; }
		string ErrorMessage { get; }
	}
}
