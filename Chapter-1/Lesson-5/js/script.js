// // while loop
// //syntax
// // while(condition) {
// // block of code
// // }

// var j = 10;
// while (j > 4) {
//   console.log(j); //10 9 8 7 6 5
//   j--;
// }

// //
// var i = 1;
// for (; i <= 20; ) {
//   console.log(i);
//   i++;
// }

// // do while
// // syntax
// // do {
// //     block of code
// // } while(condition)

// var j = 20;
// do {
//   console.log("js value is: " + j); //20
//   j--;
// } while (j > 21);

// //break: it will terminate the loop | stop the execeution of the loop
// var arr = [2, 3, 34, 5, 4, 6, 56, 100, 200, 300];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === 56) {
//     console.log("element found at index: " + arr[i]);
//     break;
//   }
//   console.log("arr elements at " + i + ":" + arr[i]);
// }

// // for (var i = arr.length; i > 0; i--) {}

// //continue: terminate the iteration
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     continue;
//   }
//   console.log(arr[i]); //
// }

// // 2015 6th js
// //for...in
// //for object

// //for...of: iterating over arrays & string
// var color = ["pink", "orange", "white", "violet", "blue"];

// for (var ele of color) {
//   console.log(ele);
// }

// var str = "hello world";

// for (var char of str) {
//   console.log(char);
// }

// // for (var i = 0; i < str.length; i++) {
// //   console.log(str[i]);
// // }

// // String: "" or '' or ``(2015)
var firstName = " al ina ";
var lastName = "alex";

console.log(firstName.length); //return the length of the string

var strVal =
  " front-end development: html, css, js are the magic trio of front-end development... ";

// index/position starts from 0

// indexOf(word, index(optional))
console.log(strVal.indexOf("end", 10)); //retun the index value of the first occurence of the specific word
console.log(strVal.lastIndexOf("end")); //retun the index value of the last occurence of the specific word
console.log(strVal.search("end")); //retun the index value of the first occurence of the specific word
console.log(strVal.indexOf("hdghe")); //-1

console.log(strVal.toLowerCase());
console.log(strVal.toUpperCase());
console.log(strVal.trim()); //trimStart() trimEnd()

// "admin@gmail.com".toLowerCase() === " Admin@gmail.com ".toLowerCase().trim();//true/ false

console.log(strVal.replace("development", "dev")); //(word to be replaced, word to be replaced with)
console.log(strVal.replaceAll("development", "dev"));

console.log(strVal.slice(5, 11)); //return the string from 5th till 10th
console.log(strVal.charAt(15)); //retunr the character at 15th index
console.log(strVal.includes("html"));

// Arrays
var num = [2, 3, 1, 4, 6, 12, 5, 4, 10]; //array of number

console.log(num.length); //9
console.log(num[2]); //1

console.log(typeof num); //object

// isNaN();

// verfication of array
console.log(Array.isArray(num)); //if num is array, return true otherwise false

// push() & pop()
// num.push(100, 200, 500); //add element in the end
// console.log(num);

// num.pop(); //remove element from the end
// num.pop();
// num.pop();
// console.log(num);

// // shift unshift()
// num.unshift(200, 400); // add new elements in the beginning
// console.log(num);

// num.shift(); //remove element from the start
// console.log(num);

// splice(): add & remove in between of an array
num.splice(2, 3, 100, 200); //start of the index, number of elements to be deleted, add new elements
console.log(num);

//only delete
num.splice(2, 3);

// only add
num.splice(2, 0, 100, 200);

// slice()
// indexOf()
// lastIndexOf()
// join()
// split()
// reverse()
