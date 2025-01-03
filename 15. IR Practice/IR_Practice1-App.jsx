import { useState } from "react";
import "./App.css";

function ShowNumbersCount() {

  const [count, setCount] = useState(0);

  return(
    <>
      <h1 className="mt-3">Positive and Negative</h1>
      <p>Count: {count}</p>
      {count < 0 ? (<p>The count is negative.</p>
      ) : (
        <p>The count is positive.</p>
      )}
      <button onClick={()=> setCount(count+1)}>Increment</button>
      <button onClick={()=> setCount(count-1)}>Decrement</button>
    </>
  )

}

function UserLoginDetails() {

  const [username, setUsername] = useState(""); // To store the username
  const [password, setPassword] = useState(""); // To store the password
  const [loginDetail, setLoginDetail] = useState(""); // To store the login message
  const [isLoggedIn, setIsLoggedIn] = useState(false); // To track if user is logged in

  // Handle input changes
  const handelInput = (event) => {
    const { id, value } = event.target;
    if (id === "username") {
      setUsername(value); // Update username state
    } else if (id === "userpassword") {
      setPassword(value); // Update password state
    }
  };

  // Handle login button click
  const handleClick = () => {
    setIsLoggedIn(true); // Mark the user as logged in
  };

  return (
    <>
      <h1 className="mt-2">User Login</h1>

      {isLoggedIn ? (
        // Display the welcome message if logged in
        <h2>Welcome, {username}!</h2>
    ) : (
      // Show login form if not logged in
      <>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handelInput}
          />
          <br /> <br />
          <label htmlFor="userpassword">Password: </label>
          <input
            type="password"
            id="userpassword"
            value={password}
            onChange={handelInput}
          />
          <br /> <br />
          <button onClick={handleClick}>Login</button>
        </>
      )}
    </>
  )
}


function TempConverter(){

  const [celsius, setCelsius] = useState(""); 
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (event) => {
    const celsiusValue = event.target.value;
    setCelsius(celsiusValue);
    if (celsiusValue !== "") {
      setFahrenheit(((celsiusValue * 9) / 5 + 32).toFixed(2)); // Convert to Fahrenheit
    } else {
      setFahrenheit(""); // Clear Fahrenheit if Celsius is empty
    }
  };

  const handleFahrenheitChange = (event) => {
    const fahrenheitValue = event.target.value;
    setFahrenheit(fahrenheitValue);
    if (fahrenheitValue !== "") {
      setCelsius((((fahrenheitValue - 32) * 5) / 9).toFixed(2)); // Convert to Celsius
    } else {
      setCelsius(""); // Clear Celsius if Fahrenheit is empty
    }
  };


  return(
    <>
      <h1>Temperature Converter</h1>
      <label>Celsius: </label>
      <input
        type="number"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <br /> <br />
      <label>Fahrenheit: </label>
      <input
        type="number"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </>
  )

}

function ShowProductsPrice() {
  

  return(
    <>
      <h1>Shopping Cart</h1>

      <button>Add Product A</button>
      <button>Add Product B</button>
    
    </>
  )


}

export default function App() {
  
  return (
    <>
      <ShowNumbersCount />
      <br />
      <UserLoginDetails />
      <br /> <br />
      <TempConverter />
      <br /> <br />
      <ShowProductsPrice />

    </>
  );
}
