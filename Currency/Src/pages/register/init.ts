import Vue from "vue";
import RegisterComponent from "Components/account/register.vue";
import BasePage from "Pages/basePage";

class AppCore extends BasePage {
	constructor() {
		super();
		this.init();
	}

	private init() {
		this.instance = new Vue({
			el: "#vue-account-container",
			render: (h: any) => h(RegisterComponent),
			store: this.store
		});
	}
}

new AppCore();