/***
 * 1. Write an arrow function that takes an object containing temperature details and prints them.

console.log(printTemperature({ location: "New York", temperature: 15 }));
// Output: Location: New York, Temperature: 15 degree celsius

console.log(printTemperature({ location: "London", temperature: 10 }));
// Output: Location: London, Temperature: 10 degree celsius
 */

const printTemperature = ({ location, temperature }) => {
    return `Location: ${location}, Temperature: ${temperature} degree celsius`;
  };
  console.log(printTemperature({ location: "New York", temperature: 15 }));
  console.log(printTemperature({ location: "London", temperature: 10 }));
  

  /**
   * 2. Write an arrow function that takes an object containing fruit details and prints them.

console.log(printFruit({ fruitName: "Apple", fruitColor: "Red", inStock: true }));
// Output: Fruit Name: Apple, Fruit Color: Red, Available: true

console.log(printFruit({ fruitName: "Grapes", fruitColor: "Green", inStock: false }));
// Output: Fruit Name: Grapes, Fruit Color: Green, Available: false
   */
const printFruit = ({fruitName,fruitColor, inStock}) => {
   return `Fruit Name: ${fruitName}, Fruit Color: ${fruitColor}, Available: ${inStock}`
};
console.log(printFruit({ fruitName: "Apple", fruitColor: "Red", inStock: true }));
console.log(printFruit({ fruitName: "Grapes", fruitColor: "Green", inStock: false }));


/**
 * 3. Write an arrow function that takes an array containing a student's name and their scores, and prints them.

console.log(printStudentScores(["Alice", 90, 85, 95]));
// Output: Student: Alice, Scores: 90, 85, 95

console.log(printStudentScores(["Bob", 80, 75, 85]));
// Output: Student: Bob, Scores: 80, 75, 85

*/

const printStudentScores = ([name, ...scores]) => {
   return `Students:${name}, Scores:${scores.join(", ")}`}
console.log(printStudentScores(["Alice", 90, 85, 95]));
console.log(printStudentScores(["Bob", 80, 75, 85]));
/*

4. Write an arrow function that takes an object containing details of a product and prints them by renaming the keys.

console.log(printProductDetails({ name: "Laptop", price: 899 }));
Output: Product: Laptop, Price: $899
console.log(printProductDetails({ name: "Phone", price: 599 }));
// Output: Product: Phone, Price: $599
*/
const printProductDetails = ({name: productName , price: productPrice}) => {
   return `Product: ${productName}, Price: ${productPrice}`
}
console.log(printProductDetails({ name: "Laptop", price: 899 }));
console.log(printProductDetails({ name: "Phone", price: 599 }));

/*
5. Write an arrow function that takes an object containing a person's details with default parameters and prints them. Rename name and age.

console.log(printPersonDetails({ name: "John", age: 30 }));
// Output: Name: John, Age: 30

console.log(printPersonDetails({}));
// Output: Name: Anonymous, Age: Unknown
*/

const printPersonDetails = ({name:personName="Anonymous", age: personAge="Unknown"}) => {
   return `Name: ${personName}, Age:${personAge}`
}
console.log(printPersonDetails({ name: "John", age: 30 }));
console.log(printPersonDetails({}));
/*
6. Write an arrow function that takes an array containing a city and its population details and prints them. Rename city,  population and country.

console.log(printCityPopulation(["New York", { population: 8623000, country: "USA" }]));
// Output: City: New York, Population: 8623000, Country: USA

console.log(printCityPopulation(["Tokyo", { population: 37833000, country: "Japan" }]));
// Output: City: Tokyo, Population: 37833000, Country: Japan
*/
const printCityPopulation = ([cityName , {population: cityPopulation, country: cityCountry}]) => {
   return `City: ${cityName}, Population: ${cityPopulation}, Country: ${cityCountry}`
}
console.log(printCityPopulation(["New York", { population: 8623000, country: "USA" }]));
console.log(printCityPopulation(["Tokyo", { population: 37833000, country: "Japan" }]));

/*
7. Write an arrow function that takes an array containing a car and its details and prints them. Rename car name and model.

console.log(printCarDetails(["All-Terrain SUV", { model: "SUV", price: 4500000 }]));
// Output: Name: All-Terrain SUV, Model: SUV, Price: Rs. 4500000

console.log(printCarDetails(["GreenDrive Electric", { model: "Electric", price: 500000 }]));
// Output: Name: GreenDrive Electric, Model: Electric, Price: Rs. 500000
 */

const printCarDetails = ([carName, {model: carModel, price: carPrice}])=>{
   return `Name: ${carName}, Model: ${carModel}, Price: ${carPrice}`
}
console.log(printCarDetails(["All-Terrain SUV", { model: "SUV", price: 4500000 }]));
console.log(printCarDetails(["GreenDrive Electric", { model: "Electric", price: 500000 }]));