import Vue from "vue";
import LoginComponent from "Components/account/login.vue";
import store from "./store";
new Vue({
    el: "#vue-account-container",
    render: (h) => h(LoginComponent),
    store
});
//# sourceMappingURL=init.js.map