'use strict';

// 1
// Ф-ция, рассчитывающая на сколько % число a > числа b
function calcPercent(a, b) {
    const max = 100;
    const x = b * max / a;
    return max - x;
}
console.log(calcPercent(120, 80)); // 33.3333


// Разность двух чисел равна 27.5, второе число равно 45% первого
// Найти числа
function findNumbers() {
    const minus = 27.5;
    let a;
    let b;
    a = minus / (1 - 0.45);
    b = 0.45 * a;
    return {'first number': a, 'second number': b};
}
console.log(findNumbers());


// derivatives

// многочлен 1-ой степени
function calcDerivative(a, b) {
    let x;
    let y = a * x + b;
    let derivative = a;
    return derivative;
}

console.log(calcDerivative(3, 2));







