import Vue from "vue";
import LoginComponent from "Components/account/login.vue";
import BasePage from "Pages/basePage";

class AppCore extends BasePage {
	constructor() {
		super();
		this.init();
	}

	private init() {
		this.instance = new Vue({
			el: "#vue-account-container",
			render: (h: any) => h(LoginComponent),
			store: this.store
		});
	}
}

new AppCore();