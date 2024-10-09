import "./header.scss";
import HeaderImg from "../../images/Hero Image.png";
import Star from "../../images/Star 3.png";
import comp1 from "../../images/Component 1.png";
import comp2 from "../../images/Component 2.png";
import comp3 from "../../images/Component 3.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="left">
          <h1>Unlock your potential</h1>
          <p>
            Contribute and Earn money by solving real-world programming
            challenges This is a platform that allow developers to contribute to
            programming problems all around and get paid for it.
          </p>
          <Link to="/login" className="button link">
            GET STARTED
          </Link>

          <div className="bottom">
            <div className="item">
              <span>7.5k+</span>
              <span>Challenges</span>
            </div>
            <div className="item">
              <span>11.5k+</span>
              <span>Solved solutions</span>
            </div>
            <div className="item">
              <span>5.6k+</span>
              <span>Users</span>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={HeaderImg} alt="" className="hero" />
          <img src={Star} alt="" className="star1" />
          <img src={Star} alt="" className="star2" />
          <img src={Star} alt="" className="star3" />
          <div className="comp1">Develop solutions to challenges</div>
          <div className="comp2">Get paid after submission</div>
          <div className="comp3">Track your earnings</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
