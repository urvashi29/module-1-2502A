// Arrays
// slice()
// indexOf()
// lastIndexOf()
// join()
// split()
// reverse()

// position/index starts from 0
var color = ["pink", "red", "green", "purple", "blue", "pink"];

console.log(color.slice(1, 4)); //return the array from 1st index till 3rd index
console.log(color.indexOf("pink")); //0
console.log(color.lastIndexOf("pink")); //5th index
console.log(color.reverse());

// convert string to array split()
var str = "hello ";
console.log(str.split(""));

var strTwo = "hello-wor-ld";
console.log(strTwo.split("-"));

// convert array to string join()
var arr = [2, 3, 4, 3, 54];
console.log(arr.join()); //"2,3,4,3,54"
console.log(arr.join("")); //"234454"
console.log(arr.join("*")); //2*3*4*3*54
console.log(arr.join(" "));

// objects
//key/value pair
var person = {
  firstName: "alina",
  age: 20,
  isMarried: true,
  contact: "89890990",
};

console.log(typeof person);
console.log(person.firstName);
console.log(person);

// task
// extract first five letters from a string (' gfuh ieiuei ')
// get the length of a string and make it uppercase ('hduej dij')
// take a string, make it lowercase and trim it ('   biji jdo   ')
// replace specified word in a string ('', '')
// random statements in implicit coercion e.g. (89  + 'hello' + 90 / 9)
// revise type of each datatype
// create an object for animal, car
// find the duplicate in a string() (use array) - optional
// reverse a string (use array method)
// find the highest and lowest value in array -loops
// display first 3 elements in an array in console
// remove 4th (index) element and add 2 element there

// Objects
// this keyword (in function)
// set
// map
// 2D Array
// JSON (after functions)

// how many way we can create object
// 1. object literal
var person = {
  firstName: "alina",
  lastName: "joe",
  age: 20,
  details: function () {},
};

// 2. using Object.create()
var personDetails = Object.create(person);
personDetails.contactNumber = 89899898;
personDetails.age = 40;
console.log(personDetails.firstName);
console.log(person.details());

// 3. new keyword (class & propotype)
// var student = new University();

//accessing object properties
console.log(person.firstName);
console.log(person["firstName"]);

// Object methods
console.log(Object.keys(person)); //return the array with object property
console.log(Object.values(person)); //return the array with object values
console.log(Object.entries(person));
// console.log(Object.freeze(person));/can't modify

// to update a object
person.lastName = "alaya";
console.log(person);

// to add new property
person.emailAddress = "admin@gmail.com";
console.log(person);

//delete
delete person.age;
console.log(person);

// for...in (2015) iteration over objects
for (var x in person) {
  console.log(x); //property
  console.log(person[x]); //value
}

// Set: built-in object | store data in the form arrays | does't allow duplicate value

// create & add data
var setValue = new Set(["pink", "red", "orange", "orange", "white", "yellow"]);
console.log(setValue);

// set methods
var mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
console.log(mySet);

mySet.delete(4);
console.log(mySet);

// mySet.clear();
// console.log(mySet);

console.log(mySet.has(2)); //if element exits return true

console.log(mySet.size); //return size of the set

// iterate
for (var color of setValue) {
  console.log(color);
}

// set to array
const colorArray = Array.from(setValue);
console.log(colorArray);

// Map: built-in object | store data in key value pair | store key/property of any datatype

// create
var myMap = new Map();

// Map methods
myMap.set("name", "alex");
myMap.set("last", "joe");
myMap.set("age", "24");
myMap.set("1", "hello");
console.log(myMap);

myMap.delete("name");
console.log(myMap);

// myMap.clear();
// console.log(myMap);

console.log(myMap.size);

console.log(myMap.has("name"));

// convert map to array
var arrayMap = Array.from(myMap);
console.log(arrayMap);

// iteration through for..of

// mutidimensional array: [[], [], []]

// 2D Array
var arr = [
  ["apple", "orange"], //0th
  ["grape", "pear"], //1st
  ["pineapple", "mango"], //2nd
];

console.log(arr[0][0]); //apple

arr.push(["mango", "orange"]);

// iteration
for (var fruit of arr) {
  for (var ele of fruit) {
    console.log(ele);
  }
}
