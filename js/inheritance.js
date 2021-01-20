'use strict';

// ф-ция мб конструктором

let alex = new Human(); // создание конструктора (alex - брат Human)

function Human(name) {
    this.name = name;
}

Human.prototype.say = function(what) {
    console.log(this.name + " : " + what);
};

let alex = new Human("Alex");
console.log(alex); // Human {name: "Alex"};
alex.say('hi'); // 'Alex: hi' // this == alex

let jack = new Human("Jack");
jack.say('hi'); // 'Jack: hi' // this == jack

// можно подменить this с помощью ф-ции apply
alex.say.apply(jack, ["hi"]); // 'Jack: hi'

function speaksTo(someone) {
    console.log(this.name + " speaks to " + someone.name);
}

speaksTo(alex);

// Наследование в JS:
// 1) объект содержит св-ва
// 2) объект содержит спец св-во, указ-щее на прототип объекта
// 3) объект может переопределять любое св-во прототипа
// 4) конструктор создает объект. прототипом этого объекта будет прототип конструктора

// Что предложил Дуглас Крокфорд
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

let parent = { a : 1 };

let child = object(parent);
console.log(child.a); // 1


// Object.create()
let parent = { name : "Alex" };
console.log(parent);
let child = Object.create(parent);
console.log(child.name); // "Alex"




