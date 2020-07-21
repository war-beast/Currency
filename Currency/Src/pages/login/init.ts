import Vue from "vue";
import LoginComponent from "Components/account/login.vue";
import { StoreOptions } from "vuex";
import { IRootState } from "Interfaces/profile/types";
import store from "./store";

new Vue({
	el: "#vue-account-container",
	render: (h: any) => h(LoginComponent),
	store
});