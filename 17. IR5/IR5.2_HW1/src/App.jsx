import { useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";

export default function App() {
  const [showData, setShowData] = useState(false);
  const { data } = useFetch("https://jsonplaceholder.typicode.com/todos/4");

  return (
    <>
     <div className="container py-4">
      <h1>Todo API</h1>
      <button onClick={() => setShowData(true)}>Get Data</button>
      {showData && (
        <div>
          {data ? (
            <pre>{JSON.stringify(data)}</pre>
          ) : (
            <p>An error occurred while fetching data</p>
          )}
        </div>
      )}
      </div>
    </>
  );
}
