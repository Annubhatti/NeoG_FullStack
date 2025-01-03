import { NavLink } from "react-router-dom"

const Header = () => (
    <header className="bg-dark text-light">
        <div className="container">
            <h1 className="py-4">Taj Mahal</h1>
            <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Overview</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/history">History</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/architecture">Architecture</NavLink>
                    </li>
                    
                </ul>
            </nav>
        </div>
    </header>
)

export default Header;