import { IUser } from "Interfaces/profile/types";

export class RegisterModel {
	private email: string;
	private password: string;
	private confirmPassword: string;

	constructor(email: string, password: string, confirmPassword: string) {
		this.email = email;
		this.password = password;
		this.confirmPassword = confirmPassword;
	}
}

export class LoginModel {
	private email: string;
	private password: string;
	private rememberMe: boolean = false;

	constructor(email: string, password: string, rememberMe: boolean) {
		this.email = email;
		this.password = password;
		this.rememberMe = rememberMe;
	}
}

export class TokenResult {
	readonly  access_token: string;
	readonly  username: string;

	constructor(access_token: string, username: string) {
		this.access_token = access_token;
		this.username = username;
	}
}

export class User implements IUser {
	email: string;

	constructor(email: string) {
		this.email = email;
	}
}