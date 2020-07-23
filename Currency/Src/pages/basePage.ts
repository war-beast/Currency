import Vue from "vue";
import Store from "Modules/store";
import Profile from "Pages/shared/profileWidget";

export default class BasePage {
	protected instance: Vue;
	protected store: any;
	private profile: Profile;

	constructor() {
		this.store = Store;
		setTimeout(() => {
			//аналогичным образом инициализируются все компоненты, 
			//которые рендерятся вне основного приложения
			this.initProfile();
		}, 0);
	}


	private initProfile() {
		this.profile = new Profile(this.store);
	}
}