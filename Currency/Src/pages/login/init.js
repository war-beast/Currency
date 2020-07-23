import Vue from "vue";
import LoginComponent from "Components/account/login.vue";
import BasePage from "Pages/basePage";
class AppCore extends BasePage {
    constructor() {
        super();
        this.init();
    }
    init() {
        this.instance = new Vue({
            el: "#vue-account-container",
            render: (h) => h(LoginComponent),
            store: this.store
        });
    }
}
new AppCore();
//# sourceMappingURL=init.js.map