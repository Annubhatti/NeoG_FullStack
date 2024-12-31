// How to take user input in react
//in react we have onChange instead of onClick
// The onChange event is triggered when the value of an input field, textarea, or select box changes.
//onChange is added to the <input> element.
//The handleChange function runs whenever the input's value changes.
//event.target.value gives the current value of the input field, which is used to update the inputValue state.


import "./App.css"
import { useState } from 'react'

const GreetUser = () =>{
  const [userName , setUserName] = useState();

  const inputHandler = (event) =>{
    setUserName(event.target.value);
  };

  return(
    <div>
      <lable for="username">Enter your Name: </lable>
      <input id="username" onChange={inputHandler} />
      {
        userName && <p>Hello, {userName}!</p>
      }
    </div>
  );
};

const ValidateEmail = () => {
  const [email, setEmail] = useState(' ');

  const handleEmailInput = (event) => {
    setEmail(event.target.value)
  }

  const clickHandler = () => {
    const atIndex = email.indexOf("@")
    const dotIndex = email.indexOf(".")
    if(atIndex > 0 && dotIndex > atIndex){
      alert("Valid Email Address")
    }else{
      alert("Invalid Email Address")
    }
  }

  return(
    <div>
      <lable for="emailInput">Enter an Email: </lable>
      <input id="emailInput" onChange={handleEmailInput} />
      <button onClick={clickHandler}>Validate Email</button>


    </div>
  )

}

const CalculateSquare = () =>{
  const [numberInput, setNumberInput] = useState();
  const [squaredValue, setSquareValue] = useState();
  const handleBtnClick = () => {
    const squareVAlue = numberInput * numberInput;
    setSquareValue(squareVAlue);
  }
  return (
    <div>
      <lable for="numberInput">Enter a number: </lable>
      <input id="numberInput" onChange={(event) =>setNumberInput(event.target.value)} />
      <button onClick={handleBtnClick}>Calculate Square</button>
      <p>{squaredValue}</p>
    </div>
  )

}

const App = () => {
  return (
    <div>
      <main>
      <GreetUser />
      <br />
      <br />
      <ValidateEmail />
      <br />
      <br />
      <CalculateSquare />
      </main>
    </div>
  )
}

export default App
