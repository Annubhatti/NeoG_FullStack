// 1. Given an array of strings, use .map() to extract the first three characters of each string.
// const words = ["apple", "banana", "kiwi", "orange", "grape"];
// Output: ['app', 'ban', 'kiw', 'ora', 'gra']

const words = ["apple", "banana", "kiwi", "orange", "grape"];
const firstThreeChars = words.map((word) => word.slice(0,3))
console.log(firstThreeChars);


// 2. Given an array of numbers, use `.map()` to calculate the cube of each number.
// const nums = [1, 2, 3, 4, 5];
// Output: [1, 8, 27, 64, 125]

const nums = [1, 2, 3, 4, 5];
const cubeOfNumbers = nums.map((num) => num ** 3)
console.log(cubeOfNumbers)

// 3. Given an array of strings, use .map() to extract the characters of each string removing the first two characters.
// const fruitsArray = ["apple", "banana", "kiwi", "orange", "grape"];
// // Output: [ 'ple', 'nana', 'wi', 'ange', 'ape' ]

const fruitsArray = ["apple", "banana", "kiwi", "orange", "grape"];
const removeFirstTwo = fruitsArray.map(fruit => fruit.slice(2));
console.log(removeFirstTwo)

// 4. Given an array of salaries, use .map() and return salaries with 10% bonus added.
// const salaries = [5000, 7500, 12000, 3000, 9000];
// Output: [ 5500, 8250, 13200, 3300, 9900 ]

const salaries = [5000, 7500, 12000, 3000, 9000];
const updatedSalaries = salaries.map(salary => salary + salary * 0.1);
console.log(updatedSalaries);

//5. Given an array of names, use .map() to create an array of greetings by adding "Hello, " before each name.
//const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
// Output: [ 'Hello, Alice', 'Hello, Bob', 'Hello, Charlie', 'Hello, David', 'Hello, Eva' ]

const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
const greetEachName = names.map(name => `Hello, ${name}`)
console.log(greetEachName);

// 6. Given an array of sentences, use .map() to find the length of each sentence.
// const sentences = ["Hello, how are you?", "JavaScript is fun!", "Arrays are versatile."];
// Output: [ 19, 18, 21 ]

const sentences = ["Hello, how are you?", "JavaScript is fun!", "Arrays are versatile."];
const getLengthSentences = sentences.map(words => words.length)
console.log(getLengthSentences)

// 7. Given an array of temperatures in Celsius, use map() to convert each temperature to Fahrenheit.
// const temperaturesCelsius = [0, 20, 37, -5, 10];
// Output: [ 32, 68, 98.6, 23, 50 ]

const temperaturesCelsius = [0, 20, 37, -5, 10];
const temperaturesFahrenheit = temperaturesCelsius.map(temp => (temp*9/5)+32);
console.log(temperaturesFahrenheit);

//8. Given an array of prices, use .map() to apply and return 10% discounted price.
//const prices = [50, 75, 120, 30, 90];
// Output: [ 45, 67.5, 108, 27, 81 ]
const prices = [50, 75, 120, 30, 90];
const discountedPrices = prices.map(price => price - price * 0.1);

console.log(discountedPrices);

//9. Given an array of decimal numbers, use `.map()` to fix each number to two decimal points.
//const decimalNumbers = [50.245600, 750.56770, 12.567050, 300.5065, 9.23406789];
// Output: [ '50.25', '750.57', '12.57', '300.51', '9.23' ]

const decimalNumbers = [50.245600, 750.56770, 12.567050, 300.5065, 9.23406789];
const formattedNumbers = decimalNumbers.map(num => num.toFixed(2));
console.log(formattedNumbers);


// 10. Given an array of names, use .map() to create an array with length of each name added to the name.
// const namesArray = ["Alice", "Bob", "Charlie", "David", "Eva"];
// Output:[ 'Alice5', 'Bob3', 'Charlie7', 'David5', 'Eva3' ]

const namesArray = ["Alice", "Bob", "Charlie", "David", "Eva"];
const namesWithLength = namesArray.map(name => `${name}${name.length}`);
console.log(namesWithLength);


