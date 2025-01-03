import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Optional Bootstrap JS
import "./index.css";
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Biography from './pages/biography.jsx';
import Record from './pages/records.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />

  },
  {
    path: "/biography",
    element: <Biography />,
  },
  {
    path: "/record",
    element: <Record />
  }
])


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>
)