import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { IRootState } from "Interfaces/profile/types";
import { profile } from "Modules/profile/index";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
	state: {
		version: "1.0.0" // a simple property
	},
	modules: {
		profile
	},
	plugins: [createPersistedState()]
};

export default new Vuex.Store<IRootState>(store);