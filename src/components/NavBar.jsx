import { Link } from "react-router-dom";
import "../css/NavBar.css";
export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/Movie-List-Project">Movie App</Link>
        </div>
        <div className="navbar-links">
          <Link to="/Movie-List-Project" className="nav-link">
            Home
          </Link>
          <Link to="/Movie-List-Project/favorite" className="nav-link">
            Favorite
          </Link>
        </div>
      </nav>
    </>
  );
}
