import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./hooks/useFetch";

const App = () => {
  const { data, loading, error, fetchData} = useFetch(
    'https://randomuser.me/api/'
  );
  console.log(data);
  return (
    <div className="container py-4">

      <h1>Random User API</h1>
      <button className="btn btn-info" onClick={fetchData}>Get Random User</button>
      {loading && <p>Loading...</p>}
      {error && <p>An error occurred while fetching data.</p>}
      
      {data &&
         data.results.map((user) => (
           <div key={user.id.value} className="my-4">
            <p>
              <b>Name: </b>
              {user.name.first} {user.name.last}
            </p>
            <p>
              <b>Email: </b>
              {user.email}
            </p>
            <p>
              <b>City: </b>
              {user.location.city}
            </p>
           </div>
        )
        )}
    </div>
  );
};

export default App;
