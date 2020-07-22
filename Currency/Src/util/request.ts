import axios from "axios";
import RequestException from "Exceptions/requestException";
import { ApiResult } from "Models/apiResult";
import Cookies from "cookies-ts"

export default class ApiRequest {
	private token: string;

	constructor() {
		const cookies = new Cookies();
		this.token = cookies.get(globalAccessToken);
	}

	public async getData(url: string) {
		return await this.sendGetRequest(url)
			.then((result: ApiResult) => {
				return result;
			});
	}

	public async postData(url: string, data: string) {
		return await this.sendPostRequest(url, data)
			.then((result: ApiResult) => {
				return result;
			});
	}

	private async sendGetRequest(url: string) {
		return await axios.get(url,
			{
				headers: {
					"Accept": "application/json",
					"Authorization": "Bearer " + this.token
				}
			}).then((result) => {
				return new ApiResult(true, result.data);
			}).catch((error) => {
				return this.getErrorResult(error, url);
			});
	}

	private async sendPostRequest(url: string, data: string) {
		return await axios.post(url,
			data,
			{
				headers: {
					"Accept": "application/json",
					"Content-type": "application/json;charset=utf-8",
					"Authorization": "Bearer " + this.token
				}
			}).then((result) => {
				var res = new ApiResult(true, result.data);
				return res;
			}).catch((error) => {
				return this.getErrorResult(error, url);
			});
	}

	private getErrorResult(error: any, url: string) {
		const errorResult = new ApiResult(false, "");
		if (error.response.data !== undefined && error.response.data !== "") {
			console.error(new RequestException(url), error.response.data);
			errorResult.value = error.response.data.title;
		} else {
			console.error(new RequestException(url), error.message);
			errorResult.value = error.message;
		}
		return errorResult;
	}
}