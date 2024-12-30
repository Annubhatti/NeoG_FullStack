import { NavLink } from "react-router-dom"

const Header = () => (
    <header className="bg-dark text-light">
        <div className="container">
            <h1 className="py-4">Ecommerce Website</h1>
            <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/products">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/cart">Cart</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header;