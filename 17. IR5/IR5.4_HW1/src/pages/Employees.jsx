import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { employees } from "../utils/common";
import { Link } from "react-router-dom";

export default function Employees() {
    const [department, setDepartment] = useState("All");

    const filteredEmployee = 
        department === "All" ? employees : employees.filter((emp) => (
            emp.department === department
        ));
    
    
  return (
    <>
      <Header />
      <div className="container py-4">
        <h1>List of Employees</h1>
        <div className="mt-3">
          <label htmlFor="departmentFilter">Filter by Department: </label>
          <select
             id="departmentFilter"
             className="form-select"
             onChange={(e) => setDepartment(e.target.value)}
           >
            <option value="All">All Departments</option>
            <option value="IT">IT</option>
            <option value="Design">Design</option>
            <option value="Management">Management</option>
          </select>
        </div>
        <div className="py-4">
          <ul className="list-group">
            {filteredEmployee.map((employee) => (
              <li key={employee.id} className="list-group-item">
                <h4>{employee.name}</h4>
                <p>{employee.title}</p>
                <Link
                  to={`/employees/${employee.id}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
