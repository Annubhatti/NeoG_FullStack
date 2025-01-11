import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Optional Bootstrap JS
import "./index.css";
import Employees from "./pages/Employees";
import EmployeeDetails from "./pages/EmployeeDetails"
import Report from "./pages/Report"

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
  },
  {
    path: "/employees",
    element: <Employees />,
  },
  {
    path: "employees/:empId",
    element: <EmployeeDetails />
  },
  {
    path: "/report",
    element: <Report />
  }

])

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
)