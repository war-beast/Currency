import Vue from "vue";
import RegisterComponent from "Components/account/register.vue";
class AppCore {
    constructor() {
        this.init();
    }
    init() {
        this.instance = new Vue({
            el: "#vue-account-container",
            render: (h) => h(RegisterComponent)
        });
    }
}
new AppCore();
//# sourceMappingURL=init.js.map