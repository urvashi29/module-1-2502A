// callback function
// event loop
// timing events

// closure
counterMain = () => {
  let counter = 0;

  return () => {
    counter = counter + 5;
    console.log(counter);
    return counter;
  };
};

let increment = counterMain();
let count = increment();

// callback: It's a function which is passed as an argument to another function

// a, b are parameters
// add = (s) => {
//   console.log(s);
// };

// calculate = (a, b, callfun) => {
//   let sum = a + b;
//   callfun(sum); //calling a callback function
// };

// calculate(10, 20, add);

//alternate syntax
calculate = (a, b, callfun) => {
  let sum = a + b;
  callfun(sum); //calling a callback function
};

calculate(10, 20, (s) => {
  console.log(s);
}); //arguments

// Timing events
// setTimeout(callbakc fun, miliiseconds): execeute function after specific seconds
// 1000 ms = 1sec
setTimeout(() => {
  console.log("hello");
}, 2000);

console.log("hi");

clearTimeout();

// setInterval: execute the function after every millisecond value
let id = setInterval(() => {
  console.log("clock");
}, 2000);

setTimeout(() => {
  clearInterval(id);
}, 9000);

// Task
// create 2 functions inside a function, return function 1 if condition is true and return function 2 if condition is false
