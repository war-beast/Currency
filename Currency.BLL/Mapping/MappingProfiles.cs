using System;
using AutoMapper;
using CurrencyApp.BLL.Dto;
using CurrencyApp.DAL.Entity;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace CurrencyApp.BLL.Mapping
{
	public class MappingProfiles : Profile
	{
		public MappingProfiles()
		{
			#region core and business-logic

			CreateMap<CurrencyDto, Currency>();
			CreateMap<Currency, CurrencyDto>();

			CreateMap<DailyRateDto, DailyRate>()
				.ForMember(s => s.Date, opt => opt.MapFrom(dto => DateTime.Parse(dto.Date)));
			CreateMap<DailyRate, DailyRateDto>()
				.ForMember(s => s.Date, opt => opt.MapFrom(core => core.Date.ToShortDateString()));

			#endregion

			#region business-logic and presentation



			#endregion
		}
	}
}
