import Vue from "vue";
import TableComponent from "Components/currenciesTable/currenciesTable.vue";

class AppCore {
	private instance: Vue;

	constructor() {
		this.init();
	}

	private init() {
		this.instance = new Vue({
			el: "#vue-app-container",
			render: (h: any) => h(TableComponent)
		});
	}
}

new AppCore();