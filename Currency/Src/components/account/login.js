var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Vue from "vue";
import Component from "vue-class-component";
import ApiRequest from "Util/request";
import { LoginModel } from "Models/account";
import Cookies from "cookies-ts";
import { State, Action, Getter } from "vuex-class";
const namespace = "profile";
const loginUrl = "/api/account/token";
let LoginComponent = class LoginComponent extends Vue {
    constructor() {
        super();
        this.email = "";
        this.password = "";
        this.rememberMe = false;
        this.formValid = true;
        this.loginError = "";
        this.apiRequest = new ApiRequest();
    }
    //@myNamespace.State("profile") profile: IProfileState;
    //@myNamespace.Action("logIn") logUserIn: any;
    //@myNamespace.Getter("userEmail") userName: string;
    logIn() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loginError = "";
            this.formValid = this.checkValid();
            if (!this.formValid) {
                this.loginError = "Необходимо заполнить все поля формы!";
                return;
            }
            const loginModel = new LoginModel(this.email, this.password, this.rememberMe);
            yield this.apiRequest.postData(loginUrl, JSON.stringify(loginModel))
                .then((result) => {
                if (result.success) {
                    const cookies = new Cookies();
                    const apiResponse = (result.value);
                    cookies.set(globalAccessToken, apiResponse.access_token, { expires: "100d" });
                    const user = {
                        email: apiResponse.username
                    };
                    this.logUserIn(user);
                    this.userName = apiResponse.username;
                }
                else {
                    this.loginError = `Не удалось войти по логину: ${this.email}`;
                }
            });
        });
    }
    checkValid() {
        return this.email !== ""
            && this.password !== "";
    }
};
__decorate([
    State("profile")
], LoginComponent.prototype, "profile", void 0);
__decorate([
    Action("logUserIn", { namespace: namespace })
], LoginComponent.prototype, "logUserIn", void 0);
__decorate([
    Getter("userEmail", { namespace: namespace })
], LoginComponent.prototype, "userName", void 0);
LoginComponent = __decorate([
    Component
], LoginComponent);
export default LoginComponent;
//# sourceMappingURL=login.js.map