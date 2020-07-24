import { userEmail, isLogged } from "Modules/profile/types";
export const getters = {
    [userEmail](state) {
        const { user } = state;
        const email = (user && user.email) || null;
        return email;
    },
    [isLogged](state) {
        const { user } = state;
        return (user && user.email !== "" && user.email !== undefined) || false;
    }
};
//# sourceMappingURL=getters.js.map