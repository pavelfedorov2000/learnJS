'use strict';

// Свойства
// max / min
let biggestNum = Number.MAX_VALUE;
console.log(biggestNum);
let smallesttNum = Number.MIN_VALUE;
console.log(smallesttNum);

let infiniteNum = Number.POSITIVE_INFINITY;
console.log(infiniteNum); // Infinity
let negInfiniteNum = Number.NEGATIVE_INFINITY;
console.log(negInfiniteNum); // -Infinity

let notANum = Number.NaN;
console.log(notANum); // NaN


// Методы
// parseInt - округление до целого с отбросом остального нечислового значения
let parseNum = Number.parseInt(5.2);
console.log(parseNum); // 5

// конечность числа
let num1 = Number.isFinite(5);
console.log(num1); // true
let num2 = Number.isFinite(Infinity);
console.log(num2); // false (бесконечность не конечна)

// целое / нецелое
let intNum = Number.isInteger(5);
console.log(intNum); // true (целое)

// проверка на число
let isNum = Number.isNaN(5);
console.log(isNum); // false (5 - число ведь)

// toFixed - возвращает строку, представляющую число с заданным количеством разрядов после запятой
let someNum = 5.22;
someNum.toFixed();
console.log(someNum);