import Vue from "vue";
import TableComponent from "Components/currenciesTable/currenciesTable.vue";
class AppCore {
    constructor() {
        this.init();
    }
    init() {
        this.instance = new Vue({
            el: "#vue-app-container",
            render: (h) => h(TableComponent)
        });
    }
}
new AppCore();
//# sourceMappingURL=init.js.map