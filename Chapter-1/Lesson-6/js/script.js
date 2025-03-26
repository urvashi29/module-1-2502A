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
