'use strict';

function min(a,b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}
min(3,2); // 2


let x = prompt('Введите число х', '');
let n = prompt('Введите число n', '');

function pow(x,n) {
    let result = x ** n; // возведение в степень
    return result;
}

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert(pow(x,n));
}


// Факториал
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return (n * factorial(n - 1)); // вызов ф-ции самой себя - рекурсия
    }
}
let a, b, с, d, e;
a = factorial(1); // 1
b = factorial(2); // 2
с = factorial(3); // 6
d = factorial(4); // 24
e = factorial(5); // 120


function foo(i) {
    if (i < 0) {
        return;
    }
    console.log('begin: ' + i);
    foo (i - 1);
    console.log('end: ' + i);
}
foo(3);


function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
a = addSquares(2, 3); // 2*2 + 3*3 = 13
b = addSquares(3, 4); // 25
с = addSquares(4, 5); // 41


// Вложенные ф-ции
function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z); // 12
        }
        C(5);
    }
    B(3);
}
A(4);


// Конфликт имен
function outside() {
    let x = 5;
    function inside(x) {
        return x * 2;
    }
    return inside;
}
outside()(10); // 20 = 10 * 2
// так произошло тк inside имеет больший приоритет чем outside (как более вложенная ф-ция)


// объект arguments (псевдомассив)
function myConcat(separator) {
    let result = '';
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result;
}
myConcat('. ', 'red', 'orange', 'blue');

function func() {
    for (value in arguments) {
        console.log(value);
        
    }
}
func(1,2,3);
// 1
// 2
// 3


// параметры по умолчанию
function multiply(a, b = 1) {
    return a * b;
}
multiply(5); // 5 (вместо b подставилось 1)


// стрелочные ф-ции
let a = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

let a2 = a.map(function(s) {
    return s.length;
});
console.log(a2); // [8, 6, 7, 9]

let a3 = a.map(s => s.length); // то же самое, но короче
console.log(a3); // [8, 6, 7, 9]


// Хекслет

// функциям можно задавать св-ва и методы (!)
// ф-ция - это также объект
// 3 св-ва:
// 1) name - имя ф-ции
// 2) length - число аргументов
// 3) prototype

// this - контекст вызова
function getIt() {
    return this.x;
}

let obj1 = {
    get: getIt,
    x: 1
}

let obj2 = {
    get: getIt,
    x: 2
}

console.log(obj1.get()); // в кач-ве this в ф-цию getIt передается obj1
console.log(obj2.get()); // в кач-ве this в ф-цию getIt передается obj2

// ф-ция как св-во объекта
let obj = {
    base: 13,
    average: function(x, y) {
        return (this.base + x + y) / 3; // В момент вызова ф-ции this будет ссылаться на obj
    }
};

console.log(obj.average(2,3)); // (13 + 2 + 3) / 5 = 6


// ф-ция вне объекта
let answer = someFunc(1, 3, 19); // this указывает на глобальный объект

// arguments
function myFuncName(x, y, z) {...}; // x, y, я - параметры
myFuncName(1,2,3,4,5,6,7,8); // цифры - это уже аргументы
// аргументов может быть больше чем параметров

let average = function() {
    let i = 0;
    let sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum / arguments.length;
};

console.log(average());
console.log(average(1, 3, 5)); // (1 + 3 + 5) / 3 = 3

// область видимости:
// во многих языках - блочная
// в JS - функциональная

let a = 10;
console.log(a); // 10
let func = function() {
    console.log(a); // 10
};

// поднятие переменной (variable hoisting)
let func = function() {
    console.log(a); // undefined
    let a = 11; // объявление а поднимается выше, а присвоение нового значения происходит только после console.log
};





// Замыкания (closures)
let answer = 42; // это глобальная переменная
// не очень хорошо так задавать, могут возникнуть конфликты имен со сторонними скриптами
let getAnswer = function() {
    return answer;
};
getAnswer(); // 42

// лучше так
// но мы создаем каждый раз новую переменную
let getAnswer = function() {
    let answer = 42;
    return answer;
};
getAnswer(); // 42

// используем замыкание
// замыкание - это ф-ция, которая имеет свободный доступ к переменным, которые были в момент вызова доступны ей
let getAnswer = (function() {
    let answer = 42;
    return function inner(){
        return answer; // доступ к answer имеется
    };
}());
getAnswer(); // 42

function greeting(name) {
    let text = "Hello " + name;
    let greet = function() {
        console.log(text);
    }
    return greet;
}

let a1 = greeting('Pavel');
console.log(a1());
