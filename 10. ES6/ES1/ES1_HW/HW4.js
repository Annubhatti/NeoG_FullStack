/*
Question 1. Define an object 'car' with two properties, brand and model.

  1.1 Console the 'brand' property of the 'car' object.

  1.2 Console the 'model' property of the 'car' object.

  1.3 Change the value of 'brand' property of the 'car' object to "Honda".

  1.4 Console the updated 'car' object.

  1.5 Add two more properties to the 'car' object, year and color. Assign the value for year as 2022 and value for color as “Blue”.

  1.6 Use for-in loop to print all properties of the 'car' object.

Expected output for Question 1:
1.1: Toyota
1.2: Corolla
1.4: {brand: 'Honda', model: 'Corolla'}
1.6: Properties of 'car' object
brand: Honda
model: Corolla
year: 2022
color: Blue
*/
const car = {
    brand: "Toyota",
    model: "Corolla"
}
console.log("1.1:", car.brand);
console.log("1.2:", car.model);

car.brand = "Honda";
console.log("1.4:", car);

car.year = 2022;
car.color = "Blue";
console.log("1.6: Properties of 'car' object");
for(let key in car){
    console.log(`${key}: ${car[key]}`);
}

/*
Question 2. Define an object 'citizen' with three properties, name, age and occupation.

  2.1 Change the 'age' property of the 'citizen' object to 68 and print age to the console.

  2.2 Add 2 to the 'age' property of the 'citizen' object and print the age to the console.

  2.3 Add a property city to the object with value “Delhi” and then print all properties of the 'citizen' object using for-in loop.

Expected output for Question 2:
2.1: Updated age: 68
2.2: Updated age after adding 2: 70
2.3: Properties of 'citizen' object
name: Ramesh kumar
age: 70
occupation: Retired
city: Delhi
*/

// Define the 'citizen' object with initial properties
let citizen = {
    name: "Ramesh Kumar",
    age: 60,
    occupation: "Retired"
};

// 2.1 Update the 'age' property to 68 and print it
citizen.age = 68;
console.log(`2.1: Updated age: ${citizen.age}`);

// 2.2 Add 2 to the 'age' property and print it
citizen.age += 2;
console.log(`2.2: Updated age after adding 2: ${citizen.age}`);

// 2.3 Add a new property 'city' and print all properties using for-in loop
citizen.city = "Delhi";
console.log("2.3: Properties of 'citizen' object");
for (let key in citizen) {
    console.log(`${key}: ${citizen[key]}`);
}

/*
Question 3: Create a person object with properties name and age. Put your own value.

  3.1 Add a property 'bp' to the person object with value "Normal".

  3.2 Check age and bp for fitness to travel. If the age of the person is above 60 and the bp is normal, then console "Fit to travel." otherwise console "Not fit to travel."

Output should be as per your object values.  
*/

let person = {
    name: "John Doe",
    age: 65
};
//3.1
person.bp = "Normal";
console.log(person);
//3.2

if(person.age > 60 && person.bp === "Normal"){
    console.log("Fit to travel.");
}else{
    console.log("Not Fit to travel.");
}