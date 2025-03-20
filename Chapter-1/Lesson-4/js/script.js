console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(true > false); //true
console.log(true + false > 4); //false
console.log(true || true); //
console.log(true || false);
console.log(false || false);
console.log(1 || 0); //1 or true

// ( 1st first truth value, falsy(null, undefined))
console.log(null || 1); //1
console.log(undefined || 1 || 0); //1

console.log(1 && 0); //0
console.log(null && 5); //null
console.log(1 && 2 && 3); //3 (return the last value)
console.log(1 && 2 && null && 3); //null

// conditional statement
// if
// syntax
// if (condition) {
//  block of code
// }

var first = "alina";
if (first === "alina") {
  console.log("name is: " + first);
}

// if else(either of one)
// if(condition) {
// }
// else {
// }

if (first === "alex") {
  console.log("name is: " + first);
} else {
  console.log("Incorrect name");
}

// else if (either of 1)
// syntax
// if() {
// }
// else if() {

// }else if() {

// }

var last = "joe";
if (first === "alex" && last === "joe") {
  console.log("Full name is: " + first + " " + last);
} else if (first === "alina") {
  console.log("First name is: " + first); //
} else if (last === "joe") {
  console.log("Last name is: " + last); //
} else {
  console.log("Incorrect");
}

// switch
var age = 18;

// age is compared with case values (===)
switch (age) {
  case 1:
    console.log("incorrect value");
    break;
  case 2:
    console.log("incorrect value again");
    break;
  case 18:
    console.log("correct value");
    break;
  default:
    console.log("default value");
}

// find the maximum of 3 numbers: given (10, 40, 60)
var a = 10,
  b = 40,
  c = 60;

var max = 0;
if (a > b) {
  max = a;
} else {
  max = b;
}

if (max > c) {
  console.log(max + " is greater!");
} else {
  console.log(c + " is greater!");
}

// Loops
// 1 iteration = 1 loop
// fors
// syntax
// for(statement 1; statement 2; statement 3) {
//  block of code
// }

// statement 1 -> initilization
// statement 2 -> condition
// statement 3 -> increment/decrement

// steps of execution
// st1 -> st2 -> BOC -> st3 -> st2 -> BOC -> st3, so on...

for (var j = 10; j >= 0; j--) {
  console.log("j is: " + j); //10 9 8 7 6 5 4 3 2 1 0
}

for (var i = 1; i <= 20; i++) {
  console.log(i); //1 2 ... 20
}

// arrays
var num = [2, 3, 1, 32, 3, 24, 34, 3, 4];
console.log(num.length);

//iterating/loop over array
for (var index = 0; index < num.length; index++) {
  console.log("index " + index + ":" + num[index]); //2 3 1 32 ... 4
}
