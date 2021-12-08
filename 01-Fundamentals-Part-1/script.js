// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// 2 ** 3 es lo mimo que 2 * 2 * 2

/** CHALLENGE 1 **/

// const weightMarksData1 = 78,
//     weightJohnData1 = 92,
//     tallMarksData1 = 1.69,
//     tallJohnData1 = 1.95;

// const BMIMarksData1 = weightMarksData1 / (tallMarksData1 ** 2),
//     BMIJohnData1 = weightJohnData1 / (tallJohnData1 ** 2);

// console.log(BMIMarksData1);
// console.log(BMIJohnData1);


// const markHigherBMIData1 = BMIMarksData1 > BMIJohnData1;
// console.log(markHigherBMIData1);



// const weightMarksData2 = 95,
//     weightJohnData2 = 85,
//     tallMarksData2 = 1.88,
//     tallJohnData2 = 1.76;

// const BMIMarksData2 = weightMarksData2 / (tallMarksData2 ** 2),
//     BMIJohnData2 = weightJohnData2 / (tallJohnData2 ** 2);

// console.log(BMIMarksData2);
// console.log(BMIJohnData2);

// const markHigherBMIData2 = BMIMarksData2 > BMIMarksData2;
// console.log(markHigherBMIData2);

// /** CHALLENGE 2 **/
// if (BMIMarksData2 > BMIJohnData2) {
//     console.log("Mark's es higher than John's!");
//     console.log(`Mark's BMI (${BMIMarksData2}) is higher than John's $({BMIJohnData2})`);
// } else {
//     console.log("John's es higher than Mark's!");
//     console.log(`John's BMI (${BMIJohnData2}) is higher than Mark's (${BMIMarksData2})`);
// }

/** CHALLENGE 3 **/
/*const averageDolphins = (96 + 108 + 89) / 3;
const averageKoalas = (88 + 91 + 110) / 3;

console.log(averageDolphins + " " + averageKoalas);

if (averageDolphins > averageKoalas) {

    console.log("The Dolphins win!!");

} else if (averageKoalas > averageDolphins) {

    console.log("The Koalas win!!");
} else {
    console.log("Both teams tied!!");
}*/



//****************************************************
/*console.log('*** BONUS 1 ***');
if ((averageDolphins > averageKoalas) && (averageDolphins >= 100)) {

    console.log("The Dolphins win!!");

} else if ((averageKoalas > averageDolphins) && (averageKoalas > 100)) {

    console.log("The Koalas win!!");

} else if (averageKoalas === averageDolphins) {

    console.log("Both teams tied!!");
} else {
    console.log("There is no winner");
}
*/


//****************************************************
/*console.log('*** BONUS 2 ***');
if ((averageDolphins > averageKoalas) && (averageDolphins >= 100)) {

    console.log("The Dolphins win!!");

} else if ((averageKoalas > averageDolphins) && (averageKoalas >= 100)) {

    console.log("The Koalas win!!");

} else if ((averageKoalas === averageDolphins) && (averageKoalas >= 100) && averageDolphins >= 100) {

    console.log("Both teams tied 🏆!!");
} else {
    console.log("No teams wins the trophy 😭 !");
}
*/

/** SWITCH  **/
//cuando se declaran dos casos seguidos y en el ultimo se declara las sentencias a ejecutar, quirere decir que si la evaluacion de los casos cae en algunos de esos casos seguidos se ejecuta el codigo que se escribio en el ultimo case (ejemplo wednesday y thursday)
/*const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Plan curse structure');
        console.log('Go to coding meetups');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('not a valid day!');
}

if (day === 'monday') {
    console.log('Plan curse structure');
    console.log('Go to coding meetups');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('not a valid day!');
}
*/

/** STATEMENTS AND EXPRESIONS **/
//una EXPRESION es un fragmento de codigo que produce un valor ejemplo 3 + 4, un numero tambien es una expresion porque es un valor para js ejemplo 1991, true && false && !true tambien es una expresion poruqe produce un valor booleano 

//las DECLARACIONES es un fragmento de codigo mas grande que se ejecuta y no produce ningun valor en si mismo, son como oraciones completas que traducen nuestras acciones, las acciones que queremos que realice un programa
//Un ejemplo, las declaraciones es como una oracion completa y las expresiones son como las palabras que componen las oraciones
//ejemplo declaracion es el bloque if que no retorna ningun valor
// if(23 > 10) {
//     const str = '23 is bigger';
// }
//'23 is bigger' es una expresion
//const str = '23 is bigger' es una declaracion en si misma
//las declaraciones terminan en ;
//en los template literals incluimos expresiones y no declaraciones

/*El OPERADOR TERNARIO es una expresion, como tal, los operadores generan un resultado, el retorno de este resultado se almacena en una variable

const age = 18;
const drink = age >= 18 ? 'wine🍷' : 'water💧'

si no se usa un operador ternario se debe hacer con una estructura if= else, la variable se debe declarar afuera ya que si se declara dentro de la estructura if else no es accesible desde afuera del condicional

let drink;
if(age >= 18) {
    drink2 = 'wine🍷';
} else {
    drink2 = 'water💧';
}

En un template literal no podemos poner como expresion un condicional if else porque da un error 
En un template literal si podemos incluir un operador ternario 
Ejemplo: console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
EL OPERADOR TERNARIO NO REEMPLAZA AL IF ELSE, EL OPERADOR TERNARIO SE USA PARA DESICIONES RAPIDAS, PARA BLOQUES DE CODIGO MAS GRANDES SE USA IF ELSE

TODO OPERADOR ES UNA EXPRESION
*/
const bill = 430;
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

console.log(`The bill ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);