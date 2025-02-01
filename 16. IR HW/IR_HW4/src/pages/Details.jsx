import React from "react";
import Header from "../components/Header";

import { useParams } from "react-router-dom";

const Details = () => {
  const emp = useParams();

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

  const employee = employees.find((employee) => employee.id == emp.empId);
  console.log(employee);

  return (
    <>
      <Header />
      <main className="container py-4">
        <h2>{employee.name}</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Name: </b>
            {employee.name}
          </li>
          <li className="list-group-item">
            <b>Designation: </b>
            {employee.designation}
          </li>
          <li className="list-group-item">
            <b>Department: </b>
            {employee.department}
          </li>
        </ul>
      </main>
    </>
  );
};

export default Details;
