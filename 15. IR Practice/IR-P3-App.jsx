import { useState } from "react";




const App = () => {

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({}); //Initializes answers as an empty object using useState.

  const questions = [
    {
      id: 1,
      question: "What is 2 + 2?",
      options: ["3", "4", "5"],
      correctAnswer: "4",
    },
    {
      id: 2,
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      id: 3,
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ["Harper Lee", "J.K. Rowling", "Stephen King"],
      correctAnswer: "Harper Lee",
    },
  ];
  
  const handleOptionChange = (questionId, answer) => {
    setAnswers((prev) => ({...prev, [questionId]:answer }));
  }

  const calculateScore = () =>{
    return questions.filter((q) => answers[q.id] === q.correctAnswer).length;
  }
  const currentQuestion = questions[index]

  return (
    <div className="container py-4">
      <h1>Quiz App</h1>
      {Object.keys(answers).length === questions.length ? (
        <div>
          <h2>Quiz Result</h2>
          <p>
            Your score: {calculateScore()} / {questions.length}
          </p>
        </div>
      ):(
        <div>
          <h2>Question {currentQuestion.id}</h2>
          <p>{currentQuestion.question}</p>
          <ul>
          {currentQuestion.options.map((option) =>(
            <li key={option}>
              <input type="radio" name={`question${currentQuestion.id}`} value={option} onChange={() => handleOptionChange(currentQuestion.id,option)} /> {option}
            </li>
          ))}
      </ul>
      <button onClick={() => setIndex((prev) => prev+1)}>Next</button>
        </div>
      )}
    </div>
  );
};

export default App;
