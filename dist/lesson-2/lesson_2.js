class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
class Mercedes extends Car {
    constructor(model, year) {
        super('Mercedes', model, year);
    }
    displayInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}`);
    }
}
class Toyota extends Car {
    constructor(model, year) {
        super('Toyota', model, year);
    }
    displayInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}`);
    }
}
class Ford extends Car {
    constructor(model, year) {
        super('Ford', model, year);
    }
    displayInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}`);
    }
}
const mercedes1 = new Mercedes('E-Class', 2022);
const mercedes2 = new Mercedes('S-Class', 2023);
const toyota1 = new Toyota('Camry', 2022);
const toyota2 = new Toyota('Corolla', 2023);
const ford1 = new Ford('Focus', 2022);
const ford2 = new Ford('Mustang', 2023);
mercedes1.displayInfo();
mercedes2.displayInfo();
toyota1.displayInfo();
toyota2.displayInfo();
ford1.displayInfo();
ford2.displayInfo();
//# sourceMappingURL=lesson_2.js.map