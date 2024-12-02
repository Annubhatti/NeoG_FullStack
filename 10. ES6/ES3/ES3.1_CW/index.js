// Default parameters

// write an arrow function with default params to add two numbers


//const addNumbers = (a, b) => a+b
//console.log(addNumbers(2)) // NaN
const addNumbers = (a, b=1) => a+b
console.log(addNumbers(2)) // NaN

// if u pass the value when calling it will ignore default value
const multiplyNumbers = (a, b=1) => a+b
console.log(multiplyNumbers(2,2))

//write an arrow function with default params to concatenate two strings
//const concatenateStrings  = (name, greeting="Hello") => greeting + name
//console.log(concatenateStrings("Bob"))

// its wokrs fine take dfault values
const concatenateStrings  = (name="Bob", greeting="Hello") => greeting + name
console.log(concatenateStrings())

// we can not skip value (1,,3)gives error

const addThreeNumbers = (a, b, c=3) => a+b+c
console.log(concatenateStrings(1,2)) //its works fine


