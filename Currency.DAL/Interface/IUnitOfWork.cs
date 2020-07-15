using CurrencyApp.DAL.Entity;

namespace CurrencyApp.DAL.Interface
{
	public interface IUnitOfWork
	{
		IRepository<Currency> CurrencyRepository { get; }

		void Save();
	}
}
