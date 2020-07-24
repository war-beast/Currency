import { CLEAR_PROFILE, PROFILE_LOADED } from "Modules/profile/types";
export const mutations = {
    [PROFILE_LOADED](state, payload) {
        state.error = false;
        state.user = payload;
    },
    [CLEAR_PROFILE](state) {
        state.error = false;
        state.user = undefined;
    }
};
//# sourceMappingURL=mutations.js.map