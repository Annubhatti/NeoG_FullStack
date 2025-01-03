import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <>
      <main className="bg-dark text-white">
        <div className="container">
        <h1 className='py-4'>Virat Kholi</h1>
        <nav>
            <ul className="nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Overview</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/biography">Biography</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/record">Records</NavLink>
                </li>
            </ul>

        </nav>
        </div>
      </main>
    </>
  );
};
export default Header;
