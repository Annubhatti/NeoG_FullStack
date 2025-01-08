import Footer from "../components/Footer";
import Header from "../components/Header";
import {employees} from '../utils/common';

export default function Report() {

  const mostWorkEmployee = employees.reduce((acc, curr) => (
    acc.hoursWorked < curr.hoursWorked ? acc : curr
  ));

  const highestRatedHours = employees.reduce((acc, curr) => (
    acc.performanceRate < curr.performanceRate ? acc : curr
  ));

  const totalOvertime = employees.reduce(
    (acc, curr) => acc + curr.overTimeHours,
    0
  );

  return (
    <>
      <Header />
      <div className="container py-4">
        <h1>HR Report</h1>
        <hr />

        <div className="row">

          <div className="col-md-4">
            <h3>Most Worked Employee</h3>
            <p>Name: {mostWorkEmployee.name}</p>
            <p>Hours Worked: {mostWorkEmployee.hoursWorked}</p>
          </div>
          
          <div className="col-md-4">
            <h3>Highest Rated Employee</h3>
            <p>Name: {highestRatedHours.name}</p>
            <p>Performance Rate: {highestRatedHours.performanceRate}</p>
          </div>

          <div className="col-md-4">
            <h3>Total Overtime Hours</h3>
            <p>Total Overtime Hours: {totalOvertime}</p>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}