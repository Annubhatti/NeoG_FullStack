import "./App.css"
import { useState } from 'react'



const ContactDetails = () => {
  const [number, setNumber] = useState();

  const inputHandler = (event) => {
      setNumber(event.target.value)
  }

  const validatePhoneNumber = () =>{
    const phnNumRegex = /^[0-9]{10}$/;
    if (phnNumRegex.test(number)) {
      alert("Valid Phone Number");
    } else {
      alert("Invalid Phone Number. Please enter a 10-digit number.");
    }
  }

  return(
    <div>
      <label htmlFor="userContact">Enter your phone number: </label>
      <input id="userContact" onChange={inputHandler}/>
      <button onClick={validatePhoneNumber}>Validate Phone Number</button>
    </div>
  )
}

const UserPassword = () => {
  const [password, setPassword] = useState();
  
    const inputHandler = (event) => {
      setPassword(event.target.value)
    }
  
    const validatePassWord = () =>{
      
      if (password.length >= 8) {
        alert("Password is Strong");
      } else {
        alert("Password is Weak. Please use at least 8 characters.");
      }
    }
  return(
    <div>
      <label htmlFor="userPassword">Enter your password: </label>
      <input id="userPassword" type="password" onChange={inputHandler}/>
      <button onClick={validatePassWord}>Check Password Strength</button>
    </div>
  )
}

const UserDOB = () => {
  const [birth, setBirthDate] = useState();

  return(
    <div>
      <label htmlFor="userdob">Enter your birthdate: </label>
      <input id="userdob" type="date"/>
      <button onClick={}>Calculate Age</button>
    </div>
  )
}

const FavColors = () => {
  return(
    <div>
      <label htmlFor="selecedClr">Enter your favorite color: </label>
      <input id="selecedClr"/>
      <button>Check Password Strength</button>
    </div>
  )
}

const UserQuery = () => {
  return(
    <div>
      <label htmlFor="userquery">Enter your search query: </label>
      <input id="userquery"/>
      <button>Search</button>
    </div>
  )
}



const App = () => {
  return (
    <div>
      <main>
          <ContactDetails />
          <br />
          <UserPassword />
          <br />
          <UserDOB />
          <br />
          <FavColors />
          <br />
          <UserQuery />
      </main>
    </div>
  )
}

export default App
