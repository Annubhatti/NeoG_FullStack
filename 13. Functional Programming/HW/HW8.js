//1. Given an array of numbers, filter the even numbers into a new array.

const nums = [12, 5, 20, 7, 8, 15, 30];

const checkEven = nums.filter(num => num%2 === 0)
console.log(checkEven)


//2. Given an array of strings, filter the strings that have length greater than 5 into a new array.

const wordss = ["kiwi", "mango", "apple", "orange", "banana"];
const checkLengthofString = wordss.filter(word => word.length > 5)
console.log(wordss)

//3. Given an array of strings, filter the strings that start with letter 'S' into a new array. Explore .startsWith() method.

const words = ["Sun", "Moon", "Star", "Planet", "Saturn"];
const checkStringWithFirst = words.filter(str => str.startsWith('S'))
console.log(checkStringWithFirst);


//4. Given an array of numbers, filter the numbers that are not multiples of 3 into a new array.

const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const checkNotMultiple3 = threeMultiples.filter(num => num % 3 !== 0)
console.log(checkNotMultiple3);


//5. Given an array of numbers, filter the numbers divisible by both 7 and 3 into a new array.

const numbs = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const divisibleBy7And3 = numbs.filter(num => num % 21 === 0);
console.log(divisibleBy7And3);


//6. Given an array of strings, filter the strings that are in lowercase into a new array.

const newwords = ["APPLE", "banana", "KIWI", "orange", "GRAPE"];
const lowerString = newwords.filter(str => str === str.toLowerCase())
console.log(lowerString);


////7. Given an array of strings, filter the strings that do not contain with the letter 'a' in them.

const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"];
const wordsWithoutA = wordsY.filter(word => !word.includes('a'));
console.log(wordsWithoutA);


//8. Given an array of numbers, filter the numbers that are multiples of either 2 or 3 into a new array.

const numsOnetoTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplesOf2Or3 = numsOnetoTen.filter(num => num % 2 === 0 || num % 3 === 0);
console.log(multiplesOf2Or3);


//9. Given an array of strings, filter the strings that includes the letter 'y' or 'a' into a new array.

const feelingWords = ["happy", "sad", "weepy", "sleepy", "rainy"];
const wordsWithYorA = feelingWords.filter(word => word.includes('y') || word.includes('a'));
console.log(wordsWithYorA);


//10.Given an array of numbers, filter the numbers between 20 to 40 into a new array.

const newNums = [41, 12, 31, 14, 52, 6, 27, 38, 29, 100];
const numbersBetween20And40 = newNums.filter(num => num >= 20 && num <= 40);
console.log(numbersBetween20And40);
