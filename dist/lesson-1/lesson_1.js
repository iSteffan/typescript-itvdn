function calculateIceCreamCost() {
    let totalCost = 0;
    const iceCreamSize = prompt('Виберіть розмір морозива: (маленький або великий)');
    if (iceCreamSize === 'маленький') {
        totalCost += 10;
    }
    else if (iceCreamSize === 'великий') {
        totalCost += 25;
    }
    else {
        alert('Виберіть правильний розмір морозива.');
        return;
    }
    const toppings = prompt('Виберіть начинку (шоколад, карамель, ягоди) через кому').split(', ');
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
//# sourceMappingURL=lesson_1.js.map