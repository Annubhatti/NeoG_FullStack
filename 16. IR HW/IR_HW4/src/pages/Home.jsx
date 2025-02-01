import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container py-4">
        <div>
          <img
            alt="employee smiling"
            className="img-fluid pt-3"
            src="https://placehold.co/400x300?text=employee smiling"
          />
        </div>
        <div className="pt-4">
          <h2>Our Employees</h2>
          <p>
            Meet our dedicated team of professional who work tirelessly to
            achieve our company&apos;s goals.{" "}
          </p>
          <Link to="/employee" className="btn btn-primary">
            View Employees
          </Link>
        </div>
        <div className="pt-4">
          <h2>Company Report</h2>
          <p>
            Explore our latest financial report to gain insights into our
            company&apos;s performance and growth.
          </p>
          <Link to="/report" className="btn btn-primary">
            View Report
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
