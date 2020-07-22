import Vue from "vue";
import LoginComponent from "Components/account/login.vue";
import store from "Modules/store";

class AppCore {
	private instance: Vue;

	constructor() {
		this.init();
	}

	private init() {
		this.instance = new Vue({
			el: "#vue-account-container",
			render: (h: any) => h(LoginComponent),
			store
		});
	}
}

new AppCore();