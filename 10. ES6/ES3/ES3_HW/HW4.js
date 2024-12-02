/**
 * 1. Write an arrow function that takes an array of numbers and returns the sum and the difference of the first two elements in the array.

console.log(sumAndDifference([5, 3])); // Output: Sum: 8, Difference: 2

console.log(sumAndDifference([10, 7])); // Output: Sum: 17, Difference: 3

2. Write an arrow function that extracts the first and last characters from a string.

    console.log(extractFirstAndLast("hello")); // Output: First character: h, Last character: o

    console.log(extractFirstAndLast("world")); // Output: First character: w, Last character: d

3. Write an arrow function that extracts the length and width from a rectangle object and calculates its area.

console.log(calculateRectangleArea({ length: 5, width: 3 })); // Output: The area of the rectangle is: 15

console.log(calculateRectangleArea({ length: 8, width: 4 })); // Output: The area of the rectangle is: 32  

4. Write an arrow function that takes an array of colors and extracts the first two colors using destructuring.

console.log(getFirstTwoColors(["red", "blue", "green", "yellow"])); // Output: The first two colors are: red and blue

console.log(getFirstTwoColors(["orange", "purple", "pink"])); // Output: The first two colors are: orange and purple

5. Write an arrow function that takes an object with a nested object and extracts information from it.

console.log(extractNestedInfo({ data: { name: "John", age: 35, country: "USA" } }));
// Output: John is 35 years old and lives in USA.

console.log(extractNestedInfo({ data: { name: "Emma", age: 28, country: "Canada" } }));
// Output: Emma is 28 years old and lives in Canada.

6. Write an arrow function that takes an array of numbers and returns the product of first two numbers and then subtract the third number from it.

console.log(productAndDifference([5, 3, 5, 6])); // Output: Product and Difference: 10

console.log(productAndDifference([10, 7, 35, 30])); // Output: Product and Difference: 35

7. Write an arrow function that takes an object and extracts information from it.

console.log(extractData({ id: 1, product: { itemName: "Pencil", description: "Extra Dark Pencil", manufacturingCountry: "USA" } }));
// Output: Item name: Pencil, Description: Extra Dark Pencil, Manufacturing Country: USA

console.log(extractData({ id: 2, product: { itemName: "Sharpener", description: "Faber Castell Premium", manufacturingCountry: "Germany" } }));
// Output: Item name: Sharpener, Description: Faber Castell Premium, Manufacturing Country: Germany
 */

const sumAndDifference = ([a, b]) => {
    return `Sum: ${a + b}, Difference: ${Math.abs(a - b)}`;
  };
  
  console.log(sumAndDifference([5, 3])); // Output: Sum: 8, Difference: 2
  console.log(sumAndDifference([10, 7])); // Output: Sum: 17, Difference: 3

  
  const extractFirstAndLast = (str) => {
    const [first, ...rest] = str;
    const last = rest[rest.length - 1];
    return `First character: ${first}, Last character: ${last}`;
  };
  
  console.log(extractFirstAndLast("hello")); // Output: First character: h, Last character: o
  console.log(extractFirstAndLast("world")); // Output: First character: w, Last character: d

  
  const calculateRectangleArea = ({ length, width }) => {
    return `The area of the rectangle is: ${length * width}`;
  };
  
  console.log(calculateRectangleArea({ length: 5, width: 3 })); // Output: The area of the rectangle is: 15
  console.log(calculateRectangleArea({ length: 8, width: 4 })); // Output: The area of the rectangle is: 32

  
  const getFirstTwoColors = ([color1, color2]) => {
    return `The first two colors are: ${color1} and ${color2}`;
  };
  
  console.log(getFirstTwoColors(["red", "blue", "green", "yellow"])); // Output: The first two colors are: red and blue
  console.log(getFirstTwoColors(["orange", "purple", "pink"])); // Output: The first two colors are: orange and purple

  
  const extractNestedInfo = ({ data: { name, age, country } }) => {
    return `${name} is ${age} years old and lives in ${country}.`;
  };
  
  console.log(extractNestedInfo({ data: { name: "John", age: 35, country: "USA" } }));
  // Output: John is 35 years old and lives in USA.
  console.log(extractNestedInfo({ data: { name: "Emma", age: 28, country: "Canada" } }));
  // Output: Emma is 28 years old and lives in Canada.

  
  const productAndDifference = ([a, b, c]) => {
    return `Product and Difference: ${a * b - c}`;
  };
  
  console.log(productAndDifference([5, 3, 5, 6])); // Output: Product and Difference: 10
  console.log(productAndDifference([10, 7, 35, 30])); // Output: Product and Difference: 35

  
  const extractData = ({ product: { itemName, description, manufacturingCountry } }) => {
    return `Item name: ${itemName}, Description: ${description}, Manufacturing Country: ${manufacturingCountry}`;
  };
  
  console.log(
    extractData({
      id: 1,
      product: {
        itemName: "Pencil",
        description: "Extra Dark Pencil",
        manufacturingCountry: "USA",
      },
    })
  );
  // Output: Item name: Pencil, Description: Extra Dark Pencil, Manufacturing Country: USA
  
  console.log(
    extractData({
      id: 2,
      product: {
        itemName: "Sharpener",
        description: "Faber Castell Premium",
        manufacturingCountry: "Germany",
      },
    })
  );
  // Output: Item name: Sharpener, Description: Faber Castell Premium, Manufacturing Country: Germany

  
  