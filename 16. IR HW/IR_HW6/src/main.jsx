import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Players from "./pages/Players.jsx";
import Report from "./pages/Report.jsx";
import Details from "./pages/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/players",
    element: <Players />,
  },
  {
    path: "/report",
    element: <Report />,
  },
  {
    path: "/players/:playerId",
    element: <Details />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
