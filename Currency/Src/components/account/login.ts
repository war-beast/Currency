import Vue from "vue";
import Component from "vue-class-component";
import ApiRequest from "Util/request";
import { ApiResult } from "Models/apiResult";
import { LoginModel, TokenResult } from "Models/account";
import Cookies from "cookies-ts";
import { Action, Getter } from "vuex-class";
import { User } from "Models/account";
import ProfileWidget from "Components/account/profileWidget.vue";

const loginUrl = "/api/account/token";

@Component({
	components: {
		"profile-widget": ProfileWidget
	}
})
export default class LoginComponent extends Vue {
	private email: string = "";
	private password: string = "";
	private rememberMe: boolean = false;

	private formValid: boolean = true;
	private loginError: string = "";
	private readonly apiRequest: ApiRequest;

	constructor() {
		super();

		this.apiRequest = new ApiRequest();
	}

	@Action("logUserIn", { namespace: globalProfileNamespace }) logUserIn: any;
	@Getter("userEmail", { namespace: globalProfileNamespace }) userEmail: string;
	@Getter("isLogged", { namespace: globalProfileNamespace }) isLogged: boolean;

	private async logIn() {
		this.loginError = "";

		this.formValid = this.checkValid();
		if (!this.formValid) {
			this.loginError = "Необходимо заполнить все поля формы!";
			return;
		}

		const loginModel = new LoginModel(this.email, this.password, this.rememberMe);
		await this.apiRequest.postData(loginUrl, JSON.stringify(loginModel))
			.then((result: ApiResult) => {
				if (result.success) {
					const cookies = new Cookies();
					const apiResponse = ((result.value) as any) as TokenResult;
					cookies.set(globalAccessToken, apiResponse.access_token, { expires: "100d" });
					const user = new User(apiResponse.username);
					this.logUserIn(user);
				} else {
					this.loginError = `Не удалось войти по логину: ${this.email}`;
				}
			});
	}

	private checkValid(): boolean {
		return this.email !== ""
			&& this.password !== "";
	}
}