//Представьте, что вы находитесь на 5 этаже здания, затем на лифте едете на 2 этаж, после чего на 8. В сумме вы проехали 3 + 6 = 9 этажей.
//Создайте функцию, которая принимает массив из этажей, которые вы посетите и вернет сумму этажей, которые вы проедете.
//Примеры:
//elevatorDistance([5, 2, 8]) = 9
//elevatorDistance([1, 2, 3]) = 2
//elevatorDistance([7, 1, 7, 1]) = 18

function elevatorDistance(arr) {
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        result.push(Math.abs(arr[i] - arr[i - 1]));
    }
    let distance = result.reduce((sum, item) => sum + item, 0);
    return distance;
}

console.log(elevatorDistance([5, 2, 8])); // 9

// 2
function reverseInt(num) {
    let reversedNumArr = num.toString().split('');
    console.log(reversedNumArr);
    let reversedNum;
    if (reversedNumArr[0] === '-') {
        reversedNumArr.reverse().pop();
        let filtered = reversedNumArr.filter(item => item > 0);
        console.log(filtered);
        filtered.unshift('-');
        console.log(filtered);
        reversedNum = filtered.join('');
    } else {
        reversedNum = reversedNumArr.reverse().filter(item => item !== 0).join('');
        reversedNumArr.join('');
    }
    return reversedNum;
}
console.log(reverseInt(-1200)); // -21
//reverseInt(-123); // -321
//reverseInt(8900); // 98

// 3
let mix = ['a', 1, 2, false, 'b', null, undefined, NaN, Infinity];
let resultObj = {};

function getTypes(arr) {
    let typesArr = mix.map(item => typeof item);
    console.log(typesArr);
    for (let i = 0; i < typesArr.length; i++) {
        resultObj[typesArr[i]] = mix.filter(item => typeof item === typesArr[i]);
    }
    return resultObj;
}
console.log(getTypes(mix));


//Вышел новый фильм. Вася работает в кинотеатре и за билетами выстроилась очередь. У каждого человека в очереди купюра номиналом в 100, 50 или 25 долларов.  //Билет стоит 25 долларов.
//
//Изначально у Васи нет сдачи, напишите функцию, которая принимает массив из чисел, и возвращает true, если Вася сможет продать билеты всем людям в очереди.
//
//Примеры:
// tickets([25, 25, 50]) // => YES 
// tickets([25, 100]) // => NO
// tickets([25, 25, 50, 50, 100]) // => NO

const cost = 25;
let cashbox = 0;
function tickets(arr) {
    cashbox += arr[0];
    //console.log(cashbox);
    for (let i = 1; i < arr.length; i++) {
        console.log(arr[i]);
        console.log(cashbox);
        //cashbox += arr[i];
        let cashback = arr[i] - cost; // сколько надо дать сдачи

        if (cashbox >= cashback) {
            console.log('Сдача есть');
            if (arr[i] > cost) {
                let deltaCash = arr[i] - cashback;
                cashback += deltaCash;
                console.log(cashbox);
            } else {
                cashback += cost;
                console.log(cashbox);
            }
        } else {
            console.log('Сдачи нет');
        }
    }
}
tickets([25, 25, 50, 50, 100]);


//Sort and Star
//
//Вам дан массив строк. Отсортируйте их в алфавитном порядке и верните первую строку. Между каждой //буквой в возвращенной строке должны быть "***"
//
//Пример:
//twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])
//
//результат
//'b***i***t***c***o***i***n'
function twoSort(arr) {
    let firstString = arr.sort()[0];
    //console.log(sortedArr);
    //let firstString = sortedArr[0];
    console.log(firstString);
    let firstStringArr = [];
    for (let i = 0; i < firstString.length; i++) {
        firstStringArr.push(firstString[i]);
    }
    console.log(firstStringArr);
    let result = firstStringArr.join('***');
    console.log(result);
}
twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]);


//Через дорогу
//
//Вдоль дороги, слева и справа стоят дома. Известно, по какому принципу они нумеруются. С левой стороны находятся нечетные по возрастанию. С правой - четные //по убыванию.
//1|   |6
//3|   |4
//5|   |2
//
//Ваша задача, по заданному номеру дома и длине улицы определить номер дома напротив.
//Примеры:
// overTheRoad(address, n)
// overTheRoad(1, 3) = 6
// overTheRoad(3, 3) = 4
// overTheRoad(2, 3) = 5
// overTheRoad(3, 5) = 8

function overTheRoad(number, streetLength) {
    let x;
    let all = [];
    for (let i = 1; i < streetLength * 2 + 1; i++) {
        all.push(i);
    }
    let odd = all.filter(num => num % 2 !== 0);
    //console.log(odd);
    let even = all.filter(num => num % 2 === 0).reverse();
    //console.log(even);
    if (number % 2 === 0) {
        //console.log(even.indexOf(number));
        x = odd[even.indexOf(number)];
        //console.log(x);
    } else {
        //console.log(odd.indexOf(number));
        x = even[odd.indexOf(number)];
        //console.log(x);
    } return x;
}
console.log(overTheRoad(1, 3)); // 6
console.log(overTheRoad(3, 3)); // 4
console.log(overTheRoad(4, 6)); // 9


//Примеры:
//arrayPlusArray([1, 2, 3], [4, 5, 6]) =>  21
//arrayPlusArray([-1, -2, -3], [-4, -5, -6]) =>  -21
//arrayPlusArray([0, 0, 0], [4, 5, 6]) => 15
//arrayPlusArray([100, 200, 300], [400, 500, 600]) => 2100

function arrayPlusArray(arr1, arr2) {
    let sum = [...arr1, ...arr2].reduce((prev, current) => prev + current);
    console.log(sum);
}

arrayPlusArray([1, 2, 3], [4, 5, 6]);
arrayPlusArray([-1, -2, -3], [-4, -5, -6]);
arrayPlusArray([0, 0, 0], [4, 5, 6]);
arrayPlusArray([100, 200, 300], [400, 500, 600]);


// 12.12.2021
//Объединение двух массивов
//
//Напишите функцию, которая принимает два массива и объединяет их, беря элементы из каждого по-очереди.
//
// [a, b, c, d, e], [1, 2, 3, 4, 5]
// //[a, 1, b, 2, c, 3, d, 4, e, 5]
//
// [1, 2, 3], [a, b, c, d, e, f]
//[1, a, 2, b, 3, c, d, e, f]

function concatArrays(arr1, arr2) {
    let resultArr = [];
    let minLength = 0;
    let greaterArr;
    if (arr1.length < arr2.length) {
        minLength = arr1.length;
        greaterArr = arr2;
    } else {
        minLength = arr2.length;
        greaterArr = arr1;
    }
    for (let i = 0; i < minLength; i++) {
        resultArr.push(arr1[i]);
        resultArr.push(arr2[i]);
    }
    for (let j = minLength; j < greaterArr.length; j++) {
        resultArr.push(greaterArr[j]);
    }
    return resultArr;
}
console.log(concatArrays([1, 2, 3], ['a', 'b', 'c', 'd', 'e', 'f'])); // [1, a, 2, b, 3, c, d, e, f]


//Группировка запятыми
//Напишите функцию, которая принимает число, преобразует его в строку и разделяет по три цифры запятой.
//Пример
//       1  ->           "1"
//      10  ->          "10"
//     100  ->         "100"
//    1000  ->       "1,000"
//   10000  ->      "10,000"
//  100000  ->     "100,000"
// 1000000  ->   "1,000,000"
//35235235  ->  "35,235,235"

function commasGrouping(num) {
    let str = num.toString();
    if (str.length < 4) {
        return str;
    } else {
        let arr = [];
        for (let i = 0; i < str.length; i++) {
            arr.push(str[i]);
        }
        let commaArr = [];
        let n = 3;
        for (let i = arr.length - 1; i >= 0; i--) {
            if (i == arr.length - n && i != 0) {
                n += 3;
                commaArr.push(`,${arr[i]}`);
            } else {
                commaArr.push(arr[i]);
            }
        }
        str = commaArr.reverse().join('');
    }
    return str;
}

console.log(commasGrouping(35235235)); // "35,235,235"



// Настоящий этаж
//
// Американцы - странные люди и этажи у них нумеруются не как у людей. Первый этаж у них является нулевым и отсутствует 13 этаж из-за суеверий. Создайте //функцию, которая будет переводить номер этажа из американской системы в европейскую.
//
//Примеры:
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

function floorTranformation(americanFloor) {
    let europeanFloor;
    if (americanFloor < 0) {
        europeanFloor = americanFloor;
    } else if (americanFloor == 0 || americanFloor == 1) {
        europeanFloor = 0;
    } else if (americanFloor > 1 && americanFloor < 13) {
        europeanFloor = americanFloor - 1;
    } else if (americanFloor == 13) {
        europeanFloor = null;
    } else {
        europeanFloor = americanFloor - 2;
    }
    return europeanFloor;
}
console.log(floorTranformation(15)); // 13



//Вам даны два числа. Создайте функцию, которая выведет все целые числа, которые находятся между двумя данными числами, включая их самих.
//
//Пример:
// a = 1
// b = 4
// --> [1, 2, 3, 4]

function roundedNumbers(a, b) {
    let resultArr = new Set();
    for (let i = a; i <= b; i++) {
        resultArr.add(Math.round(i));
    }
    return Array.from(resultArr);
}
console.log(roundedNumbers(1, 4));



//Grade S: Full marks(score=100)
//Grade A: score<100 and score>=90
//Grade B: score<90 and score>=80
//Grade C: score<80 and score>=60
//Grade D: score<60 and score>=0
//Grade X: score=-1(The cheating guy gets a score like that)

//{S:1, A:1, B:1, C:2, D:1, X:0}

function countGrade(scores) {
    let obj = {};
    obj.S = scores.filter(score => score == 100).length;
    obj.A = scores.filter(score => score >= 90 && score < 100).length;
    obj.B = scores.filter(score => score >= 80 && score < 90).length;
    obj.C = scores.filter(score => score >= 60 && score < 80).length;
    obj.D = scores.filter(score => score >= 0 && score < 60).length;
    obj.X = scores.filter(score => score == -1).length;
    return obj;
}

console.log(countGrade([50, 60, 70, 80, 90, 100]));
console.log(countGrade([65, 75, 85, 85, 95, 100, 100]));
console.log(countGrade([-1, -1, -1, -1, -1, -1]));


// 30.12.2021
//Sum of two lowest positive integers
//
//Создайте функцию, которая принимает массив чисел и возвращает сумму двух наименьших положительных чисел этого массива.
//
//Примеры:
// [19, 5, 42, 2, 77] //7.
// [10, 343445353, 3453445, 3453545353453] //3453455.

function sumArr(arr) {
    let sum = 0;
    arr.sort((a, b) => a - b);
    sum = arr[0] + arr[1];
    return sum;
}

console.log(sumArr([19, 5, 42, 2, 77])); // [2, 5, 19, 42, 77] => 2 + 5 = 7

//Moving Zeros To The End
//
//Создайте алгоритм, который переместит все нули массива в его конец.
//
//Пример:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) 
// returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 0, 3, "a"])); // [false,1,1,2,1,3,"a",0,0]

//Recursive Replication
//
//Создайте рекурсивную функцию replicate, которая принимает два аргумента: times и number и возвращает массив, состоящий из number, повторенного times раз.
//
//Пример:
function replicate(times, number) {
    let arr = [];
    arr.length = times;
    arr.fill(number);
    return arr;
}
console.log(replicate(3, 5)); //вернёт [5,5,5]


// 01.01.2022
//Loop Array
//
//Создайте функцию, которая обрабатывает массив, перемещая элементы в нём в начало или в конец массива.
//
//Примеры:
// loopArr([1, 5, 87, 45, 8, 8], 'left', 2);
// вернет результат: [87, 45, 8, 8, 1, 5]
//
// loopArr([1, 5, 87, 45, 8, 8], 'right', 2);
// вернет результат: [8, 8, 1, 5, 87, 45]

function loopArr(arr, side, index) {
    if (side === 'left') {
        let spliced = arr.splice(0, index);
        arr.push(...spliced);
    } else {
        let spliced = arr.splice(-index, index);
        arr.unshift(...spliced);
    }
    return arr;
}

console.log(loopArr([1, 5, 87, 45, 8, 8], 'left', 2)); // [87, 45, 8, 8, 1, 5]
console.log(loopArr([1, 5, 87, 45, 8, 8], 'right', 2)); // [8, 8, 1, 5, 87, 45]

// 02.01.2022
//Самый часто повторяющийся символ
//
//Создайте функцию, которая принимает строку и возвращает самый часто повторяющий символ и количество его повторений
//
//Примеры:
function longestRepetition(str) {
    let arr = str.split('');
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let item = arr.filter(item => item == arr[i]);
        item.forEach(key => {
            obj[key] = item.length;
        });
    }
    //console.log(obj);
    return Object.entries(obj).filter(item => item[1] == Object.values(obj).sort((a, b) => b - a)[0])[0];
}
console.log(longestRepetition("aaaabb")); // ["a",4] 
//console.log(longestRepetition("bbbaaabaaaa")); // ["a",4]
console.log(longestRepetition("cbdeuuu900")); // ["u",3]


//Twisted Sum
//
//Вам дано число N.
//Найдите сумму всех чисел, находящихся между 1 и N, включая 1 и N.
//
//Примеры:
//# N = 4
//1 + 2 + 3 + 4 = 10
//
//# N = 10
//1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46
//
//# N = 12
//1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

function twistSum(N) {
    let sum = 0;
    for (let i = 0; i <= N; i++) {
        if (i < 10) {
            sum += i;
        } else {
            sum += i.toString().split('').map(item => Number(item)).reduce((prev, current) => prev + current);
        }
    }
    return sum;
}

console.log(twistSum(4)); // 10
console.log(twistSum(10)); // 46
console.log(twistSum(12)); // 51



// 23.01.2022
//Incrementer
//
//Создайте функцию, которая принимает массив чисел и прибавляет к каждому числу в массиве его позицию.
//
//Примеры:
// [1, 2, 3]  -->  [2, 4, 6]
// // [1+1, 2+2, 3+3]
//
// [4, 6, 9, 1, 3]  -->  [5, 8, 12, 5, 8]
// // [4+1, 6+2, 9+3, 1+4, 3+5]

function incrementer(arr) {
    return arr.map((item, index) => item + (index + 1));
}
// 
console.log(incrementer([1, 2, 3])); // [2, 4, 6]
console.log(incrementer([4, 6, 9, 1, 3])); // [5, 8, 12, 5, 8]


//Meeting
//
//Джон пригласил на встречу друзей и записал их в список в таком формате:
//s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
//
//Сделайте все буквы в строке заглавными и отсортируйте друзей по алфавиту.
//
//Результат будет такой:
//"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

let s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

function meeting(str) {
    let arr = str.split(';').map(item => item.split(':').reverse().map(val => val.toUpperCase())).sort(surnamesSort);
    let friends = {};

    let set = new Set();

    // оставляем уникальные фамилии
    arr.forEach(item => set.add(item[0]));
    console.log(set);

    // записываем в объект пары фамилия - массив имен с такой фамилией 
    for (let value of set) {
        friends[value] = arr.filter(item => item[0] === value).map(item => item[1]).sort();
    }
    console.log(friends);

    let result = '';
    for (let friend of Object.keys(friends)) {
        result += friends[friend].map(item => `(${friend}, ${item})`).join('');
    }
    return result;

    // сортровка по фамилии
    function surnamesSort(x, y) {
        if (x[0] < y[0]) {
            return -1;
        }
        if (x[0] > y[0]) {
            return 1;
        }
        return 0;
    }
}

console.log(meeting(s));


//Sort the odd
//
//Вам дан массив чисел. Ваша задача -  отсортировать по возрастанию нечетные числа, а четные оставить на своих местах.
//
//Примеры:
// [7, 1] 
// // [1, 7]
//
// [5, 8, 6, 3, 4]
// // [3, 8, 6, 5, 4]
//
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
// // [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


function oddSort(arr) {
    let odd = arr.filter(num => num % 2 != 0).sort((a, b) => a - b);
    //console.log(odd);

    let oddIndexes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            oddIndexes.push(arr.indexOf(arr[i]));
        }

    }
    //console.log(oddIndexes);

    for (let i = 0; i < oddIndexes.length; i++) {
        arr[oddIndexes[i]] = odd[i];
    }
    return arr;
}

console.log(oddSort([5, 8, 6, 3, 4])); // [3, 8, 6, 5, 4]
console.log(oddSort([7, 1])); // [1, 7]
console.log(oddSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


// 20.02.2022
//The maximum sum value of ranges
//
//Вам даны два массива - массив чисел и массив диапазонов.
//Необходимо получить максимальную сумму чисел первого массива в заданных диапазонах.
//
//Пример:
// arr = [1,-2,3,4,-5,-4,3,2,1], 
// range = [[1,3],[0,4],[6,8]]
//
//Процесс вычислений:
// range[1,3] = arr[1]+arr[2]+arr[3] = 5
// range[0,4] = arr[0]+arr[1]+arr[2]+arr[3]+arr[4] = 1
// range[6,8] = arr[6]+arr[7]+arr[8] = 6
//
//Результат:  6

function maximuRangesSum(arr, range) {
    let rangeSum = [];
    for (let i = 0; i < range.length; i++) {
        rangeSum.push(0);
        for (let j = range[i][0]; j <= range[i][1]; j++) {
            if (range[i][1] > range[i][0] && range[i].length == 2) {
                rangeSum[i] += arr[j];
                console.log(rangeSum);
            } else {
                console.log('Некорректное условие (интервал)');
            }
        }
    }
    return Math.max(...rangeSum); // 6
}
console.log(maximuRangesSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3], [0, 4], [6, 8]]));


//Разворот массива
//
//Вам дан двумерный массив и направление в градусах, куда должен быть развернут массив.
//
//Пример:
// var arr1= [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]
//
// rotate(arr1,90) = [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3],
// ]
//
// rotate(arr1,-90)= [
//   [3,6,9],
//   [2,5,8],
//   [1,4,7],
// ]

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
function rotateArray(arr, deg) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        let innerArr = [];
        for (let j = 0; j < arr[i].length; j++) {
            innerArr.push(arr[j][i]);
        }
        array.push(innerArr);
    }

    if (deg > 0) {
        return array.map(item => item.reverse());
    } else {
        return array.reverse();
    }
}
console.log(rotateArray(arr, 90));
console.log(rotateArray(arr, -90));