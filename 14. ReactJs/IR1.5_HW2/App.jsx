//1. Create a React component called RandomNumber, which shows a random number between 1 to 100.

//2. Create a React component called AbsoluteValue, which shows the absolute value of a given number. 

//const number = -10

//3. Create a React component called SumOfEvenNumbers, to calculate the sum of all even numbers present in an array. 

//const numbers = [1, 2, 3, 4, 5, 6, 7]

//4. Create a React component, to find the perimeter of a square. The sides of square is 5 cm in length.

//5. Create a React component named CurrencyConverter to convert an amount from US Dollars (USD) to Indian Rupee (INR). The amount is $50. Assuming an exchange rate of 1 USD = 74.5.

//Expected Output:
// Random Number: 90
// Absolute Value: 10
// Sum of even numbers: 12
// Square Parameter Calculator
// Side Length: 5cm
// Perimeter: 20cm

// Currency Converter

import React from 'react';
import './App.css';


const RandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 101); // Random number between 0 and 100
    return (
      <div>
        <p>{`Random Number: ${randomNum}`}</p>
      </div>
    );
  };

const AbsoluteValue = () => {
    const number = -10
    return (
        <div>
          <p>{`Absolute Value: ${Math.abs(number)}`}</p>
        </div>
      );
}

const SumOfEvenNumbers = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7]
    const findEven = numbers.reduce((sum, curr) => {
      return curr%2 === 0? sum + curr: sum;
    }, 0);
    return (
        <div>
          <p>{`Sum of even numbers: ${findEven}`}</p>
        </div>
      );
}

const ParameterofSquare = () => {
  const sideOfSquare = 5;
  const parameter = 4 * sideOfSquare;

  return(
    <div>
    <p>Side Length: {sideOfSquare}cm</p>
    <p>Perimeter: {parameter}cm</p>
    </div>
  )

}

const CurrencyConverter = () => {

}

export default function App() {
    return (
        <main>
            <div>
                <RandomNumber />
                <AbsoluteValue />
                <SumOfEvenNumbers />
                <h1>Square Parameter Calculator</h1>
                <ParameterofSquare />
                <h1>Currency Converter</h1>
                <CurrencyConverter />

            </div>
        </main>
    );
}
