/*
1. Write an arrow function with two parameters that calculates the area of a rectangle. Print the output.
*/

const getAreaofRectangle= (l, b) => 2 * 4;
console.log(getAreaofRectangle());

/*
2. Write an arrow function with two parameters 15 and 5, that checks if the first number is divisible by the second number. Print the output.
*/
const isDivisible= (num1, num2) => 15 % 5 === 0;
console.log(isDivisible());

/*
3. Write an arrow function with two parameters 15 and 5, that calculates the difference of the two numbers. Print the output.
  */
const getDifference= (num1, num2) => 15 - 5;
console.log(getDifference());
/*
4. Write an arrow function with three parameters that concatenates three strings. Your Output should be: I am happy.
  */

const getConcatinateStrings = (str1, str2, str3) => str1 + " " + str2 + " " + str3;
console.log(getConcatinateStrings("I", "am", "happy."));

/*
5. Convert the below arrow function into traditional function declaration format?

const isBigger = (a, b) => a > b
console.log("Is 2 bigger than 3?", isBigger(2, 3))
  */

function isBigger(a,b){
    if(a>b){
        console.log("Is 2 bigger than 3") 
    }else{
        console.log("3 IS bigger than 2") 
    }
}

console.log(isBigger(2,3))
/*
6. Convert the below function into an arrow function?

function printProduct(a, b) {
  return a * b
};
console.log("Product of two numbers: ", printProduct(2, 6))
  */

const printProduct = (a, b) => a * b
console.log(printProduct(2,3));
/*
7. Convert the below function into an arrow function?
  function getGreeting(greeting, name){ 
    return greeting + name
  }
  console.log(getGreeting("Hello ", "John"))
  */
const getGreeting = (greeting, name) => greeting + name
console.log(getGreeting("Hello ", "John"))
