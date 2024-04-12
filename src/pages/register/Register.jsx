import "./register.scss";
import { GitHub } from "@mui/icons-material";
import Google from "../../images/google-icon.png";
import { Link } from "react-router-dom";
import LOGO from "../../images/CONTRIBUTE.png";
import { Icon } from "react-icons-kit";
import { eyeBlocked } from "react-icons-kit/icomoon/eyeBlocked";
import { eye } from "react-icons-kit/icomoon/eye";
import { useState } from "react";

const Register = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeBlocked);

  const handlePasswordToggle = () => {
    if (type === "password") {
      setType("text");
      setIcon(eye);
    } else {
      setType("password");
      setIcon(eyeBlocked);
    }
  };
  return (
    <div className="register">
      <div className="auth_nav">
        <div className="logo">
          <Link to="/">
            <img src={LOGO} alt="" />
          </Link>
        </div>
        <div className="buttons">
          <Link to="/login" className="link">
            <button className="btn_login">Log In</button>
          </Link>
        </div>
      </div>
      <div className="reg_container">
        <div className="wrapper">
          <h1>Welcome to Contribute</h1>
          <p>
            Solve real-world challenges with Contribute and earn money.
            <br />
            It all starts with creating an account with us. <br />
            or{" "}
            <Link style={{ color: "#277BCD" }} to="/login">
              sign in
            </Link>{" "}
            to your account
          </p>
          <div className="form_container">
            <form>
              <span className="icon" onClick={handlePasswordToggle}>
                <Icon icon={icon} size={20} />
              </span>
              <label>Full name</label>
              <input type="text" />
              <label>Email Address</label>
              <input type="email" />
              <label>Password</label>
              <input type={type} />
              <div className="tc">
                <input type="checkbox" className="checkbox" />
                <span>
                  I agree to the Contribute
                  <Link style={{ color: "#277BCD" }}>
                    {" "}
                    terms and conditions
                  </Link>{" "}
                  and the{" "}
                  <Link style={{ color: "#277BCD" }}>privacy policy</Link>
                </span>
              </div>
              <button>Sign Up</button>
            </form>
            <div className="or-container">
              <div className="or">Or sign up with</div>
            </div>
            <div className="social">
              <div className="item">
                <img src={Google} alt="" />
                Google
              </div>
              <div className="item">
                <GitHub />
                Github
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
