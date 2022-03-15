'use strict';

/* const muSquad = [
    {
        player: 'David De Gea',
        nationality: 'Spain',
        age: 30,
        position: 'goalkeeper',
        kit: 1,
        height: 189,
    },
    {
        player: 'Victor Lindelof',
        nationality: 'Sweden',
        age: 26,
        position: 'defender',
        kit: 2,
        height: 188,
    },
    {
        player: 'Marcus Rashford',
        nationality: 'England',
        age: 23,
        position: 'forward',
        kit: 10,
        height: 187,
    },
    {
        player: 'Paul Pogba',
        nationality: 'France',
        age: 28,
        position: 'midfielder',
        kit: 6,
        height: 188,
    },
    {
        player: 'Luke Shaw',
        nationality: 'England',
        age: 25,
        position: 'defender',
        kit: 23,
        height: 180,
    },
    {
        player: 'Scott MacTominay',
        nationality: 'Scotland',
        age: 23,
        position: 'midfielder',
        kit: 39,
        height: 194,
    },
    {
        player: 'Anthony Martial',
        nationality: 'France',
        age: 25,
        position: 'forward',
        kit: 9,
        height: 182,
    },
    {
        player: 'Harry Maguaire',
        nationality: 'England',
        age: 27,
        position: 'defender',
        kit: 5,
        height: 201,
    },
    {
        player: 'Bruno Fernandes',
        nationality: 'Portugal',
        age: 26,
        position: 'midfielder',
        kit: 18,
        height: 179,
    },
    {
        player: 'Juan Mata',
        nationality: 'Spain',
        age: 32,
        position: 'midfielder',
        kit: 8,
        height: 170,
    },
    {
        player: 'Aaron Wan-Bissaka',
        nationality: 'England',
        age: 23,
        position: 'defender',
        kit: 29,
        height: 183,
    },
    {
        player: 'Edinson Cavani',
        nationality: 'Uruguay',
        age: 34,
        position: 'forward',
        kit: 7,
        height: 186,
    },
    {
        player: 'Fred',
        nationality: 'Brazil',
        age: 28,
        position: 'midfielder',
        kit: 17,
        height: 169,
    },
    {
        player: 'Alex Telles',
        nationality: 'Brazil',
        age: 28,
        position: 'defender',
        kit: 27,
        height: 176,
    },
    {
        player: 'Daniel James',
        nationality: 'Wales',
        age: 24,
        position: 'midfielder',
        kit: 21,
        height: 170,
    },
    {
        player: 'Nemanja Matic',
        nationality: 'Serbija',
        age: 32,
        position: 'midfielder',
        kit: 31,
        height: 194,
    },
    {
        player: 'Mason Greenwood',
        nationality: 'England',
        age: 19,
        position: 'forward',
        kit: 20,
        height: 184,
    },
    {
        player: 'Donny van de Beek',
        nationality: 'Nederlands',
        age: 23,
        position: 'midfielder',
        kit: 34,
        height: 177,
    },
    {
        player: 'Dean Henderson',
        nationality: 'England',
        age: 24,
        position: 'goalkeeper',
        kit: 26,
        height: 188,
    },
    {
        player: 'Brandon Williams',
        nationality: 'England',
        age: 20,
        position: 'defender',
        kit: 33,
        height: 184,
    },
    {
        player: 'Eric Bally',
        nationality: 'Cot',
        age: 26,
        position: 'defender',
        kit: 3,
        height: 184,
    },
    {
        player: 'Lee Grant',
        nationality: 'England',
        age: 38,
        position: 'goalkeeper',
        kit: 13,
        height: 193,
    },
    {
        player: 'Amad Diallo',
        nationality: 'Cot',
        age: 18,
        position: 'midfielder',
        kit: 19,
        height: 174,
    },
    {
        player: 'Phil Jones',
        nationality: 'England',
        age: 29,
        position: 'defender',
        kit: 4,
        height: 184,
    },
    {
        player: 'Axel Tuanzebe',
        nationality: 'England',
        age: 23,
        position: 'defender',
        kit: 38,
        height: 192,
    },
];

let goalkeepers = muSquad.filter(player => player.position == 'goalkeeper');
let goalkeeperNames = goalkeepers.map(goalkeeper => goalkeeper.player.toString());
console.log(goalkeeperNames);
let kitNums = goalkeepers.map(player => player.kit).join(';');
console.log(kitNums);

const playersAges = muSquad.map(player => player.age);
console.log(playersAges);
const sortedAges = playersAges.sort((a, b) => a - b);
console.log(sortedAges);

const experiencedPlayers = muSquad.filter(player => player.age > 30);
console.log(experiencedPlayers);

const brazilPlayers = muSquad.filter(player => player.nationality == 'Brazil');
console.log(brazilPlayers);


let agePeriod = 5;
console.log(`Через ${agePeriod} лет самому младшему игроку будет ${sortedAges[0] + agePeriod} года`);

const averageTeamAge = playersAges.reduce((sum, current) => {
    return (sum + current) / (muSquad.length - 1);
}, 0);
console.log(averageTeamAge);

const playersHeight = muSquad.map(player => player.height);
console.log(playersHeight);
console.log(muSquad.length);
const sumTeamHeight = playersHeight.reduce((sum, current) => sum + current);
const averageTeamHeight = sumTeamHeight / muSquad.length;
console.log(averageTeamHeight); */


//Пример:
//Данные маршруты
/* const pathArrs = [['USA', 'BRA'], ['JPN', 'PHL'], ['BRA', 'UAE'], ['UAE', 'JPN']];

let resultArr = [];
let startCountry = pathArrs[0][0];
resultArr.push(startCountry);
//console.log(startCity);
let secondCountry = pathArrs[0][1];
resultArr.push(secondCountry);
pathArrs.shift();
//console.log(secondCity);
console.log(pathArrs);
console.log(resultArr);

for (let i = 0; i < pathArrs.length; i++) {
    let nextCountryIndex = pathArrs[i].indexOf(secondCountry);
    console.log(nextCountryIndex);
    let nextCountry;

    if (nextCountryIndex !== -1) {
        nextCountry = pathArrs[i][nextCountryIndex + 1];
        console.log(nextCountry);
        resultArr.push(nextCountry);
        //console.log(resultArr);
        let removed = pathArrs.splice(pathArrs[i], 1);
        console.log(removed);
        console.log(pathArrs);
    }
    startCountry = nextCountry;
    //console.log(startCountry);
    //resultArr.push(startCountry);
    //console.log(startCountry);
    //console.log(startCity);
} */
//Результат
//"USA, BRA, UAE, JPN, PHL"


// Транспортная задача

/* function getResultTable(a, b) {
    let sumA, sumB;
    for (let i = 0; i < a.length; i++) {
        sumA = a.reduce((acc, current) => acc + current, 0);
        console.log(sumA);
    }
    for (let i = 0; i < b.length; i++) {
        sumB = b.reduce((acc, current) => acc + current, 0);
        console.log(sumB);
    }
    if (sumA === sumB) {
        let resultTable = [];
        for (let i = 0; i < a.length; i++) {
            resultTable.push(new Array(b.length));
        }
        let startRow = 0;
        let startCol = 0;
        resultTable[0][0] = b[startCol];
        for (let i = 1; i < a.length; i++) {
            resultTable[i][startCol] = '-';
        }
        startCol++;
        for (let i = startRow; i < a.length; i++) {
            for (let j = startCol; j < b.length; j++) {
                startCol++;
                resultTable[startRow][startCol] = a[startRow] - resultTable[startRow][startCol - 1];
                resultTable[startRow][j] = '-';
                if (startRow < a.length - 1) {
                    startRow++;
                }
                resultTable[startRow][startCol] = b[startCol] - resultTable[startRow - 1][startCol];
                resultTable[i][startCol] = '-';
            }
        }
        console.log(resultTable);
    } else {
        return false;
    }
}

console.log(getResultTable([50, 70, 40], [30, 60, 45, 25])); */

/* const mainGoalkeepers = ['De Gea', 'Dean Henderson'];
const reserveGoalkeepers = ['Tom Heaton', 'Lee Grant'];

const goalkeepers = [...mainGoalkeepers, ...reserveGoalkeepers]; // ['De Gea', 'Dean Henderson', 'Tom Heaton', 'Lee Grant'];
console.log(goalkeepers);
//const [first, second, ,last] = [...mainGoalkeepers, ...reserveGoalkeepers]; // 'Tom Heaton' is skipped
//console.log(first); // 'De Gea'
//console.log(second); // 'Dean Henderson'
//console.log(last); // 'Lee Grant'

const [first, second, ...rest] = goalkeepers;
console.log(first); // 'De Gea'
console.log(second); // 'Dean Henderson'
console.log(rest); // ['Tom Heaton', 'Lee Grant']

let goalkeepersObj = {};
reserveGoalkeepers.forEach(goalkeeper => {
    goalkeepersObj[goalkeeper] = goalkeeper;
    //console.log(Object.keys(goalkeepersObj));
    //[goalkeepersObj[goalkeeper].name, goalkeepersObj[goalkeeper].surname] = goalkeeper.split(' ');
});

let deGea = {
    position: 'gooalkeeper',
    age: 30,
    kitNumber: 1,
    height: 192,
    foot: 'right',
};

let { position: pos, age, kitNumber: num, height: h, weight: w = 70, foot: f} = deGea;
console.log(pos);
console.log(age);
console.log(num);
console.log(h);
console.log(w);
console.log(f); */

/* for (let [key, value] of Object.entries(goalkeepersObj)) {
    console.log(`${key}:${value}`);
} */

/* for (let i = 0; i < mainGoalkeepers.length; i++) {
    goalkeepersObj[mainGoalkeepers[i]] = mainGoalkeepers[i].split(' ');
} */

//console.log(goalkeepersObj);





















