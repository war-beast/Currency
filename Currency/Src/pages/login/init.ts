import Vue from "vue";
import LoginComponent from "Components/account/login.vue";

class AppCore {
	private instance: Vue;

	constructor() {
		this.init();
	}

	private init() {
		this.instance = new Vue({
			el: "#vue-account-container",
			render: (h: any) => h(LoginComponent)
		});
	}
}

new AppCore();