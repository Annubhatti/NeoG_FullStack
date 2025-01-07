import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./hooks/useFetch";

const App = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=4"
  );
  console.log(data);
  return (
    <div className="container py-4">
      <h1>Todo List</h1>
      {loading && <p className="text-center">Loading...</p>}
      {error && (
        <p className="text-center">An Error occurred while fetching todos.</p>
      )}
      <ul className="list-group my-4">
        {data &&
          data.map((todo) => (
            <li className="list-group-item" key={todo.id}>
              <h5>{todo.title}</h5>
              <p>{todo.completed ? "Completed" : "Not Completed"}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
