import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { IRootState } from "Interfaces/profile/types";
import { profile } from "Modules/profile/index";

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
	state: {
		version: '1.0.0' // a simple property
	},
	modules: {
		profile
	}
};

export default new Vuex.Store<IRootState>(store);