import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOnClick = () => {
    setOpenMenu((show) => !show);
  };

  return (
    <div className="flex-header">
      <Link to="/" className="link">
        <h1 className="flex-item">MoviesRC</h1>
      </Link>
      <div className="btn-menu" onClick={handleOnClick}>
        <i className="fa-solid fa-bars fa-xl" />
      </div>

      <ul className={`flex-item ${!openMenu ? "nav-menu active" : "nav-menu"}`}>
        <Link to="/lists" className="link">
          <li>Lists</li>
        </Link>
        <Link to="/allmovies" className="link">
          <li>View All Movies</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
