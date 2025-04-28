// Spread and Rest Operators
// Regex
// reduce

let obj = {
  a: 10,
  b: 20,
};

// let objTwo = obj; //shallow copy (provide the reference of the original memory of variable)
// objTwo.a = 30;
// console.log(obj, objTwo);

//using spread operator (...) (deep copy): is used to create spread of object or array
let objTwo = { ...obj, z: 100 };
objTwo.a = 30;
console.log(obj, objTwo);

//for array
let arr = [2, 3, 3, 6];
let arrTwo = [2, 32, 23, 100];
let three = [...arr, ...arrTwo, 200];
console.log(three);

// Rest Operators(...): is used to get indefinite number of arguments into array
function add(...a) {
  console.log(a); //[1, 3, 2, 2, 3, 2, 1, 2]
}

add(1, 3, 2, 2, 3, 2, 1, 2);

// Regex
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/gim;
console.log(emailPattern.test("admin@gmail.com"));

let pattern = /[a-z]/; ///[A-Z]/
let digitPattern = /[0-9]/;

const regex = /ab+c/;
console.log(regex.test("abcccc"));

const regexPattern = /dog/;
const str = "I have a dog.";

console.log(str.replace(/dog/, "cat"));
