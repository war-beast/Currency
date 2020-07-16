import Vue from "vue";
import Component from "vue-class-component";
import RowComponent from "Components/currenciesTable/currenciesTableRow.vue";
import { Currency } from "Models/currency";
import { ApiResult } from "Models/apiResult";
import ApiRequest from "Util/request";

const currenciesListUrl = "/api/common/currencies";
const currenciesTotalCountUrl = "/api/common/currencyCount";

@Component({
	components: {
		currencyRow: RowComponent
	}
})
export default class CurrenciesTable extends Vue {
	private currencies: Currency[] = [];
	private totalCount: number = 0;
	private pageCount: number = 0;

	private visibleRowCount: number = 5;
	private page: number = 1;

	constructor() {
		super();

		this.loadCount();
		this.loadData(this.page, this.visibleRowCount);
	}

	public showPrevious() {
		if (this.page > 1) {
			this.loadData(--this.page, this.visibleRowCount);
		}
	}

	public showNext() {
		if (this.page < this.pageCount) {
			this.loadData(++this.page, this.visibleRowCount);
		}
	}

	private async loadData(page: number, pageSize: number) {
		let apiRequest = new ApiRequest();
		await apiRequest.getData(`${currenciesListUrl}?page=${page}&pageSize=${pageSize}`)
			.then((result: ApiResult) => {
				if (result.success) {
					this.currencies = JSON.parse(result.value);
				} else {
					console.log(`Ошибка загрузки данных по url: ${currenciesListUrl}`);
				}
			});
	}

	private async loadCount() {
		let apiRequest = new ApiRequest();

		await apiRequest.getData(currenciesTotalCountUrl)
			.then((result: ApiResult) => {
				if (result.success) {
					this.totalCount = JSON.parse(result.value) as number;
					this.pageCount = Math.ceil(this.totalCount / this.visibleRowCount);
				} else {
					console.log(`Ошибка загрузки данных по url: ${currenciesListUrl}`);
				}
			});
	}
}