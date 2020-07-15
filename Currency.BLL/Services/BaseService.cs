using CurrencyApp.DAL.Interface;

namespace CurrencyApp.BLL.Services
{
	public abstract class BaseService
	{
		protected readonly IUnitOfWork _unitOfWork;

		protected BaseService(IUnitOfWork unitOfWork)
		{
			_unitOfWork = unitOfWork;
		}
	}
}
