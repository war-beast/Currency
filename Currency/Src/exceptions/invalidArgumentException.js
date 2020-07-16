export default class InvalidArgumentException extends Error {
    /**
     * @param {String} name Имя аргумента
     * @param {Object} value Значение аргумента
     */
    constructor(name, value) {
        super(`InvalidArgumentException: name:${name}, value:${value}`);
        this.name = "InvalidArgumentException";
    }
}
//# sourceMappingURL=invalidArgumentException.js.map