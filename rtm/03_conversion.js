let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
// NaN is not a number
// 33 convert to 33
// 33abc convert to NaN
// true converts to 1
// undefined convert to NaN
// null convert to 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 0 and empty => false
// 1 and fill => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);

// ********* Operationa **********

let value = 3
let negValue = -value
console.log(negValue);


let str1 = "hello"
let str2 = "rakesh"
let str3 = str1 +str2

console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
console.log(num1);
let gameCounter = 100
++gameCounter;
console.log(gameCounter);