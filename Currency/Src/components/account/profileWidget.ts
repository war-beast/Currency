import Vue from "vue";
import Component from "vue-class-component";
import { Action, Getter } from "vuex-class";
import ApiRequest from "Util/request";
import Cookies from "cookies-ts";
import { ApiResult } from "Models/apiResult";

const logoutUrl = "/api/account/logout";

@Component
export default class ProfileWidget extends Vue {
	private readonly apiRequest: ApiRequest;
	private name: string = "profile-widget";

	constructor() {
		super();
		this.apiRequest = new ApiRequest();
	}

	@Action("logUserOut", { namespace: globalProfileNamespace }) logUserOut: any;
	@Getter("userEmail", { namespace: globalProfileNamespace }) userEmail: string;
	@Getter("isLogged", { namespace: globalProfileNamespace }) isLogged: boolean;

	private async logOut() {
		await this.apiRequest.getData(logoutUrl)
			.then((result: ApiResult) => {
				if (result.success) {
					const cookies = new Cookies();
					cookies.remove(globalAccessToken);
					this.logUserOut();
				}
			});
	}
};