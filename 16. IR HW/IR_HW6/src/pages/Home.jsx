import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div>
          <img
            alt="Player banner"
            className="img-fluid"
            src="https://placehold.co/1400x350?text=Players+Banners"
          />
        </div>
        <div className=" text-center py-5 bg-body-secondary">
          <h2>Cricket Player Database</h2>
          <p>Explore the profiles of your favorite cricket players.</p>
          <Link to="/players" className="btn btn-primary">
            Explore Players
          </Link>
        </div>

        <div className=" text-center py-5 ">
          <h2>Players Report</h2>
          <p>
            Explore our latest player report to gain insights into our
            ICCC&apos;s performance and growth.
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
