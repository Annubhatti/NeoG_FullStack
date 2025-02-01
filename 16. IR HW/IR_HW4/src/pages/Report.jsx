import React from "react";
import Header from "../components/Header";

const Report = () => {
  return (
    <>
      <Header />
      <main className="container py-4 ">
        <h1>HR Report</h1>
        <hr className="bg-bg-body-tertiary" />
        <div className="row">
          <div className="col-md-4">
            <h3>Most Worked Employee</h3>
            <p>Name: John Doe</p>
            <p>Hours Worked: 210</p>
          </div>
          <div className="col-md-4">
            <h3>Highest Rated Employee</h3>
            <p>Name: Jane Smith</p>
            <p>Performance Rate: 0.95</p>
          </div>
          <div className="col-md-4">
            <h3>Total Overtime Hours</h3>
            <p>Total Overtime Hours: 35 </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Report;
