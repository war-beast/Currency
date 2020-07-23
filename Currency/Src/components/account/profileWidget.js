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
import { Action, Getter } from "vuex-class";
import ApiRequest from "Util/request";
import Cookies from "cookies-ts";
const logoutUrl = "/api/account/logout";
let ProfileWidget = class ProfileWidget extends Vue {
    constructor() {
        super();
        this.name = "profile-widget";
        this.apiRequest = new ApiRequest();
    }
    logOut() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiRequest.getData(logoutUrl)
                .then((result) => {
                if (result.success) {
                    const cookies = new Cookies();
                    cookies.remove(globalAccessToken);
                    this.logUserOut();
                }
            });
        });
    }
};
__decorate([
    Action("logUserOut", { namespace: globalProfileNamespace })
], ProfileWidget.prototype, "logUserOut", void 0);
__decorate([
    Getter("userEmail", { namespace: globalProfileNamespace })
], ProfileWidget.prototype, "userEmail", void 0);
__decorate([
    Getter("isLogged", { namespace: globalProfileNamespace })
], ProfileWidget.prototype, "isLogged", void 0);
ProfileWidget = __decorate([
    Component
], ProfileWidget);
export default ProfileWidget;
;
//# sourceMappingURL=profileWidget.js.map