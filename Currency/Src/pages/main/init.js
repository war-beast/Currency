import Vue from "vue";
import TableComponent from "Components/currenciesTable/currenciesTable.vue";
import BasePage from "Pages/basePage";
class AppCore extends BasePage {
    constructor() {
        super();
        this.init();
    }
    init() {
        this.instance = new Vue({
            el: "#vue-app-container",
            render: (h) => h(TableComponent),
            store: this.store
        });
    }
}
new AppCore();
//# sourceMappingURL=init.js.map