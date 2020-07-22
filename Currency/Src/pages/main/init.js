import Vue from "vue";
import TableComponent from "Components/currenciesTable/currenciesTable.vue";
import store from "Modules/store";
class AppCore {
    constructor() {
        this.init();
    }
    init() {
        this.instance = new Vue({
            el: "#vue-app-container",
            render: (h) => h(TableComponent),
            store
        });
    }
}
new AppCore();
//# sourceMappingURL=init.js.map