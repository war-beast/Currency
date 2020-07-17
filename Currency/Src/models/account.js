export class RegisterModel {
    constructor(email, password, confirmPassword) {
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}
export class LoginModel {
    constructor(email, password, rememberMe) {
        this.rememberMe = false;
        this.email = email;
        this.password = password;
        this.rememberMe = rememberMe;
    }
}
export class TokenResult {
    constructor(access_token, username) {
        this.access_token = access_token;
        this.username = username;
    }
}
//# sourceMappingURL=account.js.map