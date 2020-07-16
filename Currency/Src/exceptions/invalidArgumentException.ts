export default class InvalidArgumentException extends Error {
	/**
	 * @param {String} name Имя аргумента
	 * @param {Object} value Значение аргумента
	 */
	constructor(name: string, value: any) {
		super(`InvalidArgumentException: name:${name}, value:${value}`);
		this.name = "InvalidArgumentException";
	}
}