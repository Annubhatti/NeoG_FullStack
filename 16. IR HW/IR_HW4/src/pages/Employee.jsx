import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Employee = () => {
  const employees = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      department: "IT",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Designer",
      department: "Design",
    },
    {
      id: 3,
      name: "Bob  Johnson",
      designation: "Product Manager",
      department: "Management",
    },
  ];

  const employeeListing = employees.map((emp) => (
    <li className="list-group-item" key={emp.id}>
      <h4>{emp.name}</h4>
      <p>{emp.designation}</p>
      <Link to={`/employee/${emp.id}`} className="btn btn-primary">
        View Details
      </Link>
    </li>
  ));

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>List of Employees</h1>
        <ul className="list-group">{employeeListing}</ul>
      </main>
      <Footer />
    </>
  );
};

export default Employee;
