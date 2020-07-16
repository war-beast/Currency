import Vue from "vue";
import Component from "vue-class-component";
import RowComponent from "Components/currenciesTable/currenciesTableRow.vue";
import { Currency } from "Models/currency";
import { ApiResult } from "Models/apiResult";
import ApiRequest from "Util/request";

const currenciesListUrl = "/api/common/currencies";
const currenciesTotalCountUrl = "/api/common/currencyCount";
const currencyDetails = "/api/common/currency";

@Component({
	components: {
		currencyRow: RowComponent
	}
})
export default class CurrenciesTable extends Vue {
	private currencies: Currency[] = [];
	private selectedCurrency: Currency = null;
	private totalCount: number = 0;
	private pageCount: number = 0;
	private visibleRowCount: number = 5;
	private page: number = 1;
	private isInfoVisible: boolean = false;

	constructor() {
		super();

		this.loadCount();
		this.loadData(this.page, this.visibleRowCount);
	}

	public showPrevious() {
		if (this.page > 1)
			this.loadData(--this.page, this.visibleRowCount);
	}

	public showNext() {
		if (this.page < this.pageCount) 
			this.loadData(++this.page, this.visibleRowCount);
	}

	public async showDetails(id: string) {
		let apiRequest = new ApiRequest();
		await apiRequest.getData(`${currencyDetails}?id=${id}`)
			.then((result: ApiResult) => {
				if (result.success) {
					this.selectedCurrency = JSON.parse(result.value);
					this.isInfoVisible = true;
				} else {
					console.log(`Ошибка загрузки данных по url: ${currencyDetails}`);
				}
			});
	}

	private hideInfoModal(): void {
		this.isInfoVisible = false;
		this.selectedCurrency = null;
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