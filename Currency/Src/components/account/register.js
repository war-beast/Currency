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
import { Vue, Component } from "vue-property-decorator";
import ApiRequest from "Util/request";
import { RegisterModel } from "Models/account";
const registerUrl = "/api/account/register";
let RegisterComponent = class RegisterComponent extends Vue {
    constructor() {
        super();
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
        this.formValid = true;
        this.isRegistrationSuccess = false;
        this.registerError = "";
        this.apiRequest = new ApiRequest();
    }
    register() {
        return __awaiter(this, void 0, void 0, function* () {
            this.registerError = "";
            this.formValid = this.checkValid();
            if (!this.formValid) {
                this.registerError = "Проверьте правильность заполнения полей формы!";
                return;
            }
            const loginModel = new RegisterModel(this.email, this.password, this.confirmPassword);
            yield this.apiRequest.postData(registerUrl, JSON.stringify(loginModel))
                .then((result) => {
                if (result.success) {
                    this.isRegistrationSuccess = true;
                }
                else {
                    this.registerError = `Не удалось войти по логину: ${this.email}`;
                }
            });
        });
    }
    checkValid() {
        return this.email !== ""
            && this.password !== ""
            && this.confirmPassword !== ""
            && this.password === this.confirmPassword;
    }
};
RegisterComponent = __decorate([
    Component
], RegisterComponent);
export default RegisterComponent;
//# sourceMappingURL=register.js.map