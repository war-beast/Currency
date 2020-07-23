import Vue from "vue";
import TableComponent from "Components/currenciesTable/currenciesTable.vue";
import BasePage from "Pages/basePage";

class AppCore extends BasePage {
	constructor() {
		super();
		this.init();
	}

	private init() {
		this.instance = new Vue({
			el: "#vue-app-container",
			render: (h: any) => h(TableComponent),
			store: this.store
		});
	}
}

new AppCore();