import Vue from "vue";
import TableComponent from "Components/currenciesTable/currenciesTable.vue";
import store from "Modules/store";

class AppCore {
	private instance: Vue;

	constructor() {
		this.init();
	}

	private init() {
		this.instance = new Vue({
			el: "#vue-app-container",
			render: (h: any) => h(TableComponent),
			store
		});
	}
}

new AppCore();