import { Vue, Component } from "vue-property-decorator";
import ApiRequest from "Util/request";
import { RegisterModel } from "Models/account";
import { ApiResult } from "Models/apiResult";

const registerUrl = "/api/account/register";

@Component
export default class RegisterComponent extends Vue {
	private email: string = "";
	private password: string = "";
	private confirmPassword: string = "";

	private formValid: boolean = true;
	private isRegistrationSuccess = false;
	private registerError: string = "";
	private readonly apiRequest: ApiRequest;

	constructor() {
		super();

		this.apiRequest = new ApiRequest();
	}

	private async register() {
		this.registerError = "";

		this.formValid = this.checkValid();
		if (!this.formValid) {
			this.registerError = "Проверьте правильность заполнения полей формы!";
			return;
		}

		const loginModel = new RegisterModel(this.email, this.password, this.confirmPassword);
		await this.apiRequest.postData(registerUrl, JSON.stringify(loginModel))
			.then((result: ApiResult) => {
				if (result.success) {
					this.isRegistrationSuccess = true;
				} else {
					this.registerError = `Не удалось войти по логину: ${this.email}`;
				}
			});
	}

	private checkValid(): boolean {
		return this.email !== ""
			&& this.password !== ""
			&& this.confirmPassword !== ""
			&& this.password === this.confirmPassword;
	}
}