import { logUserIn, logUserOut } from "Modules/profile/types";
export const actions = {
    [logUserIn]({ commit }, user) {
        commit("PROFILE_LOADED", user);
    },
    [logUserOut]({ commit }) {
        commit("CLEAR_PROFILE");
    }
};
//# sourceMappingURL=actions.js.map