export class ApiResult {
	public success: boolean;
	public value: string;

	constructor(success: boolean, value: string) {
		this.success = success;
		this.value = value;
	}
}