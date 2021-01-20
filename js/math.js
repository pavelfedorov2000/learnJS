'use strict';

// Модуль числа
let absoluteNum = Math.abs(-5);
console.log(absoluteNum); // 5

// floor(), ceil() - возвращают наибольшее/наименьшее целое, которое меньше/больше или равно входному значению
let floorNum = Math.floor(5.5); // ищет ближайшее целое снизу
console.log(floorNum); // 5

let ceilNum = Math.ceil(5.5); // ищет ближайшее целое сверху
console.log(ceilNum); // 6

let minNum = Math.min(10, 5, 15);
console.log(minlNum); // 5

let maxNum = Math.max(10, 5, 15);
console.log(maxNum); // 15

let randomNum = Math.random(); // не требует аргумента
console.log(randomNum); // Возвращает случайное число от 0 до 1

let roundNum = Math.round(5.5); // округление по правилам математики
console.log(roundNum); // 6

let truncNum = Math.trunc(5.5); // отбрасывает дробную часть
console.log(truncNum); // 5


let sqrtNum = Math.sqrt(4); // корень квадратный из аргумента
console.log(sqrtNum); // 2

let cubicNum = Math.cbrt(8); // кубический корень
console.log(cubicNum); // 2

let signNum = Math.sign(-2); // возвращает -1 или 1 в зависимости от знака и 0, когда аргумент 0
console.log(signNum); // -1

