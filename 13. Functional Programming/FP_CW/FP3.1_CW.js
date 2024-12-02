//reduce method :
//it takes ur callback function  aacumalator or current value
// its itratiog on array

// sum of numbers in array
const numbers = [1, 2, 3, 4]
let sum =0; // acumulator
for(let i=0;i<numbers.length;i++){
    sum+=numbers[i]
}
console.log(sum)

const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue,0)
console.log(sumOfNumbers)

// concatenate into a single string

const stringsArray = ["Hello", "World", "!"]
const combinedString = stringsArray.reduce((accumulator, currentValue) => accumulator +currentValue, "")
console.log(combinedString)

// find the maximum number in an array
const numbersArray = [10, 5, 8, 20, 15]
const maxNumber = numbersArray.reduce((acc, curr) => (curr > acc ? curr : acc),numbersArray[0])
console.log(maxNumber)

// occurence of each word  in a array

const fruits = ["apple", "banana", "apple", "kiwi", "orange", "grape"];
const wordCount = fruits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
} ,{})
console.log(wordCount)

