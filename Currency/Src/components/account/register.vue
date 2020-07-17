<template>
	<div class="row">
		<section v-if="!isRegistrationSuccess">
			<form v-bind:class="{ 'was-validated': !formValid }">
				<h4>Создание нового аккаунта <span class="text-muted">(все поля заполнить обязательно)</span></h4>
				<hr />
				<div class="text-danger" v-if="loginError != ''">{{registerError}}</div>
				<div class="form-group">
					<label for="emailField">Email</label>
					<input id="emailField" class="form-control" required="" type="email" v-model="email" />
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
					<label for="confirmPasswordField">Подтверждение пароля</label>
					<input id="confirmPasswordField" class="form-control" required="" type="password" v-model="confirmPassword" />
					<div class="invalid-feedback">
						Пожалуйста введите подтверждение пароля
					</div>
				</div>
				<button type="button" class="btn btn-primary" v-on:click="register">Зарегистрироваться</button>
			</form>
		</section>
		<section v-else>
			Вы успешно зарегистрировались, теперь можно <a href="/Identity/Account/Login">войти</a> с этими учётными данными, чтобы увидеть курсы валют на главной странице.
		</section>
	</div>
</template>

<script src="./register.ts" lang="ts"></script>