<template>
	<div class="row">
		<section>
			<form>
				<h4>Введите данные учётной записи для входа.</h4>
				<hr />
				<div asp-validation-summary="All" class="text-danger"></div>
				<div class="form-group">
					<label asp-for="Email"></label>
					<input asp-for="Email" class="form-control" required="" type="email" />
					<div class="invalid-feedback">
						Пожалуйста введите Email
					</div>
				</div>
				<div class="form-group">
					<label asp-for="Password"></label>
					<input asp-for="Password" class="form-control" required="" />

					<div class="invalid-feedback">
						Пожалуйста введите пароль
					</div>
				</div>
				<div class="form-group">
					<div class="checkbox">
						<label asp-for="RememberMe">
							<input asp-for="RememberMe" />
							@Html.DisplayNameFor(m => m.RememberMe)
						</label>
					</div>
				</div>
				<div class="form-group">
					<button type="submit" class="btn btn-primary">Войти</button>
				</div>
				<div class="form-group">
					<p>
						<a asp-page="./Register">Зарегистрироваться</a>
					</p>
				</div>
			</form>
		</section>
	</div>
</template>

<script src="./login.ts" lang="ts"></script>