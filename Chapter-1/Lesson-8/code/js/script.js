// var vs let vs const
// Function Expressions vs function declaration
// arrow function (// 3. this keyword (after window object))
// call stack
// lexical scope & closures

// var vs let vs const

//block scope
// {
// }
// for() {}
// if() {}

// using var
var x = 20; //global
{
  var x = 30;
  console.log(x); //30
}

console.log(x); //30

// 1. using let: it is used create variable with a block scope
var y = 20;
{
  let y = 10; //block
  y = 30; //re-initialize
  console.log(y); //10
}
console.log(y); //20

// 2. variable can't be re-declared with the same name
// var z = 20;
// let z = 100;
// console.log(z);

// 3. hoisting doesn't work here (temporal dead zone)
// a = 20;
// console.log(a);
// let a;

//const: is used declare block scope variable with a constant reference
// 1.
var b = 20;
{
  const b = 40;
  // b = 10;//give error
  console.log(b); //40
}
console.log(b); //20

//In, const you can't changes refernce change value
const arr = [2, 1, 100, 12, 4, 2, 1, 2];
arr[0] = 100;
// arr = [2, 2,12 ,2 ];//give error
console.log(arr); //

// 2. variable can't be re-declared with the same name
// var z = 20;
// const z = 100;
// console.log(z);

// 3. hoisting doesn't work here (temporal dead zone)
// a = 20;
// console.log(a);
// const a;

//  function declaration
add();

function add() {
  console.log("additiobn: " + (10 + 20));
}

// Function Expressions
// funExp(10, 20);//error

var funExp = function (x, y) {
  console.log("addition: " + (x + y));
};

// funExp(10, 20);

// arrow function vs function: with arrow function we can write shorter function syntax
// 1. syntax
function hello() {
  return "hi";
}

console.log(hello());

// with arrow
helloArrow = () => {
  return "hi";
};

// is same as
// helloArrow = () =>  "hi"

console.log(helloArrow());

// 2. return keyword

// 3. this keyword (after window object)

// call stack

// lexical scope & closures
function add() {
  var x = 20; //local/parent scope/lexical scope

  //   closure function
  function inc() {
    x++;
    console.log(x);
  }

  return inc;
}

let fun = add();
console.log(fun); //inc
fun();
