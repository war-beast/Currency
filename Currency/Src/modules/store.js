import Vue from "vue";
import Vuex from "vuex";
import { profile } from "Modules/profile/index";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);
const store = {
    state: {
        version: "1.0.0" // a simple property
    },
    modules: {
        profile
    },
    plugins: [createPersistedState()]
};
export default new Vuex.Store(store);
//# sourceMappingURL=store.js.map