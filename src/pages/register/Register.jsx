import "./register.scss";
import { GitHub } from "@mui/icons-material";
import Google from "../../images/google-icon.png";
import { Link } from "react-router-dom";
import LOGO from "../../images/CONTRIBUTE.png";
import { Icon } from "react-icons-kit";
import { eyeBlocked } from "react-icons-kit/icomoon/eyeBlocked";
import { eye } from "react-icons-kit/icomoon/eye";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


//from backend
const Register = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeBlocked);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handlePasswordToggle = () => {
    if (type === "password") {
      setType("text");
      setIcon(eye);
    } else {
      setType("password");
      setIcon(eyeBlocked);
    }
  };

  //from backend
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/accounts/register/', {
        full_name: fullName,
        email,
        password
      });
      console.log(response.data); // Handle successful registration (e.g., show a message or redirect)
      // Optionally: Redirect to login or home page after successful registration
      navigate('/login'); // Redirect to the login page
    } catch (error) {
      setError(error.response.data.detail || "Registration failed. Please try again."); // Set error message
      console.error("There was an error!", error.response.data);
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
