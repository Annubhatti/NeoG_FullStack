import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="bg-dark text-white">
        <div className="container">
          <h1 className="py-4">iPhone 15</h1>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Overview
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/features">
                  Features
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/specifications">
                  Specifications
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
