import { Car } from './base-class';
export class Mercedes extends Car {
    constructor(model, year) {
        super('Mercedes', model, year);
    }
    displayInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}`);
    }
}
export class Toyota extends Car {
    constructor(model, year) {
        super('Toyota', model, year);
    }
    displayInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}`);
    }
}
export class Ford extends Car {
    constructor(model, year) {
        super('Ford', model, year);
    }
    displayInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}`);
    }
}
//# sourceMappingURL=car-classes.js.map