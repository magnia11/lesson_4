'use strict';
/**
 * Создаем шаблон с конструктором и свойствами.
 * Создаем метод для вычисления скидки.
 * Выполняем расчеты и выводим в консоль.
 */
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price - (this.price * 0.25);
    }
}
const product1 = new Product('apple', 100);

product1.make25PercentDiscount()

console.log(product1);
