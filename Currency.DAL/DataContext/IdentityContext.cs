﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CurrencyApp.DAL.DataContext
{
	public class IdentityContext : IdentityDbContext
	{
		public IdentityContext(DbContextOptions<IdentityContext> options)
			: base(options)
		{
		}
	}
}
