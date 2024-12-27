// 1. Create a React component called ReverseArray, which has a function to return the reversed array. Use reverse method to achieve that. 

// const originalArray = [1, 2, 3, 4, 5]

// 2. Create a React component called CalculateBMI, which has a function to calculate the bmi. BMI is calculated as weight divided by the square of height. Weight is 70 kg and height is 1.75 m.

// 3. Create a React component called GenerateQuote, which has a function to display random quote from a given array of quotes. 

//   const quotes = [

//       "The only way to do great work is to love what you do. - Steve Jobs",

//       "Innovation distinguishes between a leader and a follower. - Steve Jobs",

//       "Your time is limited, don't waste it living someone else's life. - Steve Jobs",

//       "Stay hungry, stay foolish. - Steve Jobs",

//       "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",

//     ];

// 4. Create a React component called GradeAnalyser, which has a function that takes a student's score and displays a grade along with a corresponding message. Pass the score 85 as argument. Assume the grading scale is as follows:

// Score 90-100: A, "Excellent work!"

// Score 80-89: B, "Good job!"

// Score 70-79: C, "Not bad, keep it up!"

// Score 60-69: D, "You passed, but aim higher next time."

// Score below 60: F, "Sorry, you didn't pass. Keep working hard!"

// 5. Create a React component named TemperatureFeedback, which has a function that takes the current temperature  as parameter and provides feedback based on the temperature range. Take temperature as 25. Assume the following temperature categories:

// Temperature below 0: "Brr, it's freezing!"

// Temperature 0 to 10: "It's quite cold, bundle up!"

// Temperature 10 to 20: "The weather is cool and comfortable."

// Temperature 20 to 30: "It's a warm day!"

// Temperature above 30: "It's hot outside, stay cool!"

// Expected Output:

// Reverse Array
// Reversed Array: 5, 4, 3, 2, 1

// BMI Calculator
// BMI: 22.86

// Random Quote
// Your time is limited, don't waste it living someone else's life. - Steve Jobs

// Grade Analyzer
// Score: 85

// Grade: B

// Good job!

// Temperature Feedback
// Current Temperature: 25°C

// It's a warm day!

import React from 'react';
import './App.css';

const ReverseArray = () => {
  const originalArray = [1, 2, 3, 4, 5]
  const getReversedArray = () => {
    return [...originalArray].reverse();
  }
  
   return <p>Reversed Array: {getReversedArray().join(", ")}</p>
    
}

const CalculateBMI = () => {
  const calculatedBMI = (weight, height) => {
    return (weight / (height * height)).toFixed(2);
  }
  const weight = 70;
  const height = 1.75;

  const bmi = calculatedBMI(weight, height);
  return <p>BMI: {bmi}</p>  
} 

const GenerateQuote = () => {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",

  ];
   const getQoute = (arr) => {
      const randomText = Math.floor(Math.random() * quotes.length); 
      return arr[randomText];
   }
   return (
    <>
      <p>{getQoute(quotes)}</p>
    </>
  );
} 



const GradeAnalyser =  () => {
    const analyseGrade = (score) => {
      if (score >= 90 && score <= 100) {
        return { grade: "A", message: "Excellent work!" };
      } else if (score >= 80 && score <= 89) {
        return { grade: "B", message: "Good job!" };
      } else if (score >= 70 && score <= 79) {
        return { grade: "C", message: "Not bad, keep it up!" };
      } else if (score >= 60 && score <= 69) {
        return { grade: "D", message: "You passed, but aim higher next time." };
      } else {
        return { grade: "F", message: "Sorry, you didn't pass. Keep working hard!" };
      }
    };
    
    const score = 85;
    const { grade, message } = analyseGrade(score); // Get grade and message

    return (
      <div>
        <p>Score: {score}</p>
        <p>Grade: {grade}</p>
        <p>{message}</p>
      </div>
    )
}

const TemperatureFeedback = () => {
  const getFeedback = (temperature) => {
    if (temperature < 0) {
      return "Brr, it's freezing!";
    } else if (temperature >= 0 && temperature <= 10) {
      return "It's quite cold, bundle up!";
    } else if (temperature > 10 && temperature <= 20) {
      return "The weather is cool and comfortable.";
    } else if (temperature > 20 && temperature <= 30) {
      return "It's a warm day!";
    } else {
      return "It's hot outside, stay cool!";
    } 
  }
  const temperature = 25;
  return (
    <div>
      <p>Current Temperature: {temperature}°C</p>
      <p>{getFeedback(temperature)}</p>
    </div>
  )
}


export default function App() {
    return (
        <main>
            <div>
            
              <h1>Reverse Array</h1>
               <ReverseArray />
               <h1>BMI Calculator</h1>
               <CalculateBMI />
               <h1>Random Quote</h1>
               <GenerateQuote />
               <h1>Grade Analyzer</h1>
               <GradeAnalyser />
               <h1>Temperature Feedback</h1>
               <TemperatureFeedback />
            </div>
        </main>
    );
}
