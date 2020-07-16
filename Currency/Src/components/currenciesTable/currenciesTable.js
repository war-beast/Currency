var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from "vue";
import Component from "vue-class-component";
import RowComponent from "Components/currenciesTable/currenciesTableRow.vue";
import { Currency } from "../../models/currency";
let CurrenciesTable = class CurrenciesTable extends Vue {
    constructor() {
        super();
        this.currencies = [];
        this.currencies.push(new Currency("aaa", "curr-1", 1.0));
        this.currencies.push(new Currency("bbb", "curr-2", 1.1));
        this.currencies.push(new Currency("ccc", "curr-3", 1.3));
        this.currencies.push(new Currency("ddd", "curr-4", 1.5));
    }
};
CurrenciesTable = __decorate([
    Component({
        components: {
            currencyRow: RowComponent
        }
    })
], CurrenciesTable);
export default CurrenciesTable;
//# sourceMappingURL=currenciesTable.js.map