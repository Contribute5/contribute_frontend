import "./login.scss";
import { GitHub } from "@mui/icons-material";
import Google from "../../images/google-icon.png";
import { Link } from "react-router-dom";
import LOGO from "../../images/CONTRIBUTE.png";
import { Icon } from "react-icons-kit";
import { eyeBlocked } from "react-icons-kit/icomoon/eyeBlocked";
import { eye } from "react-icons-kit/icomoon/eye";
import { useState } from "react";

const Login = () => {
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
    <div className="login">
      <div className="auth_nav">
        <div className="logo">
          <Link to="/">
            <img src={LOGO} alt="" />
          </Link>
        </div>
        <div className="buttons">
          <Link to="/register" className="link">
            <button className="btn_join">Join Contribute</button>
          </Link>
        </div>
      </div>
      <div className="reg_container">
        <div className="wrapper">
          <h1>Login</h1>
          <p>
            Solve real-world challenges with Contribute and earn money.
            <br />
            It all starts with creating an account with us. <br />
            or{" "}
            <Link style={{ color: "#277bcd" }} to="/register">
              sign up
            </Link>{" "}
            to your account
          </p>
          <div className="form_container">
            <form>
              <span className="icon" onClick={handlePasswordToggle}>
                <Icon icon={icon} size={20} />
              </span>
              <label>Email Address</label>
              <input type="email" />
              <label>Password</label>
              <input type={type} />

              <div className="other">
                <div className="left">
                  <input type="checkbox" className="checkbox" />
                  <span>Remember me</span>
                </div>
                <span style={{ color: "#277bcd" }}>Forgot your password?</span>
              </div>

              <button>Sign In</button>
            </form>
            <div className="or-container">
              <div className="or">Or sign in with</div>
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

export default Login;
