// arrrow function that takes a string and returns an object we use here ({}) for objects
const createStringObject = str => ({text: str})
console.log(createStringObject("Hello"))

// arrow function that takes two numbers and return an object with sum and product of those number
const calculateSumAndProduct = (a, b) => ({sum: a+b, product: a*b})
console.log(calculateSumAndProduct(2,3))

//arrow function that takes a person name and age and returns an object with those properties;

const createPersonObject = (name, age) => ({name: name, age: age})
console.log(createPersonObject("Alice",3))