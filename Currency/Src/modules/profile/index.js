import { getters } from "Modules/profile/getters";
import { actions } from "Modules/profile/actions";
import { mutations } from "Modules/profile/mutations";
export const state = {
    user: undefined,
    error: false
};
const namespaced = true;
export const profile = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};
//# sourceMappingURL=index.js.map