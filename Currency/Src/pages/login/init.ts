import Vue from "vue";
import LoginComponent from "Components/account/login.vue";
import store from "Modules/store";

new Vue({
	el: "#vue-account-container",
	render: (h: any) => h(LoginComponent),
	store
});