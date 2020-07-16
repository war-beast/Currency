import Vue from "vue";
import Component from "vue-class-component";
import RowComponent from "Components/currenciesTable/currenciesTableRow.vue";
import { Currency } from "Models/currency";
import { ApiResult } from "Models/apiResult";
import ApiRequest from "Util/request";

const currenciesListUrl = "/api/common/currencies";

@Component({
	components: {
		currencyRow: RowComponent
	}
})
export default class CurrenciesTable extends Vue {
	private currencies: Currency[] = [];
	public visibleRowCount: number;


	constructor() {
		super();

		this.visibleRowCount = 5;
		this.loadData();
	}

	private async loadData() {
		let apiRequest = new ApiRequest();
		await apiRequest.getData(currenciesListUrl)
			.then((result: ApiResult) => {
				if (result.success) {
					this.currencies = JSON.parse(result.value);
				} else {
					console.log(`Ошибка загрузки данных по url: ${currenciesListUrl}`);
				}
			});
	}
}