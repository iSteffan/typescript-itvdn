// Завдання 2
// Створити поняття абстрактного батьківського класу Car. Від нього створити 3 похідні класи (марки
// автомобілів) із застосуванням методу super(). У класах використовувати модифікатори як у
// батьківському класі, і у похідних. Створити від похідних класів мінімум по 2 екземпляри (моделі
// автомобілів). Методи у похідних класах повинні виводити на екран усі властивості (опис
// автомобіля). Подумайте, які властивості у похідних класах мають бути public, які – private та
// protected.

// Абстрактний батьківський клас Car
abstract class Car {
  protected brand: string;
  protected model: string;
  public year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Абстрактний метод для виводу інформації про автомобіль
  abstract displayInfo(): void;
}

// Похідний клас для марки "Mercedes"
class Mercedes extends Car {
  constructor(model: string, year: number) {
    super('Mercedes', model, year);
  }

  displayInfo(): void {
    console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}`);
  }
}

// Похідний клас для марки "Toyota"
class Toyota extends Car {
  constructor(model: string, year: number) {
    super('Toyota', model, year);
  }

  displayInfo(): void {
    console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}`);
  }
}

// Похідний клас для марки "Ford"
class Ford extends Car {
  constructor(model: string, year: number) {
    super('Ford', model, year);
  }

  displayInfo(): void {
    console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}`);
  }
}

// Створення екземплярів автомобілів
const mercedes1 = new Mercedes('E-Class', 2022);
const mercedes2 = new Mercedes('S-Class', 2023);

const toyota1 = new Toyota('Camry', 2022);
const toyota2 = new Toyota('Corolla', 2023);

const ford1 = new Ford('Focus', 2022);
const ford2 = new Ford('Mustang', 2023);

// Виведення інформації про автомобілі
mercedes1.displayInfo();
mercedes2.displayInfo();

toyota1.displayInfo();
toyota2.displayInfo();

ford1.displayInfo();
ford2.displayInfo();
