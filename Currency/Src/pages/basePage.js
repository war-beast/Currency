import Store from "Modules/store";
import Profile from "Pages/shared/profileWidget";
export default class BasePage {
    constructor() {
        this.store = Store;
        setTimeout(() => {
            this.initProfile();
        }, 0);
    }
    initProfile() {
        this.profile = new Profile(this.store);
    }
}
//# sourceMappingURL=basePage.js.map