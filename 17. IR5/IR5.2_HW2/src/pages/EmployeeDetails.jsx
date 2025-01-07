import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { employees } from "../utils/common";

export default function EmployeeDetails() {
  const empId = useParams();

  const employee = employees.find((emp) => emp.id == parseInt(empId.empId));
  return (
    <>
      <Header />
      <div className="container py-4">
        <h1>{employee.name}</h1>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Name: </strong>
            {employee.name}
          </li>
          <li className="list-group-item">
            <b>Designation: </b>
            {employee.title}
          </li>
          <li className="list-group-item">
            <b>Department: </b>
            {employee.department}
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
