// arrow function that genrates random numbers between 1 to 10
// arrow function with no params
const getRandomNumber = () => Math.floor(Math.random() * 10)
console.log(getRandomNumber());

// arrow function that return current date

const getCurrentDate = () => new Date().toLocaleDateString()
console.log(getCurrentDate());

// arrow function that returns a greeting

const getGreeting = () => "Hello, Welcome to neoG Camp!"
console.log(getGreeting());

// arrow function with one parameter
// arrow function to get the square of num
const getSquareValue = (num) => num **2
console.log(getSquareValue(3));

// arrow function to check if a number is positive

const isPositive = num => num > 0
console.log(isPositive(3))
console.log(isPositive(-2))

// arrow function  to check if a number is Even

const isEven  = num => num % 2 === 0
console.log(isEven(3))
console.log(isEven(4))
