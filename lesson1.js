'use strict';
    /**
    * Создаем функицию принимающую число.
    * С помощью оператора if производим вычисления,
    * проверяем, соответствует ли число нужным нам требованиям.
    * В консоль выводим расчеты.
    */
    function getDigitsOfNumber(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log ('Число должно быть целое и в диапозоне [0 до 999].');
        return {};
        }
        return {
            units: num % 10,
            tens: Math.floor (num / 10) % 10,
            hundereds: Math.floor (num / 100),
        }
        }

console.log (getDigitsOfNumber(359));