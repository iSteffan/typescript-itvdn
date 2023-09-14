import { Car } from './base-class';
// Похідний клас для марки "Mercedes"
export class Mercedes extends Car {
  constructor(model: string, year: number) {
    super('Mercedes', model, year);
  }

  displayInfo(): void {
    console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}`);
  }
}

// Похідний клас для марки "Toyota"
export class Toyota extends Car {
  constructor(model: string, year: number) {
    super('Toyota', model, year);
  }

  displayInfo(): void {
    console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}`);
  }
}

// Похідний клас для марки "Ford"
export class Ford extends Car {
  constructor(model: string, year: number) {
    super('Ford', model, year);
  }

  displayInfo(): void {
    console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}`);
  }
}
