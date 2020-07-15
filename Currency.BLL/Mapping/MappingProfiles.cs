using AutoMapper;
using CurrencyApp.BLL.Dto;
using CurrencyApp.DAL.Entity;

namespace CurrencyApp.BLL.Mapping
{
	public class MappingProfiles : Profile
	{
		public MappingProfiles()
		{
			#region core and business-logic

			CreateMap<CurrencyDto, Currency>();
			CreateMap<Currency, CurrencyDto>();

			#endregion

			#region business-logic and presentation



			#endregion
		}
	}
}
