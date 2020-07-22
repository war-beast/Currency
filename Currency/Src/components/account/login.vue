<template>
	<div class="row">
		<section v-if="!isLogged">
			<form v-bind:class="{ 'was-validated': !formValid }">
				<h4>Введите данные учётной записи для входа.</h4>
				<hr />
				<div class="text-danger" v-if="loginError != ''">{{loginError}}</div>
				<div class="form-group">
					<label for="emailField">Email</label>
					<input asp-for="Email" class="form-control" required="" type="email" v-model="email" />
					<div class="invalid-feedback">
						Пожалуйста введите Email
					</div>
				</div>
				<div class="form-group">
					<label for="passwordField">Пароль</label>
					<input id="passwordField" class="form-control" required="" type="password" v-model="password" />
					<div class="invalid-feedback">
						Пожалуйста введите пароль
					</div>
				</div>
				<div class="form-group">
					<div class="custom-control custom-checkbox">
						<input id="rememberMeField" type="checkbox" class="custom-control-input" v-model="rememberMe" />
						<label for="rememberMeField" class="custom-control-label"> Запомнить меня</label>
					</div>
				</div>
				<div class="form-group">
					<button type="button" class="btn btn-primary" v-on:click="logIn">Войти</button>
				</div>
				<div class="form-group">
					<p>
						<a href="/Identity/Account/Register">Зарегистрироваться</a>
					</p>
				</div>
			</form>
		</section>
		<section v-else>
			Вы вошли успешно с Email {{userEmail}}, теперь можно вернуться на <a href="/">главную страницу</a>.
		</section>
	</div>
</template>

<script src="./login.ts" lang="ts"></script>