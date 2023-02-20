Arithmetic operator (+, -, *, /, %, **, ++, --)
Assignment operator (=, +=, -=, /=, *=, %=)
Comparison operator (<, <=, >, >=)
Logical operator (&&, ||, !)
Bitwise operator (&, |, ^, ~, <<, >>, >>>)


//Arithmetic operator
let a = 2;
let b = 5;

console.log(a + b); // 7
console.log(a * b); // 10


//Assignment operator
let x = 4;
let x = x + 2; // 6

//Comparison operator
let x = 6;
console.log(x > 5); // true
console.log(x >= 5); // false

//logical operator
let requiredHeight = True;
let withinAgeRange = True;
let modelCriteria = requiredHeight && withinAgeRange;
console.log(modelCriteria); // true
let modelCriteria = requriredHeight || withinAgeRange;
console.log(modelCriteria); // true

//Bitwise Operator
let x = 5 & 1;
let x = 5 | 1;

