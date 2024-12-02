// map() method: is an array method  its only works on array
// it takes in a callback function then returns a new array
// syntax: map(callbackFunction)

// multiplying array with 2
const numbers = [1, 2, 3, 4, 5]
const numbersMultipliedByTwo = numbers.map((num) => num *2)
console.log(numbersMultipliedByTwo)

// doubling the array
const nubersArray = [2, 4, 5, 6]
const doubleNumbersInArray = nubersArray.map((num) => num*num)
console.log("Doubled Array: ", doubleNumbersInArray)

//Capitalize first character of each fruit
const wordsArray = ["apple", "mango", "orange", "grapes"]
const CapitalizeWordsArray = wordsArray.map((word) => 
word.charAt(0).toUpperCase()+word.slice(1))
console.log(CapitalizeWordsArray)

// change numbers array to strings
const numericArray = [2, 4, 5, 6]
const stringArray = numericArray.map((num) => num.toString())
console.log("String Array:", stringArray)
