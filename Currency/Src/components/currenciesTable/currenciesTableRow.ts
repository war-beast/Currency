import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Currency } from "../../models/currency";

@Component
export default class RowComponent extends Vue {
	@Prop()
	public currency: Currency;
}