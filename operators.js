// arithmatic operators +,-,*,/,%
// num += 1;
// Assignment Operators =
// Comparison Operators >,<,<=,>=
let num1 = 12;
let num2 = 34;
const isnum1greater = num1 > num2;
const isnum1smaller = num1 < num2;
console.log(isnum1greater);
console.log(isnum1smaller);
//Equality Operators
let a = 12;
let b = "12";
console.log(a == b); //loose equality
console.log(a === b); // strict equality

//ternary Operator
let age = 16;
const canDrive = age >= 18 ? true : false;
console.log(canDrive);

//Logical operators
// || or operator
// && and operator
// not operator !
// ?? null coalescing//

console.log(true || true);
console.log(true && false);
console.log(!false);

// ?? null coalescing//
let aa = null;
const result = aa ?? false;
console.log(result);

let bot = false || "sai";
console.log(bot);
