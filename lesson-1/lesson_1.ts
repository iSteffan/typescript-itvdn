// Завдання 1
// Вивчити основні поняття, розглянуті під час уроку.
// Завдання 2
// Використовуючи TS, створіть наступну функцію, яка розраховує вартість
// морозива: Магазин пропонує 2 розміри морозива:
// • Маленький стаканчик (10грн)
// • Великий стаканчик (25грн)
// • Морозиво доповнюється однією або декількома начинками (мінімум – однією):
// -шоколад (+5грн)
// -карамель (+6грн)
// -ягоди (+10грн)
//  Додатково морозиво (не обов'язково) можна посипати маршмелоу (+5грн).
// Вхідні параметри користувач вводить через prompt.

function calculateIceCreamCost(): void {
  let totalCost = 0;

  // Вибір розміру морозива
  const iceCreamSize = prompt('Виберіть розмір морозива: (маленький або великий)');

  if (iceCreamSize === 'маленький') {
    totalCost += 10;
  } else if (iceCreamSize === 'великий') {
    totalCost += 25;
  } else {
    alert('Виберіть правильний розмір морозива.');
    return;
  }

  // Вибір начинок
  const toppings = prompt('Виберіть начинку (шоколад, карамель, ягоди) через кому').split(', ');

  // Додавання вартості начинок
  for (const topping of toppings) {
    switch (topping) {
      case 'шоколад':
        totalCost += 5;
        break;
      case 'карамель':
        totalCost += 6;
        break;
      case 'ягоди':
        totalCost += 10;
        break;
      default:
        alert(`Начинка "${topping}" не підтримується.`);
        return;
    }
  }

  const isMarshmallow = prompt('Чи бажаєте маршмелоу? (так/ні)');

  if (isMarshmallow === 'так') {
    totalCost += 5;
  }

  alert(`Вартість вашого морозива: ${totalCost} грн`);
}

calculateIceCreamCost();
