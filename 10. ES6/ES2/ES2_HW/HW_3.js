/*
1. Write an arrow function that takes a person's firstName and lastName and returns an object with properties for firstName and lastName.

2. Write an arrow function that takes a string and returns an object with properties for string length and its uppercase version.

Expected Output: { length: 5, uppercase: 'HELLO' }

3. Write an arrow function that takes a person's firstName, lastName, age and phoneNumber and returns an object with properties for fullName, age and phoneNumber.

4. Write an arrow function that takes two words and returns an object with properties for concatenation and character count.

Expected Output: { concatenation: 'Hello World', charCount: 10 }

5. Write an arrow function that takes a radius and returns an object with properties for circumference and area of a circle. Use Math.PI method.

console.log(calculateCircleProperties(5))
// Expected output: { circumference: 31.4159, area: 78.5398 }

6. Write an arrow function that takes two numbers and returns an object with properties for their difference and quotient.

console.log(calculateDifferenceAndQuotient(10, 2))
// Expected output: { difference: 8, quotient: 5 }

7. Write an arrow function that takes a sentence and returns an object with property for word count in that sentence.

console.log(analyzeSentence("JavaScript is fun"))
// Expected output: { wordCount: 3 }

8. Write an arrow function that takes a number and returns an object with properties for its square and cube.

console.log(calculateSquareAndCube(4))
// Expected output: { square: 16, cube: 64 }

9. Write an arrow function that takes a number and returns an object indicating whether it's positive or negative.

console.log(checkNumber(-7))
// Expected output: { isPositive: false, isNegative: true }
console.log(checkNumber(5))
// Expected output: { isPositive: true, isNegative: false }
*/

const createPersonObject = (firstName, lastName) => ({firstName: firstName, lastName: lastName})
console.log(createPersonObject("Alice", "Deo"))

const createStringObject = (str1) => ({length: str1.length, uppercase: str1.toUpperCase()})
console.log(createStringObject("hello"));

const getPersonInfo = (firstName, lastName, age, phoneNumber) => ({
    fullName: `${firstName} ${lastName}`,
    age,
    phoneNumber
  });
  
  console.log(getPersonInfo("John", "Doe", 30, "123-456-7890"));
  
  const concatenateWords = (word1, word2) => ({
    concatenation: word1 + " " + word2,
    charCount: word1.length + word2.length
  });
  
  console.log(concatenateWords("Hello", "World"));
  
  const calculateCircleProperties = (radius) => ({
    circumference: 2 * Math.PI * radius,
    area: Math.PI * Math.pow(radius, 2)
  });
  
  console.log(calculateCircleProperties(5));

  const calculateDifferenceAndQuotient = (num1, num2) => ({
    difference: num1 - num2,
    quotient: num1 / num2
  });
  
  console.log(calculateDifferenceAndQuotient(10, 2));

  const analyzeSentence = (sentence) => ({
    wordCount: sentence.split(" ").length
  });
  
  console.log(analyzeSentence("JavaScript is fun"));

  const calculateSquareAndCube = (num) => ({
    square: num * num,
    cube: num * num * num
  });
  
  console.log(calculateSquareAndCube(4));

  const checkNumber = (num) => ({
    isPositive: num > 0,
    isNegative: num < 0
  });
  
  console.log(checkNumber(-7));
  // Output: { isPositive: false, isNegative: true }
  
  console.log(checkNumber(5));