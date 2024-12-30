import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Optional Bootstrap JS
import "./index.css";
import App from "./App.jsx";
import About from './pages/About.jsx';
import Blogs from './pages/Blogs.jsx';
import BlogDetails from "./pages/BlogDetails.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  // it takes array of route
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {path: "/blogs",
    element: <Blogs/>
  },
  {
    path: "blogs/:blogId", // params synx :name,id etc.
    element: <BlogDetails />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);