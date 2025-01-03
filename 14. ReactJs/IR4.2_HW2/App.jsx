import "./App.css";
import { useState } from "react";

function ShowZipCode() {
  const [zip, setZip] = useState("");

  const zipHandler = () => {
    if (zip.length === 5) {
      alert("Valid zipcode.");
    } else {
      alert("Invalid zipcode. Please enter 5 digits.");
    }
  };

  return (
    <div>
      <label htmlFor="zipcode">Enter your ZIP code: </label>
      <input
        id="zipcode"
        type="text"
        onChange={(event) => setZip(event.target.value)}
      />
      <button onClick={zipHandler}>Validate Zipcode</button>
    </div>
  );
};

function CapitalizeEachWord() {
  const [input, setInput] = useState(""); // Initial string is empty
  const [result, setResult] = useState("");

  const capitalizeHandler = () => {
    // Split the input string into words, capitalize the first letter of each word, and join them back together
    const capitalizedString = input
      .split(" ") // Split by spaces to get words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
      .join(" "); // Join the words back together with spaces
    setResult(capitalizedString); // Update result state
  };

  return (
    <>
      <label htmlFor="userInput">Enter text: </label>
      <input
        type="text"
        id="userInput"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Set input to user input
      />
      <button onClick={capitalizeHandler}>Capitalize Each Word</button>
      <p>Result: {result}</p>
    </>
  );
}


function SearchingItems() {
  const [term, setTerms] = useState("");

  const searchHandler = () => {
    setTerms(" ");
  }
  
  return (
    <>
      <label htmlFor="searching">Enter search term: </label>
      <input
        id="searching"
        type="text"
        value={term} // Bind the input value to the `term` state
        onChange={(event) => setTerms(event.target.value)}
      />
      <button onClick={searchHandler}>Reset Search Term</button>
      <p>{term}</p>
    </>
  );
}




function AddressReset() {
  const [address, setAddress] = useState("");

  const addressHandler = () => {
    setAddress(" ");
  }

  return (
    <>
      <label htmlFor="userAddress">Enter your address: </label>
      <input
        id="userAddress"
        type="text"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <button onClick={addressHandler}>Reset Address</button>
      <p>{address}</p>
    </>
  );
}

function MessageReset() {
  const [message, setMessage] = useState("");

  const messageHandler = () => {
    setMessage(" ");
  }
  return (
    <>
      <label htmlFor="msg">Enter a message: </label>
      <input
        id="msg"
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button onClick={messageHandler}>Reset Message</button>
      <p>{message}</p>
    </>
  );
}



export default function App() {
  return (
    <div>
      <main>
        <ShowZipCode />
        <br />
        <CapitalizeEachWord />
        <br /> <br />
        <SearchingItems />
        <br /> <br />
        <AddressReset />
        <br /> <br />
        <MessageReset />
      </main>
    </div>
  );
}
