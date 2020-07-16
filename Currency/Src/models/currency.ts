export class Currency {
	readonly id: string;
	readonly name: string;
	readonly rate: number;

	constructor(id: string, name: string, rate: number) {
		this.id = id;
		this.name = name;
		this.rate = rate;
	}
}