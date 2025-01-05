
import "./App.css";

function MakeQuizApp(){

  // const questions = [
  //   {
  //     id: 1,
  //     question: "What is 2 + 2?",
  //     options: ["3", "4", "5"],
  //     correctAnswer: "4",
  //   },
  //   {
  //     id: 2,
  //     question: "What is the capital of France?",
  //     options: ["London", "Paris", "Berlin"],
  //     correctAnswer: "Paris",
  //   },
  //   {
  //     id: 3,
  //     question: 'Who wrote "To Kill a Mockingbird"?',
  //     options: ["Harper Lee", "J.K. Rowling", "Stephen King"],
  //     correctAnswer: "Harper Lee",
  //   },
  // ];

  return(
    <div>
        <h1>Quiz App</h1>

        <label>What is 2 + 2?</label>
        <br />
        <input type="radio" name="ques" value="3" /> 3
        <br />
        <input type="radio" name="ques" value="4" /> 4
        <br />
        <input type="radio" name="ques" value="5" /> 5
        <br /> <br />
        <button>Next</button>

    </div>
  )
}
export default function App() {
  return (
    <>
    <MakeQuizApp />
    </>
  );
}
