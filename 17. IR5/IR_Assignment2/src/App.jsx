import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./hooks/useFetch";

const App = () => {
  const [showInfo, setShowInfo] = useState(false);

  const { data, loading, error, fetchData } = useFetch(
    "https://randomuser.me/api/?results=3"
  );

  console.log(data);

  return (
    <div className="container py-4">
      <h1>People Directory</h1>
      <button className="btn btn-primary mt-3" onClick={fetchData}>
        Get People
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>An error occurred while fetching data.</p>}
      {data && (
        <>
          <div className="row my-4">
            {data.results.map((person) => (
              <div className="col-md-4" key={person.email}>
                <div className="card">
                  <img
                    alt={person.name.first}
                    src={person.picture.large}
                    className="img-fluid"
                  />
                  <div className="card-body">
                    <h4 className="card-title">
                      {person.name.first} {person.name.last}
                    </h4>
                    <p>Age: {person.dob.age}</p>
                    <p>Gender: {person.gender}</p>
                    <p>Username: {person.login.username}</p>
                    <p>Email: {person.email}</p>
                    {showInfo && (
                      <>
                        <p>Phone Number: {person.phone}</p>
                        <p>
                          Full Address :
                          {` ${person.location.street.number}, ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country}, ${person.location.postcode} `}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              className="btn btn-primary"
              onClick={() => setShowInfo((prev) => !prev)}>
              {showInfo ? "Show Less Info" : "Show More Info"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;