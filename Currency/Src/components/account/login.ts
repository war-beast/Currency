import Vue from "vue";
import Component from "vue-class-component";
import ApiRequest from "Util/request";
import { ApiResult } from "Models/apiResult";
import { LoginModel, TokenResult } from "Models/account";
import Cookies from "cookies-ts";
import { State, Action, Getter } from "vuex-class";
import { IProfileState, IUser } from "Interfaces/profile/types";

const namespace = "profile";
const loginUrl = "/api/account/token";

@Component
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

	@State("profile") profile: IProfileState;
	@Action("logUserIn", { namespace: namespace }) logUserIn: any;
	@Getter("userEmail", { namespace: namespace }) userEmail: string;
	@Getter("isLogged", { namespace: namespace }) isLogged: boolean;

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
					const user = {
						email: apiResponse.username
					};
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