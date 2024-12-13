//1. Given an array of strings, find the total length of all strings using `.reduce()`.

const stationeryWords = [

  "pen",

  "notebook",

  "eraser",

  "notebook",

  "pencil",

  "notebook",

  "pencil",

]

const totalLength = stationeryWords.reduce((acc, str)=> acc + str.length,0)
console.log(totalLength);
// Output: 45

//2. Given an array of numbers, find the sum of all even number using `.reduce()`.

const numbersArray = [1, 2, 3, 4, 5, 6]
const sumOfEven = numbersArray.reduce((sum, num) => {
    if (num % 2 === 0) {
      return sum + num;
    }
    return sum;
  }, 0);
  
  console.log(sumOfEven);
// Output: 12



//3. Given an array of numbers, count the number of odd numbers using `.reduce()`.

const numsArr = [11, 22, 32, 14, 15, 62, 17, 18, 29, 10]
const countOddNums = numsArr.reduce((count, num) => {
    return count + (num % 2 !== 0 ? 1 : 0);
  }, 0);
  
  console.log(countOddNums);
// Output: 4

//4. Given an array of numbers, create an object with the count of even and odd numbers using `.reduce()`.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const countEvenOdd = nums.reduce((acc, num) => {
    if (num % 2 === 0) {
      acc.even += 1;
    } else {
      acc.odd += 1;
    }
    return acc;
  }, { even: 0, odd: 0 });
  
  console.log(countEvenOdd);
// Output: { even: 4, odd: 5 }

//5. Given an array of numbers, create an object with the count of positive and negative numbers using `.reduce()`.

const allNumns = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12]
const countPosAndNeg = allNumns.reduce((acc, num) => {
    if (num > 0) {
      acc.pos += 1; // Count positive numbers
    } else if (num < 0) {
      acc.neg += 1; // Count negative numbers
    }
    return acc;
  }, { pos: 0, neg: 0 });
  
  console.log(countPosAndNeg);
// Output: { pos: 6, neg: 4 }

//6. Given an array of numbers, find the product of negative numbers using `.reduce()`.

const numPositive = [-2, 3, 4, 0, -5, 6]
const productOfNegatives = numPositive.reduce((product, num) => {
    if (num < 0) {
      return product * num; // Multiply negative numbers
    }
    return product; // Skip non-negative numbers
  }, 1); // Start with 1 because we are multiplying
  
  console.log(productOfNegatives);
// Output: 10

//7. Given an array of strings, capitalize all the letter of each word and concatenate them into a single string using `.reduce()`.

const wordsCaps = ["reduce", "method", "needs", "a", "lot", "of", "practice"]
const capitalizedWords = wordsCaps.reduce((acc, word) => {
    return acc + word.toUpperCase() + " ";
  }, "").trim(); // Using trim() to remove trailing space
  
  console.log(capitalizedWords); 
// Output: REDUCE METHOD NEEDS A LOT OF PRACTICE

//8. Given an array of numbers, create an object with the count of positive even numbers and count of all the other numbers using `.reduce()`.

const allNumsArr = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12]
const countPosEvenAndOthers = allNumsArr.reduce((acc, num) => {
    if (num > 0 && num % 2 === 0) {
      acc.posEven += 1; // Count positive even numbers
    } else {
      acc.others += 1; // Count all other numbers
    }
    return acc;
  }, { posEven: 0, others: 0 });
  
  console.log(countPosEvenAndOthers);
// Output: { posEven: 3, others: 7 }

//9. Given an array of numbers, find the sum of all negative odd number using `.reduce()`.

const numbersArr = [1, -2, -3, 4, -5, 6, 7, -9, 12, 11]
const sumNegativeOdd = numbersArr.reduce((sum, num) => {
    if (num < 0 && num % 2 !== 0) {
      return sum + num;
    }
    return sum;
  }, 0);
  
  console.log(sumNegativeOdd); 
// Output: -17



//10. Given an array of strings, concatenate all letters into a single word using `.reduce()`.

const letters = ["a", "l", "p", "h", "a", "b", "e", "t"]
const word = letters.reduce((acc, letter) => acc + letter, "");

console.log(word);
// Output: alphabet