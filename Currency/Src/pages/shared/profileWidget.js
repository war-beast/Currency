import Vue from "vue";
import ProfileWidget from "Components/account/profileWidget.vue";
export default class Profile {
    constructor(store) {
        this.init(store);
    }
    init(store) {
        this.instance = new Vue({
            el: "#vue-profile-widget",
            render: (h) => h(ProfileWidget),
            store: store
        });
    }
}
//# sourceMappingURL=profileWidget.js.map