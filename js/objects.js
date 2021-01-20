'use strict';

// Объект - замкнутый контейнер со свойствами
// 2 способа создания
let obj = {}; // синтаксис литерала объекта
let obj = new Object(); // синтаксис конструктора объекта

let person = {
    name: "Alex",
    age: 25,
    "" : "WEIRD!",
    bad thing: 22, // ошибка
    "good thing": 23, // ок
    wife: {
        name: "Eve",
        age: 29,
    }
};

person.name; // "Alex"
person.age; // 25

person["name"]; // "Alex"
person["age"]; // 25
person[""]; // "WEIRD!"

person.wife; // Object
person.wife.age; // 29
person.wife.wife; // undefined

person.name = "Peter";
person.name; // "Alex" заменено на "Peter"




let firstPart = 'likes';
let id = Symbol('id');
let userInfo = {
    name: "Вася",
    age: 30,
    [firstPart + "javascript"]: true, // likes javascript
    [firstPart]: true, // likes
    0: 0,
    [id]: 'Некое значение',
    address: {
        city: 'Minsk',
        street: 'Some street',
    }
};
console.log(userInfo["likes javascript"]); // true
console.log(userInfo[firstPart]); // true
console.log(userInfo[0]); // 0
console.log(userInfo["0"]); // 0 - то же самое
console.log(userInfo[id]); // Некое значение
console.log(userInfo.address); // объект address
console.log(userInfo.address.city); // Minsk


// Преимущество квадратных скобок
let key = 'name'; // помещаем ключ name в переменную key
console.log(userInfo[key]); // Вася

// Свойства из переменной

function makeUserInfo(name, age) {
    return {
        name: name,
        age: age,
        // ...другие свойства
    };
}
let user = makeUserInfo('Вася', 30);
console.log(user);

// Дублирование объектов (Object.assign)

// Синтаксис
// Object.assign(куда(объект), что(свойство 1), что(свойство 2), ...)

let userInfo = {
    name: 'Вася',
    age: 30,
};

let user = Object.assign({}, userInfo);

user.age = 18;

console.log(userInfo.age); // останется 30
console.log(user.age); // поменяли на 18

// Проверка существования свойства
if (userInfo.age) {
    console.log(userInfo.age); // 30
}

// Опциональная цепочка
let userInfo = {
    name: 'Вася',
    age: 30,
    //address: {
    //    city: 'Minsk',
    //    street: 'Some street',
    //}
};
console.log(userInfo?.address?.street);

// Оператор in

let userInfo = {
    name: undefined,
};

/* if (userInfo.name) {  // false
    console.log(userInfo.name);
} */

if ("name" in userInfo) { // true
    console.log(userInfo.name);
}

// Цикл for in
// Синтаксис
for (let key in object) {
    // тело цикла
}

let userInfo = {
    name: 'Вася',
    age: 30,
    address: {
        city: 'Minsk',
        street: 'Some street',
    }
};

for (let key in userInfo) {
    console.log(key);
    console.log(userInfo[key]);
}

// Методы объекта
let userInfo = {
    name: 'Вася',
    age: 30,
    address: {
        city: 'Минск',
        street: 'Андреевская',
    },
    showInfo() {
        let show = () => console.log(`${this.name}, ${this.age} лет. Адрес: г. ${this.address.city}, ул. ${this.address.street}`);
        show(); // будет работать, тк у стрелочной ф-ции нет this, и доп вложенность проигнорируется
    }
};

userInfo.showInfo();


// Ф-ции конструкторы
function UserInfo(name) {
    // this = {}; Создается пустой объект (неявно)

    this.name = name;
    this.age = 30;

    // return this; Возвращается объект (неявно)
}

let user1 = new UserInfo('Вася');
let user2 = new UserInfo('Катя');

console.log(user1);
console.log(user2);




// ПРОТОТИПЫ
let Human = {
    type: "Human",
    head: 1,
    legs: 2
};

let Megahuman = Object.create(Human); // теперь Megahuman - прототип

// добавление св-в
Human.face = "okay";
Human.face; //"okay";
Megahuman.face; // "okay"

// изменение св-в
Human.head = 2;
Human.head; // 2
Megahuman.head; // 2

// изменение прототипа не изменяет исходный объект
Megahuman.head = 2;
Megahuman.head; // 2
Human.head; // 1

// удаление св-ва
Megahuman.head = 2;
Megahuman.head; // 2
delete Megahuman.head;
Megahuman.head; // 1

delete Human.head;
Megahuman.head; // undefined