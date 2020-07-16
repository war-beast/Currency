import Vue from "vue";
import Component from "vue-class-component";
import RowComponent from "Components/currenciesTable/currenciesTableRow.vue";
import { Currency } from "../../models/currency";

@Component({
	components: {
		currencyRow: RowComponent
	}
})
export default class CurrenciesTable extends Vue {
	private currencies: Currency[] = [];

	constructor() {
		super();

		this.currencies.push(new Currency("aaa", "curr-1", 1.0));
		this.currencies.push(new Currency("bbb", "curr-2", 1.1));
		this.currencies.push(new Currency("ccc", "curr-3", 1.3));
		this.currencies.push(new Currency("ddd", "curr-4", 1.5));
	}
}