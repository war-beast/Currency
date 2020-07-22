<ul class="navbar-nav">	
	<d v-if="isLogged">
		<li class="nav-item">
			<a class="nav-link text-dark" asp-area="Identity" asp-page="/Account/Manage/Index" title="Manage">Привет {{userEmail}}</a>
		</li>
		<li class="nav-item">
			<button type="button" class="nav-link btn btn-link text-dark" v-on:click="logOut">Выйти</button>
		</li>
	</d>
	<d v-else>
		<li class="nav-item">
			<a class="nav-link text-dark" asp-area="Identity" asp-page="/Account/Register">Регистрация</a>
		</li>
		<li class="nav-item">
			<a class="nav-link text-dark" asp-area="Identity" asp-page="/Account/Login">Вход</a>
		</li>
	</d>
</ul>

<script lang="ts" src="profileWidget.ts"></script>