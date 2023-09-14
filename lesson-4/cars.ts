// Завдання 2
// Використовуючи імпорти Typescript, створіть наступну програму з 2 уроку (з абстрактними
// класами):
// • Перший файл - визначені інтерфейси для опису.
// • Другий файл – класи (батьківський та похідні).
// • Третій файл - екземпляри класів, побудовані на шаблонах інтерфейсів.
// Використовуйте будь-який завантажувач модулів
import { Mercedes, Toyota, Ford } from './car-classes';

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
