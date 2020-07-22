var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from "vue";
import Component from "vue-class-component";
import { Action, Getter } from "vuex-class";
import Cookies from "cookies-ts";
let ProfileWidget = class ProfileWidget extends Vue {
    logOut() {
        const cookies = new Cookies();
        cookies.remove(globalAccessToken);
        this.logUserOut();
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
export { ProfileWidget };
;
//# sourceMappingURL=profileWidget.js.map