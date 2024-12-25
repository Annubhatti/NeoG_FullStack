import React from 'react';
import './App.css';

//How to make function calls within jsx

const MathOperations = () => {
    const a = 20
    const b = 8
    const getSum = (x, y) => {
        return x+y
    }
    return (
      <div>
        <p>{a} + {b} equals {getSum()}</p>
      </div>
    );
  };

const GetFormatDate = () => {
    const getCurrentDate = () => {
        return new Date().toLocaleDateString()
    }
    return <p>Current Date: {getCurrentDate()}</p>
}

const CallGreetingFunction = () => {
    const getGreeting = () => {
        return "Hello World!"
    }
    return <h1>{getGreeting()}</h1>
}

export default function App() {
    return (
        <main>
            <div>
                <MathOperations />
                <GetFormatDate />
                <CallGreetingFunction />
            </div>
        </main>
    );
}
