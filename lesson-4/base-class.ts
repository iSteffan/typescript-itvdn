// Абстрактний батьківський клас Car
export abstract class Car {
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
