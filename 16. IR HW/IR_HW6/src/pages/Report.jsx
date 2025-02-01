import React from "react";
import Header from "../components/Header";

const Report = () => {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Player Report</h1>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <div className="my-3 card">
              <h3 className="card-header">Top Scorer</h3>
              <div className="card-body">
                <p className="card-text">
                  <b>Name: </b>Player 1
                </p>
                <p className="card-text">
                  <b>Total Runs: </b> 12000
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="my-3 card">
              <h3 className="card-header">Best Bowler</h3>
              <div className="card-body">
                <p className="card-text">
                  <b>Name: </b>Player 2
                </p>
                <p className="card-text">
                  <b>Total Wickets: </b> 500
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Report;
