let string = 'terrible';
console.log(string.length); // 8

"dance".length; // 5
'42'.length; // 2

let uni = "\u1552";
uni.length; // 1 (символ)

// \ (обратный слеш) - для экранирования запрещенных символов
'it's my life'; // ошибочная строка
console.log('it\'s my life'); // it's my life

// chartAt
"abcdef".charAt(2); // "c"
"abcdef".charAt(200); // ""
"abcdef".charAt(-1); // ""

// конкатенация (+)
"abcdef".charAt(0) + "abcdef".charAt(2) + "abcdef".charAt(4); // ace
12 + " or " + "20"; // "12 or 20"
"12" / 2 + 1; // 6 + 1 = 7 (строка 12 приводима к числу)
"day" * 2; // NaN (строка day никак не приводима к числу)

// toString
let  a = 42; // 42
a.toString(); // "42"
a.toString().length; // 2
a.toString().length.toString(); // "2"


// строки и числа
'blink ' + 182; // 'blink 182'
'blink ' + 181 + 1; // 'blink 1811'
'blink ' + (181 + 1); // 'blink 182'

// сравнение строк
"a" < "b"; // true
"c" < "b"; // false

"abcd" < "abcd"; // false
"abcd" === "abcd"; // true

"toy" === "toy"; // true
"toy" === "t" + "o" + "y"; // true
