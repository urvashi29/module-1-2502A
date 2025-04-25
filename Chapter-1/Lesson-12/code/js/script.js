// use strict
// JSON
// ES6
// Array helper functions
// Template Literals
// Array & Object Destructuring
// Object Restructuring
// Modules
// let & const
// arrow function
// class
// Spread and Rest Operators (Next lectures)

// "use strict"; //write js in strict manner
// 1. It's compulsory to declare then initialize, if including "use strict"
// a = 10; //initializing
// console.log(10);

//2. declared a variable without var
// x = {
//   a: 10,
//   b: 20,
// };

// console.log(x);

// 3. with "use strict", "this" keyword is undefined
function add() {
  // "use strict"
  console.log(this); //window
}

// add();

// JSON string
// parse ();
// stringify();

// stringify(): convert array/object to json format
let arr = [1, 2, 3, 3];
let arrJson = JSON.stringify(arr); //'[1, 2, 3, 3]'
console.log(JSON.parse(arrJson));
console.log(typeof arrJson);

let person = {
  name: "alina",
  last: "joe",
};

let objJson = JSON.stringify(person);
console.log(JSON.parse(objJson));

// Array helper functions (ES6)
// map(): iterate over arrays, return a new array

let nums = [2, 3, 7, 6, 10, 12, 13, 3];
//you can give any name to callback parameter
// map((element, index(optional), arr(optional)) => {})
let mapResult = nums.map((e, i, arr) => {
  return e * 2;
});

// is same as
// let mapResult = nums.map((e, i, arr) => e * 2);

console.log(mapResult);

//filter: is used to filter an array and return an array with all the array which pass the test/condition
let filterResult = nums.filter((e, i, arr) => {
  return e >= 10;
});

// is same as
// let filterResult = nums.filter((e, i, arr) => e >= 10);

console.log(filterResult); //[10, 12]

//forEach: is used to itearte over array
nums.forEach((ele, index, arr) => {
  console.log(ele);
});

//find(): return first array element that pass the test/condition; if not found, it will return undefined
let findResult = nums.find((e, i, arr) => {
  return e >= 11;
});
console.log("result: " + findResult); //12

//some: return boolean value if any one array element pass the test test/condition
let someResult = nums.some((e, i, arr) => {
  return e > 10;
});

console.log(someResult); //true

//every: return true if all the array elements pass the test/condition, otherwise false
let everyResult = nums.every((e, i, arr) => {
  return e > 10;
});

console.log(everyResult);

// Template Literals(``)
let str = `Hello World`;
console.log(str);

let firstName = "alina";
let lastName = "joe";

console.log("My name is " + firstName + " " + lastName + ".");

// variable & expression substitution
console.log(`My name is ${firstName} ${lastName}.`);

//multi-line
console.log("hello \n world \n hi"); //ES5
console.log(`hello
world`); //ES6

// Array & Object Destructuring (break)
// Object Restructuring (make)

// Destructuring an object
let emp = {
  salary: 839003,
  empId: 60,
};

const { salary, empId } = emp; //destructure a object
console.log(salary, empId);

// Destructuring an array
const arrVal = [2, 24, 39, 713, 93];
const [a, b, , d] = arrVal; //
console.log(a, b, d);

// let firstName = "alina";
// let lastName = "joe";

// Object Restructuring
const newObj = {
  firstName,
  lastName,
};

// Modules (import & exporting)
//ES5
const addVal = require("./common.js");
addVal();

// in ES6
import addVal from "./common.js";
addVal();

//  Tasks on array helper functions: use e6
// Check if all the property values(firstName) in an array of object is same or not
// array of object
// [
//     {
//         firstName: 'alina',
//         id: 1,
//         age: 12
//     }, {
//         firstName: 'harry',
//         id: 2,
//         age: 12
//     }, {
//         firstName: 'alina',
//         id: 3,
//         age: 12
//     }
// ]

// arr.map((e) => {
//     return e.firstName
// })

//  Get the value of the first element in an array that has value greater than 20
//  Get the value of the first element in an array that has value less than 20
// Filter data based on a id(property) in an array of objects: pick id value (2)

// Get all the person name based on age greater than and equal to 18, eligible to vote
// [{
//     firstName: 'joe',
//     age: 24
// }, {
//     firstName: 'alina',
//     age: 12
// },
// {
//     firstName: 'alex',
//     age: 20
// }
// ]

// Check element is odd or even in an array [90, 89, 56, 45]

// reduce method
// Sum all the elements of an array [90, 89, 56, 45]

// Sum of all the salaries and display final sum value
// [{
//     salary: 56000,
//     id: 1
// },
// {
//     salary: 90000,
//     id: 2
// }]

// Concatenation of all array elemets ['pink', 'blue', 'green', 'red']:
// 'pinkbluegreenred'

// Round off all the decimal numbers in an array and sum all
// the values [9.8, 9.7, 4.5, 3.4]
