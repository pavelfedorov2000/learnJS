//Проследите за шпионом

//Вы выслеживаете агента.Он путешествует от места к месту, пытаясь замести следы.Вам дан массив из его перемещений, который дан в некорректном порядке.Вам //нужно восстановить порядок и вернуть строку из мест, которые посетил агент в правильном порядке.
//
//Пример:
//Данные маршруты
//[[USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN]]
//Результат
//"USA, BRA, UAE, JPN, PHL"

function followAgent(pathArr) {
    let prev = pathArr[0][1];
    let strArr = [];
    strArr.push(pathArr.shift());
    console.log(strArr);
    //let str = pathArr.shift().join(', ');
    for (let i = 0; i < pathArr.length; i++) {

    }
    let str = strArr.join(',');
    //console.log(pathArr);
    return str;
}

console.log(followAgent([['USA', 'BRA'], ['JPN', 'PHL'], ['BRA', 'UAE'], ['UAE', 'JPN']]));


//Уникальные по порядку
//
//Создайте функцию, которая принимает строку или массив и возвращает все уникальные элементы входного значения по порядку.
//
//Примеры:
// uniqueInOrder('AAAABBBCCDAABBB') 
// // ['A', 'B', 'C', 'D', 'A', 'B']
//
// uniqueInOrder('ABBCcAD')
// //['A', 'B', 'C', 'c', 'A', 'D']
//
// uniqueInOrder([1,2,2,3,3])
// //[1,2,3]



//field chained HTML formatting
//
//Вам необходимо создать методы для трансформации текста в html элементы. 
//
//примеры:
// Format.div("foo"); // returns "<div>foo</div>"
// Format.p("bar"); // returns "<p>bar</p>"
// Format.span("fiz"); // returns "<span>fiz</span>"
// Format.h1("buz"); // returns "<h1>buz</h1>"


//Recursive Replication
//
//Создайте рекурсивную функцию replicate, которая принимает два аргумента: times и number и возвращает массив, состоящий из number, повторенного times раз.
//
//Пример:
//replicate(3, 5) вернёт [5,5,5]


//Создайте функцию, которая принимает строку, состоящую из скобок, и возвращает true, если все скобки закрыты правильно.
//
//Примеры:
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true


//Pair of gloves
//
//Вам дан массив, состоящий из строк. Найдите парные строки и верните количество пар.
//
//Примеры:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)
//
// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)


//zipWith
//
//Создайте функцию zipWith, которая принимает функцию и два массива.Функция применяется к каждой паре значений из массивов и результат записывается в выходной массив.
//
//    Примеры:
//zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3])
//// [1,10,100,1000]
//zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1])
// // [4,7,7,4,7,7]








