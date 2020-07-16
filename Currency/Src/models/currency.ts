export class Currency {
	public id: string;
	public name: string;
	public rate: number;

	constructor(id: string, name: string, rate: number) {
		this.id = id;
		this.name = name;
		this.rate = rate;
	}
}