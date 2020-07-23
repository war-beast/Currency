import Vue from "vue";
import RegisterComponent from "Components/account/register.vue";
import BasePage from "Pages/basePage";
class AppCore extends BasePage {
    constructor() {
        super();
        this.init();
    }
    init() {
        this.instance = new Vue({
            el: "#vue-account-container",
            render: (h) => h(RegisterComponent),
            store: this.store
        });
    }
}
new AppCore();
//# sourceMappingURL=init.js.map