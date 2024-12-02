// .filter() -> its works on arrays similar to the map

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers);

const words = ["Apple", "Mango", "Orange", "Grapes"]
const longWords = words.filter(word => word.length > 5)
console.log(longWords)

const numbersArray = [1, -2, 3, -4, 5, -6, 7, 8, -9]
const positiveNumberArray = numbersArray.filter(num => num > 0)
console.log(positiveNumberArray);

const fruits = ["Apple", "Mango", "Orange", "Grapes", "melon"]
const fruitsContainingA = fruits.filter(fruit => fruit.includes("a"))
console.log(fruitsContainingA);