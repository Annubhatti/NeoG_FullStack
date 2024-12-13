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
    const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
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
