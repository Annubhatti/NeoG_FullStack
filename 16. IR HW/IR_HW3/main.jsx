import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Features from './pages/features.jsx'
import Specifications from './pages/specifications.jsx'
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Optional Bootstrap JS
import "./index.css";


const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
  },
  {
    path: "/features",
    element: <Features />,
  },
  {
    path: "specifications",
    element: <Specifications />
  }

])

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
)