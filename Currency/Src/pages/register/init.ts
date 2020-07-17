import Vue from "vue";
import RegisterComponent from "Components/account/register.vue";

class AppCore {
	private instance: Vue;

	constructor() {
		this.init();
	}

	private init() {
		this.instance = new Vue({
			el: "#vue-account-container",
			render: (h: any) => h(RegisterComponent)
		});
	}
}

new AppCore();