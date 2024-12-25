// 1. Create a React component called GenerateGreeting, which has a function to return the Greeting. - "Hello John!". Pass the user name as argument.

// 2. Create a React component called CalculateArea, which has a function to calculate the area of a rectangle. Length of the rectangle is 10 cm and width of the rectangle is 5 cm.

// 3. Create a React component called CalculatePerimeter, which has a function to calculate the perimeter of a rectangle. Length of the rectangle is 10 cm and width of the rectangle is 5 cm.

// 4. Create a React component called GenerateMessage, which has a function to get the hours of the day and based on that displays appropriate message. Use the date method getHours to get the hours. If hours is less than 12 then show the message "Good Morning!". If hours is less than 18 then show the message "Good Afternoon!". And if hours is 18 or above then show the message "Good Evening!".

// 5. Create a React component named CalculateVolume, to find the volume of cylinder. The radius of the cylinder is 3 cm and height is 5 cm.

// Expected Output:
// Hello John!
// Reactangle Area: 50

// Reactangle Perimeter: 30

// Volume of Cylinder: 141.3716694115407

import React from 'react';
import './App.css';

const GenerateGreeting = ({name}) => {
    const getGreeting = (userName) => {
        return `Hello ${userName}!`
    }
    return <h1>{getGreeting(name)}</h1>
}

const CalculateArea = () => {
    const areaOfRectangle = (length, width) => {
        
        return length * width
    };

        const length = 10
        const width = 5
    return <p>Reactangle Area: {areaOfRectangle(length, width)} </p>
} 

const CalculatePerimeter = () => {
    const perimeterOfRectangle = (length, width) => {
        
        return 2 * (length + width)
    };

        const length = 10
        const width = 5
        return <p>Reactangle Perimeter: {perimeterOfRectangle(length, width)} </p> 
    
} 

const GenerateMessage = () => {
    const 
}

const CalculateVolume =  () => {
    const volCylinder = (radius, height) => {
        return Math.PI * Math.pow(radius, 2) * height;
    }
    const radius = 3
    const height = 5;

    return `Volume of Cylinder: ${volCylinder(radius,height)}`
}


export default function App() {
    return (
        <main>
            <div>
            
               <GenerateGreeting name = "John" />
               <CalculateArea />
               <CalculatePerimeter />
               <CalculateVolume />
            </div>
        </main>
    );
}
