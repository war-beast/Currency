import Vue from "vue";
import Component from "vue-class-component";
const logoutUrl = "/api/account/logout";

@Component
export default class ClearPage extends Vue {
	constructor() {
		super();
	}
};