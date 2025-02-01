import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Report = () => {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Team Performance Report</h1>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <h3>Top Scorer</h3>
            <p>Name: Lionel Messi</p>
            <p>Goals Scored: 25</p>
          </div>
          <div className="col-md-4">
            <h3>Best Assister</h3>
            <p>Name: Neymar Jr</p>
            <p>Assist: 15</p>
          </div>
          <div className="col-md-4">
            <h3>Most Valuable Player (MVP)</h3>
            <p>Name: Cristiano Ronaldo</p>
            <p>Overall Rating: 9.5</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Report;
