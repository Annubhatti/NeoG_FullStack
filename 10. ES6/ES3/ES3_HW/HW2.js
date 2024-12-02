/**
 * 
 * 1. Write an arrow function that uses the rest parameter to log the first element and the rest of the elements in an array.

   // code for function call 
   logFirstAndRest(1, 2, 3, 4, 5)
   // Expected Output:
     First: 1
     Rest: [2, 3, 4, 5]
 */
const logFirstAndRest = (first, ...rest) => {
    console.log("First:", first);
  console.log("Rest:", rest);
}
logFirstAndRest(1, 2, 3, 4, 5)

/**
 * 2. Write an arrow function that uses the rest parameter to log the first and second element and the rest of the elements in an array.

   // code for function call 
   logFirstAndSecond(12, 22, 33, 44, 55)
   // Expected Output:
     First: 12
     Second: 22
     Rest: [33, 44, 55]
 */

     const logFirstAndSecond = (first, second, ...restNum) => {
        console.log("First:", first);
        console.log("Second:", second);
        console.log("Rest:", restNum);
     }

     logFirstAndSecond(12, 22, 33, 44, 55)

/**
 * 3. Write an arrow function that uses the rest parameter to calculate the product of numeric values.

     // code for function call
      console.log(calculateProduct(2, 3, 4)); // Output: 24
      console.log(calculateProduct(5, 2, 1, 3)); // Output: 30
 */

      const calculateProduct = (...numbers) => {
        return numbers.reduce((product, num) => product * num, 1);
      };
      
      console.log(calculateProduct(2, 3, 4)); // Output: 24
      console.log(calculateProduct(5, 2, 1, 3)); // Output: 30
      
/**
 * 4. Write an arrow function that uses the rest parameter to concatenate an arbitrary number of words into a sentence.

    // code for function call
     console.log(createSentence("JavaScript", "is", "awesome")); // Output: JavaScript is awesome
 */
     const concateStrings = (...strings) => console.log(strings.join(" "))

     concateStrings("JavaScript", "is", "fun")

/**
 * 5. Write an arrow function that uses the rest parameter to calculate the sum of numeric values.

    // code for function call    
     findSum("Sum of Numbers: ", 2, 4, 6, 8, 10); 
     // Output: Sum of Numbers:  30
 */

     const findSum = (message, ...numbers) => {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        console.log(message, sum);
      };
      
      findSum("Sum of Numbers: ", 2, 4, 6, 8, 10);
      // Output: Sum of Numbers:  30
      

/**
 * 6. Write an arrow function that uses the rest parameter to check if a specific value is present in an array. The first parameter that the function takes is the value that you have to find in the array.

    // code for function call
     console.log(containsValue(3, 1, 2, 3, 4)); // Output: true
     console.log(containsValue("apple", "banana", "orange")); // Output: false
 */

     const containsValue = (value, ...array) => {
        return array.includes(value);
      };
      
      console.log(containsValue(3, 1, 2, 3, 4)); // Output: true
      console.log(containsValue("apple", "banana", "orange")); // Output: false
      

/**
 * 7. Write an arrow function that uses the rest parameter to find the average of an arbitrary number of numeric values.

     // code for function call
     console.log(calculateAverage(10, 5, 15)); // Output: 10
     console.log(calculateAverage(2, 4, 6, 8)); // Output: 5
 */

     const calculateAverage = (...numbers) => {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        return sum / numbers.length;
      };
      
      console.log(calculateAverage(10, 5, 15)); // Output: 10
      console.log(calculateAverage(2, 4, 6, 8)); // Output: 5
      