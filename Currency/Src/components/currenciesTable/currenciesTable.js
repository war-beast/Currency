var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Vue from "vue";
import Component from "vue-class-component";
import RowComponent from "Components/currenciesTable/currenciesTableRow.vue";
import ApiRequest from "Util/request";
const currenciesListUrl = "/api/common/currencies";
const currenciesTotalCountUrl = "/api/common/currencyCount";
const currencyDetails = "/api/common/currency";
let CurrenciesTable = class CurrenciesTable extends Vue {
    constructor() {
        super();
        this.currencies = [];
        this.selectedCurrency = null;
        this.totalCount = 0;
        this.pageCount = 0;
        this.visibleRowCount = 5;
        this.page = 1;
        this.isInfoVisible = false;
        this.apiRequest = new ApiRequest();
        setTimeout(() => {
            this.loadCount();
            this.loadData(this.page, this.visibleRowCount);
        }, 0);
    }
    showPrevious() {
        if (this.page > 1)
            this.loadData(--this.page, this.visibleRowCount);
    }
    showNext() {
        if (this.page < this.pageCount)
            this.loadData(++this.page, this.visibleRowCount);
    }
    showDetails(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiRequest.getData(`${currencyDetails}?id=${id}`)
                .then((result) => {
                if (result.success) {
                    this.selectedCurrency = JSON.parse(result.value);
                    this.isInfoVisible = true;
                }
                else {
                    console.log(`Ошибка загрузки данных по url: ${currencyDetails}`);
                }
            });
        });
    }
    hideInfoModal() {
        this.isInfoVisible = false;
        this.selectedCurrency = null;
    }
    loadData(page, pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiRequest.getData(`${currenciesListUrl}?page=${page}&pageSize=${pageSize}`)
                .then((result) => {
                if (result.success) {
                    this.currencies = JSON.parse(result.value);
                }
                else {
                    console.log(`Ошибка загрузки данных по url: ${currenciesListUrl}`);
                }
            });
        });
    }
    loadCount() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiRequest.getData(currenciesTotalCountUrl)
                .then((result) => {
                if (result.success) {
                    this.totalCount = JSON.parse(result.value);
                    this.pageCount = Math.ceil(this.totalCount / this.visibleRowCount);
                }
                else {
                    console.log(`Ошибка загрузки данных по url: ${currenciesListUrl}`);
                }
            });
        });
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