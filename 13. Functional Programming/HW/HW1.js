/**
 * 1. Given an array of strings, use `.map()` to return the length of each string in the array.

const words = ["apple", "banana", "kiwi", "orange", "grape"];

// Output: [5, 6, 4, 6, 5]
 */

const words = ["apple", "banana", "kiwi", "orange", "grape"];
const stringsArray = words.map((word) => word.length)
console.log(stringsArray);

/**
 * 2. Given an array of numbers, use `.map()` to square each number.

const numbers = [1, 2, 3, 4, 5];

// Output: [1, 4, 9, 16, 25]
 */

const numbers = [1, 2, 3, 4, 5];
const numbersArray = numbers.map((num) => num * num)
console.log(numbersArray)

/*3. Given an array of strings, use `.map()` to convert each string to uppercase.

const fruits = ["apple", "banana", "kiwi", "orange", "grape"];

// Output: ['APPLE', 'BANANA', 'KIWI', 'ORANGE', 'GRAPE'] */

const fruits = ["apple", "banana", "kiwi", "orange", "grape"];
const stringstoUpCase = fruits.map((word) => word.toUpperCase());
console.log(stringstoUpCase);

/*4. Given an array of numbers, use `.map()` to calculate the square root of each number.

const nums = [4, 9, 16, 25, 36];

// Output: [2, 3, 4, 5, 6]
 */
const nums = [4, 9, 16, 25, 36];
const numbersArraySquareRoot = nums.map((num) => Math.sqrt(num));
console.log(numbersArraySquareRoot);


/*5. Given an array of strings, use `.map()` to add a prefix to each string.

const prefixFruits = ["apple", "banana", "kiwi", "orange", "grape"];

// Output: ['fruit-apple', 'fruit-banana', 'fruit-kiwi', 'fruit-orange', 'fruit-grape']
 */
const prefixFruits = ["apple", "banana", "kiwi", "orange", "grape"];
const stringsArrayPrefix = prefixFruits.map((word)=>`fruit-${word}`)
console.log(stringsArrayPrefix)

/*6. Given an array of numbers, use `.map()` to add 10 to each number.

const numbersArray = [1, 2, 3, 4, 5];

// Output: [11, 12, 13, 14, 15]
 */
const numbersArray1 = [1, 2, 3, 4, 5];
const addToNumbersArray = numbersArray1.map((num) => num+10)
console.log(addToNumbersArray)



/*7. Given an array of numbers, use `.map()` to add the square of each number to that number.

const numsArray = [1, 2, 3, 4, 5];

// Output: [2, 6, 12, 20, 30]
 */
const numsArray = [1, 2, 3, 4, 5];

// Use .map() to add the square of each number to itself
const updatedArray = numsArray.map(num => num + num ** 2);

console.log(updatedArray);


/*8. Given an array of numbers, use `.map()` to convert each number to its absolute value. Use Math.abs() method.

const numsArr = [-5, 3, -8, 12, -1, 6];

// Output: [5, 3, 8, 12, 1, 6]
 */
const numsArr = [-5, 3, -8, 12, -1, 6];
const convertNumbersArray = numsArr.map((num) => Math.abs(num))
console.log(convertNumbersArray);

/*9. Given an array of strings, use `.map()` to append the string "!" to each element.

const phrases = ["Hello", "How are you", "Goodbye"];

// Output: ['Hello!', 'How are you!', 'Goodbye!']
 */
const phrases = ["Hello", "How are you", "Goodbye"];
const updatedPhrases = phrases.map(phrase => `${phrase}!`);

console.log(updatedPhrases);

/*10. Given an array of strings, use `.map()` to capitalize the third letter of each word.

const words = ["apple", "banana", "kiwi", "orange", "grape"];

 // Output: [ 'apPle', 'baNana', 'kiWi', 'orAnge', 'grApe' ]
  */
 const worDs = ["apple", "banana", "kiwi", "orange", "grape"];

// Use .map() to capitalize the third letter of each word
const updatedWords = worDs.map(word => {
    if (word.length >= 3) {
        return word.slice(0, 2) + word[2].toUpperCase() + word.slice(3);
    }
    return word; // If word length is less than 3, return it unchanged
});

console.log(updatedWords);
