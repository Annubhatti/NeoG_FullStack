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
    const dolar = 50
    const exchangeRate = 74.5
    const finalAmount = dolar * exchangeRate;

    return(
        <>
        <p>Amount in USD: ${dolar}</p>
        <p>Exchange Rate: {exchangeRate} INR</p>
        <p>Amount in INR: INR{finalAmount}</p>
        </>
    )
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
