'use strict';

// Массивы
let arr = ['a', 'b', 'c', 'd'];
// Конец массива: .pop(), .push()
// Начало массива: .shift(), .unshift()
alert(arr[0] + '+' + arr[1] + ',' + arr[2] + '+' + arr[3]); // a + b, с + d

let arr = [2, 5, 3, 9];
let result = arr[0] * arr[1] + arr[2] * arr[3];
alert(result); // 10 + 27 = 37

let arr = ['a', 'b', 'c'];
arr.length; // 3; length = индекс последнего эл-та + 1
arr[0]; // 'a'
arr[1]; // 'b'
arr[2]; // 'c'
arr[3]; // undefined

// добавим в массив элемент с индексом 10
arr[10] = 'what?';
// при этом будет
arr[3 - 9]; // undefined
a.length; // 11 = 10 + 1


// split
let names = 'Миша, Катя, Саша, Петя'; // строка имен
let arr = names.split(', '); // формируем массив имен
for (let i = 0; i < arr.length; i++) {
    alert('Вам сообщение' + arr[i]);
}

// join - обратный метод методу split
let arr = ['Миша, Катя, Саша, Петя'];
let str = arr.join();
let str = arr.join('-'); // разделяем значения дефисом
alert(str);
alert(new Array(4).join("ха")); // хахаха
let arr = ["Я", "Иду", "Домой"];
delete arr[1]; // удаляет пару ключ-значение, что не всегда хорошо - образуется дыра

// slice
let arr = [1, 2, 3, 4, 5];
arr.slice(1, 3); // arr = [1, 4, 5]

// splice
arr.splice(1, 1); // начиная с позиции 1 (первый аргумент) удалить 1 (второй аргумент) элемент 
arr.splice(0, 2, "Мы", "идем"); // Мы идем домой

// reverse
let arr = [1, 2, 3];
arr.reverse(); // обратный порядок
alert(arr); // arr = [3, 2, 1]

// concat - создает новый массив, в который копируются значения предыдущего + новые значения
let arr = [1, 2];
let newArr = arr.concat(3, 4);
alert(newArr); // arr = [1, 2, 3, 4]

// sort
let arr = ['wind', 'rain', 'fire'];
arr.sort();
alert(arr); // arr = ['fire', rain', 'wind']

let hey = [1, 19, 5, 52, 37, 12];
let sort1 = hey.sort();
alert(sortHey); // 1, 12, 19, 37, 5, 52 - не совсем то
function compare(a, b) {
    return a - b;
}
let sort2 = hey.sort(compare);
alert(sort2); // 1, 5, 12, 19, 37, 52 - теперь все как надо


// indexOf
let arr = ['a', 'b', 'a', 'b', 'a'];
alert(arr.indexOf('b')); // выводит 1

// lastIndexOf
let arr = ['a', 'b', 'c', 'd', 'a', 'b'];
alert(arr.lastIndexOf('b')); // выводит 5

// forEach
let arr = ['a', 'b', 'c'];
arr.forEach(function (element) {
    alert(element);
});

// map - возвращает новый массив
let arr1 = ['a', 'b', 'c'];
let arr2 = arr1.map(function (item) {
    return item.toUpperCase();
});
alert(arr2); // ['A', 'B', 'C']

// filter
let arr1 = ['a', 10, 'b', 20, 'c', 30];
let arr2 = arr1.filter(function (item) {
    return typeof item == 'number'; // оставляем только числа
});
alert(arr2); // [10, 20, 30]

// every
function isNumber(value) {
    return typeof value == 'number';
}
let arr1 = [1, 2, 3];
arr1.every(isNumber); // true (все числа)
let arr2 = [1, '2', 3];
arr2.every(isNumber); // false ('2' - строка)

// some - хотя бы один
let arr1 = [1, 2, 3];
arr1.some(isNumber); // true
let arr2 = [1, '2', 3];
arr2.some(isNumber); // true
let arr2 = ['1', '2', '3'];
arr2.some(isNumber); // false


// for in vs for
let a = [];
a[5] = 5;
for (let x in a) {
    // выведет только a[5]
}

// лучше использовать простой цикл for
for (i = 0; i < a.length; i++) {
    // выведет все 5 элементов (хоть и 4 из них будут undefined)
}

// reduce
function adder(a, b) {
    return a + b;
}

c = [9, 2, 5, 6, 7];
let cSum = c.reduce(adder, 0);
alert(cSum); // 29


// Ассоциативный массив
let a = [1, 2];
a[0] = 1;
a[1] = 2;
a.length; // 2

a["something"] = 45;
alert(a); // a = [1, 2, ["something" = 45]]
a.length; // все равно 2

// Любой обЪект - это ассоциативный массив!
let g = new Date();
g["ha"] = 13;
console.log(g); // в обЪект добавиться пара ключ-значение "ha": 13




let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr[1][0]); // 4

let obj = {
    js: [
        'jQuery',
        'Angular'
    ],
    php: 'hello',
    css: 'world'
};
console.log(obj.js[0]); // jQuery
console.log((obj.php + ' ' + obj.css + '!').toUpperCase()); // HELLO WORLD!

let daysOfWeek = [
    [
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота',
        'воскресенье'
    ],
    [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
    ]
];

//console.log(daysOfWeek.length); // 2
let ru = daysOfWeek[0];
let eng = daysOfWeek[1];
for (let i = 0; i < ru.length; i++) {
    console.log(ru[i] + ' по-английски будет ' + eng[i]);
}

for (let i = 0; i < ru.length; i++) {
    let lang = ['ru', 'eng'];
    let day = [1, 2, 3, 4, 5, 6, 7];

    if (lang[0]) {
        console.log(ru[i] + ' - ' + day[i] + '-й день недели');
    }
}


// Матрица
const matrix1 = [[1, 2], [2, 1]];
console.log(matrix1);
const matrix2 = [[2, 1], [1, 2]];
console.log(matrix2);

function multiply() {
    let result = [[], []];
    result[0][0] = matrix1[0][0] * matrix2[0][0] + matrix1[0][1] * matrix2[1][0];
    result[0][1] = matrix1[0][0] * matrix2[0][1] + matrix1[0][1] * matrix2[1][1];
    result[1][0] = matrix1[1][0] * matrix2[0][0] + matrix1[1][1] * matrix2[1][0];
    result[1][1] = matrix1[1][0] * matrix2[0][1] + matrix1[1][1] * matrix2[1][1];
    return result;
}

console.log(multiply());


function calcPolishNotation(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] === '+') {
            result += arr[i - 1];
            if (arr[2] === '+') {
                result = arr[0] + arr[1];
                //console.log(result);
            }
            console.log(result);
        } else if (arr[i] === '*') {
            result *= arr[i - 1];
            console.log(result);
            if (arr[2] === '*') {
                result = arr[0] * arr[1];
                //console.log(result);
            }
        } else if (arr[i] === '-') {
            result = result - arr[i - 1];
            console.log(result);
            if (arr[2] === '-') {
                result = arr[0] - arr[1];
                //console.log(result);
            }
        } else if (arr[i] === '/') {
            result = result / arr[i - 1];
            console.log(result);
            if (arr[2] === '/') {
                result = arr[0] / arr[1];
                //console.log(result);
            }
        } else {
            result = result;
        }
    }
    return result;
}

console.log(calcPolishNotation([1, 2, '+', 4, '*', 3, '+']));


// Растущая последовательность
function isContinuousSequence(numbers) {

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i + 1] - numbers[i] == 1 && numbers[numbers.length - 1] - numbers[numbers.length - 2] == 1 && numbers.length > 1) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(isContinuousSequence([0, 1, 2])); // true
console.log(isContinuousSequence([-3, -2, -1])); // true
console.log(isContinuousSequence([0, 1, 3])); // false
console.log(isContinuousSequence([0])); // false


function createPhoneNumber(numbers) {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < numbers.length; i++) {
        if (i < 3) {
            arr1.push(numbers[i]);
            //console.log(arr1);
        }
        if (i > 2 && i < 6) {
            arr2.push(numbers[i]);
            //console.log(arr2);
        }
        if (i > 5 && i < numbers.length) {
            arr3.push(numbers[i]);
            //console.log(arr3);
        }
    }
    let phoneNum = '';
    phoneNum = '(' + arr1.join('') + ') ' + arr2.join('') + '-' + arr3.join('');
    return phoneNum;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => returns "(123) 456-7890"



// Camelcase transformation

function camelize(str) {
    return str
        .split('-') // Разбиваем строку
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');

}
console.log(camelize("background-color")); // backgroundColor

// Фильтрация по диапазону
let arr = [5, 3, 8, 1];
function filterRange(a, b, c) {
    let filtered = arr.filter((item) => (item >= b && item <= c));
    console.log(filtered);
};

filterRange(arr, 2, 4); // [3,1]


// Фильтрация по диапазону на месте
let arr = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
    console.log(arr);
}

filterRangeInPlace(arr, 1, 4); // [3, 1]


// Скопировать и отсортировать массив
let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.slice().sort();
}

let sorted = copySorted(arr);
console.log(sorted);


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [vasya, petya, masha];
let names = users.map(item => item.name);
console.log(names);



let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map(user => ({
    fullname: `${user.name} ${user.surname}`,
    id: user.id,
}));
console.log(usersMapped);

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

// Деструктуризация
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
};

function topSalary(salaries) {
    let max = 0;
    let maxName = null;
    for (let [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }
    return maxName;
}

console.log(topSalary(salaries));

