import Vue from "vue";
import Component from "vue-class-component";
import { Action, Getter } from "vuex-class";
import ApiRequest from "Util/request";
import Cookies from "cookies-ts";

@Component
export class ProfileWidget extends Vue {
	private readonly apiRequest: ApiRequest;

	@Action("logUserOut", { namespace: globalProfileNamespace }) logUserOut: any;
	@Getter("userEmail", { namespace: globalProfileNamespace }) userEmail: string;
	@Getter("isLogged", { namespace: globalProfileNamespace }) isLogged: boolean;

	private logOut(): void {
		const cookies = new Cookies();
		cookies.remove(globalAccessToken);
		this.logUserOut();
	}
};