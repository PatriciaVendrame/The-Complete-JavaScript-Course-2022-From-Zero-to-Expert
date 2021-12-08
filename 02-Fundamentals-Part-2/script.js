/*ACTIVATING STRICT MODE*/
"use strict";

//==========================================================
/** CHALLENGE #1**/

/*
const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

const checkWinner = function(avgDolphins, avgKoalas) {

    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolhins win 🏆(${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win 🏆(${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log("No teams wins ...");
    }
};

//DATA 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);
//DATA 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));
*/

//======================================================
/** CHALLENGE #2 **/

// const calcTip = function(bill) {

//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [(tips[0] + bills[0]), (tips[1] + bills[1]), (tips[2] + bills[2])];
// console.log(total);

//===================================================
/** CHALLENGE #3 **/
// const mark = {
//     name: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// const john = {
//     name: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// console.log(mark.bmi);
// john.calcBMI();
// console.log(john.bmi);

// (mark.bmi >= john.bmi) ?
// console.log(`${mark.name} BMI (${mark.bmi})  is higher than ${john.name} (${john.bmi})`): console.log(`${john.name} BMI (${john.bmi})  is higher than ${mark.name} (${mark.bmi})`);

/** WHILE LOOP **/
// tiene los mismos parametros que el for, un inicializador, una condicion y un incremento/decremento
// for (let rep = 1; rep < 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}🏋️‍♀️`);
// }

// console.log('====================================');

// let repeat = 1;
// while (repeat <= 10) {
//     console.log(`Lifting weights repetition ${repeat}🏋️‍♂️`);
//     repeat++;
// }

//en el ciclo while no necesitamos siempre un contador, la mayoria de las veces se usa para evaluar que algo se realiza mientras se cumpla la condicion
//ejemplo lanzamiento de dados, numero random de 0.00 a 0.99 que al multiplicarlo por 6 el mayor valor es 5.94, un numero que tiende a ser 6 pero nunca lo es, a este rtdo le sumamos uno y al aplicar la funcion trunc se elimina la parte decimal llendo de 0 a 6

// let dice = (Math.trunc(Math.random() * 6) + 1);
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     //se necesita volver a tirar para que no caiga en un loop infinito
//     dice = (Math.trunc(Math.random() * 6) + 1);
//     if (dice === 6) {
//         console.log('Loop es about to end...');
//     }
// }

//=================================================
/** CHALLENGE #4 **/
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i <= bill.length - 1; i++) {
  let tip = calcTip(bill[i]);
  tips.push(tip);
  totals.push(tip + bill[i]);
}
console.log(bill, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};
const total = calcAverage(bill);
console.log(total);
console.log(calcAverage(tips));
