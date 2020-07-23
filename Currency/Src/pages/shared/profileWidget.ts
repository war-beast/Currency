import Vue from "vue";
import ProfileWidget from "Components/account/profileWidget.vue";

export default class Profile {
	protected instance: Vue;

	constructor(store: any) {
		this.init(store);
	}

	private init(store: any) {
		this.instance = new Vue({
			el: "#vue-profile-widget",
			render: (h: any) => h(ProfileWidget),
			store: store
		});
	}
}