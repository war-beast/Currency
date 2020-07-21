export const getters = {
    userEmail(state) {
        const { user } = state;
        const email = (user && user.email) || "";
        return email;
    }
};
//# sourceMappingURL=getters.js.map