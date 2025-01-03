import { use } from "react";
import "./App.css"
import { useState } from 'react'



const ValidateNumber = () => {
  const [number, setNumber] = useState();

  const validateHandler = () =>{
    
    if (number.length === 10) {
      alert("Valid Phone Number");
    } else {
      alert("Invalid Phone Number. Please enter a 10-digit number.");
    }
  }

  return(
    <div>
      <label htmlFor="usernumber">Enter your phone number: </label>
      <input id="usernumber" onChange={(event) => setNumber(event.target.value)}/>
      <button onClick={validateHandler}>Validate Phone Number</button>
    </div>
  )
}

const ValidatePassword = () => {
  const [password, setPassword] = useState();
  
    const inputHandler = (event) => {
      setPassword(event.target.value)
    }
  
    const passWordHandler = () =>{
      
      if (password.length > 8) {
        alert("Password is Strong");
      } else {
        alert("Password is Weak. Please use at least 8 characters.");
      }
    }
  return(
    <div>
      <label htmlFor="userpassword">Enter your password: </label>
      <input id="userpassword" type="password" onChange={inputHandler}/>
      <button onClick={passWordHandler}>Check Password Strength</button>
    </div>
  )
}

function CalculateAge() {
  const [age, setAge] = useState();

  const setAgeHandler = (event) => {
    const birthDate = event.target.value; // YYYY-MM-DD format
    const yearOfBirth = birthDate.split("-")[0]; // Extract the year
    setAge(yearOfBirth);
  };

  const ageHandler = () => {
    const currentYear = new Date().getFullYear(); // Get current year dynamically
    const calculatedAge = currentYear - age; 
    alert(`You are ${calculatedAge} years old`); // Use calculatedAge here
  };

  return (
    <>
      <label htmlFor="userAge">Enter your birthday: </label>
      <input type="date" id="userAge" onChange={setAgeHandler} />
      <button onClick={ageHandler}>Calculate Age</button>
    </>
  );
}


const ShowColors = () => {

  const [color, setColor] = useState(" ");
  const [displayColor, setDisplayColor] = useState("");

  const setcolorHandler = (event) =>{
    setColor(event.target.value);
  }

  const showHandler = () => {
    setDisplayColor(color)

  }

  return(
    <div>
      <label htmlFor="usercolor">Enter your favorite color: </label>
      <input id="usercolor" onChange={setcolorHandler} />
      <button onClick={showHandler}>Display color</button>
      <br /> <br />
       {displayColor && (<p>Your favourite Color is {displayColor}</p>)}
    </div>
  )
}



const UserQuery = () => {

  const [query, setQuery] = useState();
  const [displayQuery, setDisplayQuery] = useState("");

  const setqueryHandler =(event) =>{
    setQuery(event.target.value);
  }

  const showHandler = () =>{
    setDisplayQuery(query);

  }

  return(
    <div>
      <label htmlFor="userquery">Enter your search query: </label>
      <input id="userquery" onChange={setqueryHandler}/>
      <button onClick={showHandler} >Search</button>
      <br /> <br />
      {displayQuery && (<p>Searching for: {displayQuery}</p>)}
    </div>
  )
}



const App = () => {
  return (
    <div>
      <main>
          <ValidateNumber />
          <br />
          <ValidatePassword />
          <br />
          <CalculateAge />
          <br />
          <br /> 
          <ShowColors />
          <br /> 
          <UserQuery />
      </main>
    </div>
  )
}

export default App
