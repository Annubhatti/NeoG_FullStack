import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./hooks/useFetch";

const App = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(data);
  return (
    <div className="container py-4">
      <h1>Post</h1>
      {loading && <p>Loading...</p>}
      {error && (
        <p className="text-center">An error occurred while fetching posts.</p>
      )}
      <div className="card my-4">
        {data &&
          data.map((post) => (
            <div className="card-body" key={post.id}>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
