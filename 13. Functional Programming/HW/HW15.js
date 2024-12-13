//1. Given an array of strings, find the longest word using `.reduce()`.

const words = ["apple", "banana", "kiwi", "orange", "grape"];

const longestString = words.reduce((acc , cur) => cur.length > acc.length ? cur : acc, "");
console.log(longestString)
// Output: banana



// 2. Given an array of numbers, find the minimum using `.reduce()`.

const numbers = [10, 5, 8, 20, 15];
const minNumbers = numbers.reduce((acc , cur) => cur < acc ? cur : acc,numbers[0])
console.log(minNumbers);
// Output: 5



// 3. Given an array of strings, find the total length of all strings using `.reduce()`.

const wordsLength = ["apple", "banana", "kiwi", "orange", "grape"];
const lengthofAllStrings = wordsLength.reduce((sum, word) => sum + word.length,0)
console.log(lengthofAllStrings)
// Output: 26



// 4. Given an array of numbers, count the number of even numbers using `.reduce()`.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const countEvenNums = nums.reduce((acc, num)=> {
    return num%2 === 0  ? acc+1 : acc},0 )
console.log(countEvenNums)
// Output: 5



// 5. Given an array of strings, capitalize the first letter of each word and concatenate them into a single string using `.reduce()`.

const wordsCaps = ["hello", "world", "how", "are", "you"];
const capitalFirstLetter = wordsCaps.reduce((acc, word)=> {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
  return acc + " " + capitalizedWord;
},"")
console.log(capitalFirstLetter)
// Output: Hello World How Are You



//6. Given an array of numbers, calculate the average of the numbers using .reduce()

const numsAvg = [10, 15, 20, 25, 30];
const averageofNumbers = numsAvg.reduce((acc, num) => acc + num, 0) / numsAvg.length;
console.log(averageofNumbers)
// Output: 20



//7. Given an array of numbers, find the sum of square of each number using `.reduce()`.

const numS = [1, 2, 3, 4, 5];
const sumOfSquares = numbers.reduce((sum, num) => sum + num ** 2, 0);

console.log(sumOfSquares);
// Output: 55



//8. Given an array of strings, create an object with the occurrences of words using `.reduce()`.

const stationeryWords = ["pen", "notebook", "eraser", "notebook", "pencil", "notebook", "pencil"];
const wordCount = stationeryWords.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
  
  console.log(wordCount);
// Output: { pen: 1, notebook: 3, eraser: 1, pencil: 2 }



//9. Given an array of strings, create an object with the occurrences of words using `.reduce()`. The keys should be the first letter of each word.

const wordsLetter = ["apple", "banana", "kiwi", "orange", "grape"];
const firstLetterCount = wordsLetter.reduce((acc, word) => {
    const firstLetter = word.charAt(0).toLowerCase();
    acc[firstLetter] = (acc[firstLetter] || 0) + 1;
    return acc;
  }, {});
  
  console.log(firstLetterCount);
 // Output: { a: 1, b: 1, k: 1, o: 1, g: 1 }



//10. Given an array of numbers, find the product of positive numbers using `.reduce()`.

const numPositive = [-2, 3, 4, -5, 6];
const product = numPositive.reduce((product, num) => {
    if (num > 0) {
      return product * num;
    }
    return product;
  }, 1);
  
  console.log(product); 
// Output: 72