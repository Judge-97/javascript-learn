let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
// NaN is not a number
// 33 convert to 33
// 33abc convert to NaN
// true converts to 1
// undefined convert to NaN
// null convert to 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 0 and empty => false
// 1 and fill => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);