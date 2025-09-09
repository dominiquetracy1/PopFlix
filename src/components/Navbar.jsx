import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/Home" className="nav-header">
          PopFlix
        </Link>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorites" className="nav-link">
          My Favorites
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
