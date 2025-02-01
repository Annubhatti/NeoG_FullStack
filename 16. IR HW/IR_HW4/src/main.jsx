import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Employee from "./pages/Employee.jsx";
import Report from "./pages/Report.jsx";
import Details from "./pages/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/employee",
    element: <Employee />,
  },
  {
    path: "/report",
    element: <Report />,
  },
  {
    path: "/employee/:empId",
    element: <Details />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
