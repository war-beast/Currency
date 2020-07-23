import Vue from "vue";
import ClearPageComponent from "Components/clearPage/page.vue";
import BasePage from "Pages/basePage";

class AppCore extends BasePage {
	constructor() {
		super();
		this.init();
	}

	private init() {
		this.instance = new Vue({
			el: "#vue-app-container",
			render: (h: any) => h(ClearPageComponent),
			store: this.store
		});
	}
}

new AppCore();