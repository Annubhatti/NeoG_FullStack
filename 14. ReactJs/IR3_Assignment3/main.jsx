import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Optional Bootstrap JS
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profiles from "./pages/Profiles.jsx";
import ProfileDetails, { loader } from "./pages/ProfileDetail.jsx";

const router = createBrowserRouter([
  // it takes array of route
  {
    path: "/",
    element: <App />
  },
  {
    path: "/profile",
    element: <Profiles />
  },
  {
    path: "/profile/:profilename",
    element: <ProfileDetails />,
    loader: loader,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);