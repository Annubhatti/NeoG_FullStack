// 1. Given an array of numbers, filter the numbers more than 10 into a new array.

// const nums = [12, 5, 20, 8, 15, 30];

const nums = [12, 5, 20, 8, 15, 30];
const numMorethanTen = nums.filter(num=> num > 10)
console.log(numMorethanTen);

// 2. Given an array of strings, filter the strings that contain the letter 'o' into a new array.

// const words = ["hello", "world", "apple", "orange", "banana"];

const wordes = ["hello", "world", "apple", "orange", "banana"];
const stringLetters = wordes.filter(str => str.includes('o'));
console.log(stringLetters);

// 3. Given an array of numbers, filter the prime numbers into a new array.

// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const isPrime = num => {
    if (num <= 1) return false;  // Numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;  // If divisible by any number, it's not prime
    }
    return true;  // If no divisors, it's prime
  };
  
  const primeNumbers = numbers.filter(isPrime);
  
  console.log(primeNumbers);

// 4. Given an array of numbers, filter the numbers that are not multiples of 3 into a new array.

// const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const notMultiplesOfThree = threeMultiples.filter(num => num % 3 !== 0)
console.log(notMultiplesOfThree)

// 5. Given an array of numbers, filter the numbers not divisible by both 2 and 3 into a new array.

// const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const notDivisibleBy2And3 = numbs.filter(num => num % 2 !== 0 || num % 3 !== 0);
console.log(notDivisibleBy2And3);


// 6. Given an array of strings, filter the strings that are in uppercase into a new array.

// const words = ["APPLE", "banana", "KIWI", "ORANGE", "GRAPE"];

const words = ["APPLE", "banana", "KIWI", "ORANGE", "GRAPE"];
const uppercaseWords = words.filter(word => word === word.toUpperCase());
console.log(uppercaseWords);

// 7. Given an array of strings, filter the strings that do not end with the letter 'y'.
// const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"];

const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"];
const wordsNotEndingWithY = wordsY.filter(word => !word.endsWith('y'));
console.log(wordsNotEndingWithY);


// 8. Given an array of numbers, filter the numbers that are multiples of both 2 and 3 into a new array.
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplesOf2Or3 = numss.filter(num => num % 6 === 0)
console.log(multiplesOf2Or3)

// 9. Given an array of strings, filter the strings that includes the letter 'y' and 'u' into a new array.
// const feelingWords = ["happy", "sad", "sunny", "cloudy", "rainy"];

const feelingWords = ["happy", "sad", "sunny", "cloudy", "rainy"];
const wordsWithYandU = feelingWords.filter(word => word.includes('y') && word.includes('u'));
console.log(wordsWithYandU);


// 10.Given an array of numbers, filter the numbers that are multiples of 5 or 3 into a new array.
// const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplesOf5Or3 = newNums.filter(num => num % 5 === 0 || num % 3 === 0);
console.log(multiplesOf5Or3);


