import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: undefined,
        error: false
    },
    mutations: {
        PROFILE_LOADED(state, payload) {
            state.error = false;
            state.user = payload;
        }
    },
    actions: {
        addToDo(context, user) {
            context.commit("PROFILE_LOADED", user);
        }
    },
    getters: {
        userName(state) {
            const { user } = state;
            const email = (user && user.email) || "";
            return email;
        }
    }
});
//# sourceMappingURL=store.js.map