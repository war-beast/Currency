import Vue from "vue";
import Component from "vue-class-component";
import ApiRequest from "Util/request";
import { ApiResult } from "Models/apiResult";
import { LoginModel, TokenResult } from "Models/account";
import Cookies from "cookies-ts"

const loginUrl = "/api/account/token";

@Component
export default class LoginComponent extends Vue {
	private email: string = "";
	private password: string = "";
	private rememberMe: boolean = false;

	private formValid: boolean = true;
	private loginError: string = "";
	private userName: string = "";
	private readonly apiRequest: ApiRequest;

	constructor() {
		super();

		this.apiRequest = new ApiRequest();
	}


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
					this.userName = apiResponse.username;
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