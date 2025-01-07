import React from "react";
import useFetch from "./hooks/useFetch";

const App = () => {
  const { data, loading, error, fetchData } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <div>
      <h1>Fetch Data on Button Click</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {loading && <p>Loading...</p>}
      {error && <p>An error occurred while fetching posts.</p>}
      <ul>{data && data.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
    </div>
  );
};

export default App;
