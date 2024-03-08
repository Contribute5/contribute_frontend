import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">logo</div>
        <div className="navItem">
          <span>Home</span>
          <span>Challenges</span>
          <span>About</span>
        </div>
        <div className="auth">
          <button>LOGIN</button>
          <button>REGISTER</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
