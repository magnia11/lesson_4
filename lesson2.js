'use strict';
/**
 * Создаем функцию конструктор с параметрами.
 * Создаем прототип функцию со скидкой.
 * Выполняем расчеты и выводим в консоль. 
 */
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function (price) {
    this.price = this.price - (this.price * 0.25);
};

const product1 = new Product('apple', 100);

product1.make25PercentDiscount()

console.log(product1);
