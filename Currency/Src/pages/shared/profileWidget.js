import Vue from "vue";
import ProfileWidget from "Components/account/profileWidget.vue";
import store from "Modules/store";
class App {
    constructor() {
        this.init();
    }
    init() {
        this.instance = new Vue({
            el: "#vue-profile-widget",
            render: (h) => h(ProfileWidget),
            store
        });
    }
}
new App();
//# sourceMappingURL=profileWidget.js.map