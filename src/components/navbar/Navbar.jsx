/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./navbar.scss";
import LOGO from "../../images/CONTRIBUTE.png";
import TestimonialImg from "../../images/testimonial.png";

const Navbar = ({ menuOpen, setMenuOpen, showHarmburger }) => {
  const user = false;
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <div className="logo">
            <Link className="link" to="/">
              <img src={LOGO} alt="" />
            </Link>
          </div>
          <div className="navItem">
            {!user && (
              <Link to="/" className="link">
                <span>Home</span>
              </Link>
            )}

            <Link to="/challenges" className="link">
              <span>Challenges</span>
            </Link>
            {user && (
              <Link to="/my_challenges" className="link">
                <span>My challenges</span>
              </Link>
            )}
            <Link to="/about" className="link">
              <span>About</span>
            </Link>
          </div>
          {showHarmburger && (
            <div
              className={"hamburger " + (!menuOpen && "active")}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          )}
        </div>
        <div className="auth">
          {user ? (
            <img src={TestimonialImg} />
          ) : (
            <>
              <Link to="/login" className="link">
                <button className="btn_login">LOGIN</button>
              </Link>
              <Link to="/register" className="link">
                <button className="btn_join">Join Contribute</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
