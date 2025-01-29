import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InventoryForm from "./components/InventoryForm";
import Inventory from "./components/Inventory";
import RemovedItems from "./components/RemovedItems";
import RemainingItems from "./components/RemainingItems";

import './App.css'

function App() {
  
  return (
    <>
      <Router>
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/inventory">Inventory</Link>
            </li>
            <li>
              <Link to="/removed">Removed Items</Link>
            </li>
            <li>
              <Link to="/remaining">Remaining Items</Link>
            </li>
            <li>
              <Link to="/">Add New Item</Link>
            </li>
          </ul>
        </nav>
        </div>

        <Routes>
          <Route path="/" element={<InventoryForm />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/removed" element={<RemovedItems />} />
          <Route path="/remaining" element={<RemainingItems />} />
        </Routes>
        </Router>
    </>
  )
}

export default App
