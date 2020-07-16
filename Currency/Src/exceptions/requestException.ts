export default class RequestException extends Error {
	constructor(url: string) {
		super(`RequestException: ${url}`);
		this.name = "RequestException";
	}
}