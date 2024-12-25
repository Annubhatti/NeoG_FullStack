// 1. Create a React component called ArrayOperations, which performs the following calculations on the given array.

// Given array: const numbers = [1, 2, 3, 4, 5];

// Calculate the sum of all numbers in the array. Use appropriate array method.

// Calculate the average of all numbers in the array. Use appropriate array method.

// Find the maximum out of the numbers in the array. Use appropriate array method.

// Find the minimum out of the numbers in the array. Use appropriate array method.

// 2. Create a React component called ObjectManipulation, to update the age of person from 28 to 29 and display the person details. Use appropriate ES6 syntax.

// const person = {

//     name: "Sarah",

//     age: 28,

//     city: "New York",

//   };

// 3. Create a React component called SquareArea, to find the area of a square. The sides of square is 5 cm in length.

// 4. Create a React component called CapitalizeString, to capitalize the given string. - "hello world".

// 5. Create a React component named CircleArea, to find the area of a circle. The radius of the circle is 8 cm.

// Expected Output:
// Array Operations
// Sum: 15

// Average: 3

// Maximum: 5

// Minimum: 1

// Person Details
// Name: Sarah

// Age: 29

// City: New York

// Area of Square
// Side length of the square: 5 cm

// Area of the square: 25 cm²

// Capitalize Text
// Original String: hello world

// Capitalized String: Hello world

// Area of Circle
// Radius of the circle: 8 cm

// Area of the circle: 201.06 cm²
import React from 'react';
import './App.css';

const ArrayOperations = () => {
    const numbers = [1, 2, 3, 4, 5];

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;

    const max = Math.max(...numbers);
    const min = Math.min(...numbers);

    return (
        <div>
            <p>Sum: {sum}</p>
            <p>Average: {average}</p>
            <p>Maximum: {max}</p>
            <p>Minimum: {min}</p>
        </div>
    );
}

const ObjectManipulation = () => {       
    const person = {
        name: "Sarah",
        age: 28,
        city: "New York",
    };

    // Correctly update the person object using Object.assign
    const updatedPerson = Object.assign({}, person, { age: 29 });

    return (
        <div>
            <p>Name: {updatedPerson.name}</p>
            <p>Age: {updatedPerson.age}</p>
            <p>City: {updatedPerson.city}</p>
        </div>
    );
}

const SquareArea = () => {
    const sideLength = 5; // Side of the square in cm
    const area = sideLength * sideLength; // Area of square = side²
    return (
        <div>
            <p>Side length of the square: {sideLength} cm</p>
            <p>Area of the square: {area} cm²</p>
        </div>
    );
}

const CapitalizeString = () => {
    const str = "hello world";
    const capitalizedStr = str.toUpperCase();
    return (
        <div>
            <p>Original String: {str}</p>
            <p>Capitalized String: {capitalizedStr}</p>
        </div>
    );
}

const CircleArea = () => {
    const radius = 8; // Radius of the circle in cm
    const area = Math.PI * radius * radius; // Area of circle = π * r²
    return (
        <div>
            <p>Radius of the circle: {radius} cm</p>
            <p>Area of the circle: {area.toFixed(2)} cm²</p>
        </div>
    );
}

export default function App() {
    return (
        <main>
            <div>
                <h1>Array Operations</h1>
                <ArrayOperations />
                <h1>Person Details</h1>
                <ObjectManipulation />
                <h1>Area of Square</h1>
                <SquareArea />
                <h1>Capitalize Text</h1>
                <CapitalizeString />
                <h1>Area of Circle</h1>
                <CircleArea />
            </div>
        </main>
    );
}
