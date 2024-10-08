import { Link } from "react-router-dom";
import "./footer.scss";
import LOGO from "../../images/CONTRIBUTE.png";
import fb from "../../images/fb.png";
import social from "../../images/social.png";
import github from "../../images/github.png";
import insta from "../../images/insta.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="cta">
        <div className="container">
          <div className="left">
            <span>Join Contribute today</span>
          </div>
          <div className="right">
            <span>Let&apos;s do it! —</span>
            <Link className="link" to="/register">
              <button>Get Started</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="top">
          <div className="logo">
            <img src={LOGO} alt="" />
          </div>
          <div className="company">
            <h5>Company</h5>
            <span>About us</span>
            <span>FAQs</span>
            <span>Contact us</span>
          </div>
          <div className="explore">
            <h5>Explore</h5>
            <span>Features</span>
            <span>Challenges</span>
          </div>
          <div className="contact">
            <h5>Get in touch with us</h5>
            <div className="social">
              <img src={fb} alt="" />
              <img src={github} />
              <img src={insta} alt="" />
              <img src={social} alt="" />
            </div>
            <h5>Subscribe</h5>
            <p>
              Subscribe to stay tuned for new <br /> web design and latest
              updates. Let's do it!{" "}
            </p>
            <div className="input">
              <input type="text" placeholder="Enter your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <span>Privacy Policy</span>
            <span>Terms and Conditions</span>
            <span>Legal</span>
            <span>Site maps</span>
          </div>
          <div className="right">
            <span>© 2024 All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
