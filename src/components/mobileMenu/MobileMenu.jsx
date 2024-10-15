/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./mobileMenu.scss";

const MobileMenu = ({ menuOpen, closeMenu }) => {
  const user = false;

  return (
    <div className={"mm " + (menuOpen && "active")}>
      <div className="container">
        <Link to="/" className="link" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/challenges" className="link" onClick={closeMenu}>
          Challenges
        </Link>
        <Link to="/about" className="link" onClick={closeMenu}>
          About
        </Link>
        {!user && (
          <>
            <Link to="/register" className="link" onClick={closeMenu}>
              Join contribute
            </Link>
            <Link to="/login" className="link" onClick={closeMenu}>
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
