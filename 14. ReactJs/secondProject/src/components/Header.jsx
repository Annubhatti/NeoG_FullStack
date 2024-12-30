import { NavLink } from "react-router-dom"

const Header = () => (
    <header className="bg-dark text-light">
        <div className="container">
            <h1 className="py-4">My Social Media</h1>
            <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/products">Profile</NavLink>
                    </li>
                    
                </ul>
            </nav>
        </div>
    </header>
)

export default Header;