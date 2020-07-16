import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Currency } from "Models/currency";

@Component
export default class RowComponent extends Vue {
	@Prop()
	private currency: Currency;
	@Prop()
	private showDetails: Function;
}