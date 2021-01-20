'use strict';

// number (1, 0.99, Infinity, -Infinity, NaN)
alert(1 / 0); // Infinity
alert("не число" / 2); // NaN (дословно - не число)


// string
let str = "Hello";
let str2 = 'Pavel';
let str3 = `${str}, ${str2}`; // интерполяция

alert(str3);


// boolean (true / false)
// null (просто не существует в коде) - используется для присвоения переменной "пустого" или "неизвестного" значения
// undefined (значение не было присвоено) - для проверок, была ли переменная назначена

// Object
// Symbol - для создания уникальных идентификаторов в объектах

// typeof - проверка на тип аргумента
typeof undefined; // undefined
typeof 0; // number
typeof true; boolean
typeof "foo"; // string
typeof Math; // object (встроенный объект)
typeof null; // object (официально признанная ошибка typeof)
typeof alert; // function

// Преобразование типов
// 1) строковое
let value = true;
typeof value; // boolean
value = String(value); // "true"
typeof value; // string

// 2) численное
alert("6" / "3"); // 2 (при математических операциях строки преобразуются в числа)
let str = "123";
let num = Number(str); // 123

let age = Number("любая строка вместо числа"); // NaN

Number(undefined) --> NaN
null --> 0
true --> 1
false --> 0

// 3) логическое
Boolean(1) --> true
0 --> false
"Привет" --> true
"" --> false
"0" --> true
" " --> true


// Операторы сравнения

5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // true
undefined == null // true
undefined === null // false (undefined и null - 2 разных типа)
null == "\n0\n" // false (null == undefined и ничему больше)
null === +"\n0\n" // false (null !== Number)

// Условия
let answerValue = prompt('Какое официальное название JavaScript?', '');
if (answerValue == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
}

let num = +prompt('Введите Ваше число!', '');
if (value > 0) {
    alert(1);
} else if (value < 0) {
    alert(-1);
} else {
    alert(0);
}

let result = (a + b < 4) ? 'Мало' : 'Много'

let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
    '';


// Логические операторы || (ИЛИ), && (И), !(НЕ)
null || 2 || undefined // 2 - первая истина
alert( alert(1) || 2 || alert(3) ); // 2. Вызов alert не возвращает значения (возвращает undefined)

1 && null && 2 // null - первая ложь
alert( alert(1) && alert(2) ); // 1, затем undefined

null || 2 && 3 || 4 => null || 3 || 4 // 3

if (age >= 14 && age <= 90);

// 1 способ
if (age < 14 || age > 90);
// 2 способ
if(!(age >= 14 && age <= 90));

if (-1 || 0) alert( 'first' ); // if(true) => alert выполнится 
if (-1 && 0) alert( 'second' ); // if(false) => alert не выполнится 
if (null || -1 && 1) alert( 'third' ); // if (null || 1) = if(true) => alert выполнится


let login = prompt('Кто там?', '');

if (login == 'Админ') {
    let password = prompt('Ваш пароль?', '');
    if (password == 'Я главный') {
        alert('Здравствуйте!');
    } else if (paswword == '' || password == null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (login == '' || login == null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}

let a;
if (a > 0 && a < 5) {
    alert('Верно');
} else {
    alert('Неверно');
}

if (a == 0 || a == 2) {
    a += 7;
} else {
    a = a / 10;
}

if(a <= 1 && b >= 3) {
    alert(a + b);
} else {
    alert(a - b);
}

if (a >2 && a < 11 || b >=6 && b < 14) {
    alert('Верно');
} else {
    alert('Неверно');
}

switch(num) {
    case '1':
        result = 'Зима';
        break;
    case '2':
        result = 'Весна';
        break;
    case '3':
        result = 'Лето';
        break;
    case '4':
        result = 'Осень';
        break;
}

let day; // какое-то число из интервала от 1 до 31
if (day <= 10) {
    alert('Первая декада');
} else if (day > 10 && day <=20) {
    alert('Вторая декада');
} else {
    alert('Третья декада');
}

let month; // какое-то число из интервала от 1 до 12
if (month <= 2 || month == 12) {
    alert('Зима');
} else if (month >=3 && month <= 5) {
    alert('Весна');
} else if (month >=6 && month <= 8) {
    alert('Лето');
} else {
    alert('Осень');
}

let num;
do {
    num = prompt("Введите число, большее 100?", 0);
} while (num <= 100 && num);

// Строка 'xxxxxxxxxx'
let str = '';
for (i = 0; i < 10; i++) {
    str = str + 'x';
}


// Объекты
let obj = {
    a: 1,
    b: 2,
    c: 3
};
alert(obj['a'])
alert(obj.a);