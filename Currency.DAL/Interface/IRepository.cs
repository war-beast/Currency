using System;
using System.Collections.Generic;
using System.Text;

namespace CurrencyApp.DAL.Interface
{
	public interface IRepository<T> where T: class
	{
		T Get(string id);

		IEnumerable<T> GetAll();

		void Create(T item);

		void Delete(string id);
	}
}
