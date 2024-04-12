import Faq from "../../components/faq/Faq";
import Navbar from "../../components/navbar/Navbar";
import "./singleChallenge.scss";
import LOGO from "../../images/CONTRIBUTE.png";
import fb from "../../images/fb.png";
import social from "../../images/social.png";
import github from "../../images/github.png";
import insta from "../../images/insta.png";
import Money from "../../images/Money.svg";

const SingleChallenge = () => {
  return (
    <div className="sc">
      <Navbar />

      <div className="header">
        <div className="left">
          <span className="title">Challenge Brief</span>
          <h3>Weather Widget Generator</h3>
          <span>posted 7 days ago</span>
          <p>
            In this challenge, you will build a fully-functional survey form
            website. The survey will enable users to create surveys using
            templates or customized surveys. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            al Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut al
          </p>

          <div className="range_info">
            <span>Start</span>
            <span>Deadline</span>
          </div>
          <input type="range" name="" id="" />
          <div className="range_date">
            <span>April 1, 2024</span>
            <span>April 23, 2024</span>
          </div>
          <div className="cta">
            <button>Start Challenge</button>
            <div className="price_container">
              <img src={Money} alt="" />
              <div className="price">
                <span>Ghc 453325</span>
                <span>Price</span>
              </div>
            </div>
          </div>
          <div className="users_info">
            <div className="item">
              <span className="item_title">Intermediate</span>
              <span>Experience</span>
            </div>
            <div className="item">
              <span className="item_title">FullStack development</span>
              <span>Project type</span>
            </div>
            <div className="item">
              <span className="item_title">8 users</span>
              <span>active on project</span>
            </div>
          </div>
        </div>
        <div className="right">
          <img
            src="https://images.pexels.com/photos/1188751/pexels-photo-1188751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>
      <Faq />
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

export default SingleChallenge;
