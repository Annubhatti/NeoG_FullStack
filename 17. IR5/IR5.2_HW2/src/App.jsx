
import { useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";

export default function App() {
  const [joke, setJoke] = useState(false);
  const {data} = useFetch("https://v2.jokeapi.dev/joke/Programming?type=single")
 
  return (
    <>
     <div className="container py-4">
     <h1>Programming API</h1>
      <button onClick={() => setJoke(true)}>Get Programming Joke</button>
      {joke && (
        <div>
          {data ? (
            <p>{JSON.stringify(data.joke)}</p>
          ) : (<p>An Error ocurred while fetching joke.</p>)}
        </div>
      )}

     </div>
    </>
  );
}
