using CurrencyApp.BLL.Interfaces.Api;

namespace CurrencyApp.BLL.Models.Api
{
	public class Result : IResult
	{
		#region constructor

		public Result(bool isSuccess, string errorMessage)
		{
			IsSuccess = isSuccess;
			ErrorMessage = errorMessage;
		}

		#endregion

		public bool IsSuccess { get; }

		public string ErrorMessage { get; }
	}
}
