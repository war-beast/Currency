import { Vue, Component } from "vue-property-decorator";
import RowComponent from "Components/currenciesTable/currenciesTableRow.vue";
import { Currency } from "Models/currency";
import { ApiResult } from "Models/apiResult";
import ApiRequest from "Util/request";
import { Action, Getter } from "vuex-class";

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

	private readonly apiRequest: ApiRequest;

	constructor() {
		super();

		this.apiRequest = new ApiRequest();
		setTimeout(() => {
			this.loadCount();
			this.loadData(this.page, this.visibleRowCount);
		}, 0);
	}

	@Action("logUserOut", { namespace: globalProfileNamespace }) logUserOut: any;
	@Getter("isLogged", { namespace: globalProfileNamespace }) isLogged: boolean;

	public showPrevious() {
		if (this.page > 1)
			this.loadData(--this.page, this.visibleRowCount);
	}

	public showNext() {
		if (this.page < this.pageCount)
			this.loadData(++this.page, this.visibleRowCount);
	}

	public async showDetails(id: string) {
		await this.apiRequest.getData(`${currencyDetails}/${id}`)
			.then((result: ApiResult) => {
				if (result.success) {
					this.selectedCurrency = JSON.parse(result.value);
					this.isInfoVisible = true;
				} else {
					console.log(`Ошибка загрузки данных по url: ${currencyDetails}`);

					this.logOut(result.value);
				}
			});
	}

	private logOut(authorizationResultError: string): void {
		if (authorizationResultError.indexOf("401") !== -1) {
			this.logUserOut();
		}
	}

	private hideInfoModal(): void {
		this.isInfoVisible = false;
		this.selectedCurrency = null;
	}

	private async loadData(page: number, pageSize: number) {
		await this.apiRequest.getData(`${currenciesListUrl}/${pageSize}/${page}`)
			.then((result: ApiResult) => {
				if (result.success) {
					this.currencies = JSON.parse(result.value);
				} else {
					console.log(`Ошибка загрузки данных по url: ${currenciesListUrl}`);

					this.logOut(result.value);
				}
			});
	}

	private async loadCount() {
		await this.apiRequest.getData(currenciesTotalCountUrl)
			.then((result: ApiResult) => {
				if (result.success) {
					this.totalCount = JSON.parse(result.value) as number;
					this.pageCount = Math.ceil(this.totalCount / this.visibleRowCount);
				} else {
					console.log(`Ошибка загрузки данных по url: ${currenciesListUrl}`);
					this.logOut(result.value);
				}
			});
	}
}