import Vue from "vue";
import LoginComponent from "Components/account/login.vue";
class AppCore {
    constructor() {
        this.init();
    }
    init() {
        this.instance = new Vue({
            el: "#vue-account-container",
            render: (h) => h(LoginComponent)
        });
    }
}
new AppCore();
//# sourceMappingURL=init.js.map