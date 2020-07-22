import Vue from "vue";
import ProfileWidget from "Components/account/profileWidget.vue";
import store from "Modules/store";

class App {
	private instance: Vue;

	constructor() {
		this.init();
	}

	private init() {
		this.instance = new Vue({
			el: "#vue-profile-widget",
			render: (h: any) => h(ProfileWidget),
			store
		});
	}
}

new App();