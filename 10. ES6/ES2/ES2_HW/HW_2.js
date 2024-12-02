/*
1. Write an arrow function that checks if a number is odd. Print the output.

2. Write an arrow function that calculates the length of a string. Print the length.

3. Write an arrow function that capitalizes a given string. For example: If we pass "hello" as string, the output should be "HELLO". Explore the method in javaScript to convert all letters to capital letters.

4. Write an arrow function that returns the current date in MM/DD/YYYY format. Print the output.

5. Write an arrow function that returns the current time in HH:MM:SS format. Print the output.

6. Write an arrow function that converts Fahrenheit to Celsius. Print the output.

7. Write an arrow function that checks if a given string is empty. 

  // code for function call
  console.log(isEmptyString("Hello"))
  console.log(isEmptyString(""))

8. Write an arrow function that returns a random number between 1 and 30. Print the number.

9. Write an arrow function that returns the square root of a random number between 1 and 100. Print the square root. Explore the method in javaScript to find square root.

10. Write an arrow function that changes a given string in lower case. For example: If we pass "WORLD" as string, the output should be "world". Explore the method in javaScript to convert all letters to lowercase letters.

*/

const isOdd = (num) => num % 2 !== 0
console.log(isOdd(4))

const calculateLenthString  = (str1) => str1.length
console.log(calculateLenthString("Hello"))

const capitalizeString = (str) => str.toUpperCase();
console.log(capitalizeString("hello"))

const getCurrentDate = () => {
    const date = new Date();
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };
  
console.log(getCurrentDate()); // Example Output: 11/29/2024
  
const getCurrentTime = () => {
    const time = new Date();
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };
  
  console.log(getCurrentTime()); // Example Output: 14:30:45

  const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

console.log(fahrenheitToCelsius(32)); // Output: 0
console.log(fahrenheitToCelsius(100)); // Output: 37.77777777777778

const isEmptyString = (str) => str === '';

console.log(isEmptyString("Hello")); // Output: false
console.log(isEmptyString("")); // Output: true

const getRandomNumber = () => Math.floor(Math.random() * 30) + 1;

console.log(getRandomNumber()); // Example Output: 18

const getSquareRoot = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    return Math.sqrt(randomNum);
  };
  
  console.log(getSquareRoot()); // Example Output: 6.324555320336759 (square root of a random number)
  
  const toLowerCaseString = (str) => str.toLowerCase();

console.log(toLowerCaseString("WORLD")); // Output: world
