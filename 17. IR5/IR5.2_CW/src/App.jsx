import { useState } from "react";
import useFetch from "./hooks/useFetch";

// useFetch is a custom hook  help u fetch data from any particular api it returns a data
const App = () => {
  const [showData, setShowData] = useState(false);

  const { data } = useFetch("https://jsonplaceholder.typicode.com/todos/1");

  return (
    <div>
      <h1>Todo API</h1>
      <button onClick={() => setShowData(true)}>Get Todo</button>
      {showData && (
        <div>
          {data ? <p>{JSON.stringify(data)}</p> : <p>Unable to fetch data</p>}
        </div>
      )}
    </div>
  );
};

export default App;
