import Store from "Modules/store";
import Profile from "Pages/shared/profileWidget";
export default class BasePage {
    constructor() {
        this.store = Store;
        setTimeout(() => {
            //аналогичным образом инициализируются все компоненты, 
            //которые рендерятся вне основного приложения
            this.initProfile();
        }, 0);
    }
    initProfile() {
        this.profile = new Profile(this.store);
    }
}
//# sourceMappingURL=basePage.js.map