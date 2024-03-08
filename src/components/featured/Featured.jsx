import "./featured.scss";
import Img1 from "../../images/Frame 32.jpg";
import Img2 from "../../images/Frame 30.png";
import Img3 from "../../images/Frame 32-1.jpg";
import Img4 from "../../images/Frame 31.jpg";
import Img5 from "../../images/Frame 32-2.jpg";
import DollarImage from "../../images/dollar.png";
import GrowthImage from "../../images/growth.png";
import CoorectImage from "../../images/correct.png";

const Featured = () => {
  return (
    <div className="featured">
      <h1>Explore Coding Challenge</h1>
      <div className="container">
        <div className="top">
          <div className="wrapper">
            <div className="left">
              <img src={Img2} alt="" />
              <h3>Browse Challenges</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minima veniam,
                quis nostrum exercitationem ullam corporis suscipit laboriosam,
                nisi ut al eiusmod tempor incididunt ut labore
              </p>
            </div>
            <div className="right">
              <img src={Img1} alt="" />
            </div>
          </div>
        </div>
        <div className="center">
          <div className="wrapper">
            <div className="left">
              <img src={DollarImage} className="icon" alt="" />
              <h3>Solve and Get Paid</h3>
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut al Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut al
              </p>
              <img src={Img3} alt="" />
            </div>
            <div className="right">
              <img src={GrowthImage} className="icon" alt="" />
              <h3>Track Your Earnings</h3>
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut al Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut al
              </p>
              <img src={Img4} alt="" />
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="wrapper">
            <div className="left">
              <img src={Img5} alt="" />
            </div>
            <div className="right">
              <img src={CoorectImage} alt="" />
              <h3>Browse Challenges</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minima veniam,
                quis nostrum exercitationem ullam corporis suscipit laboriosam,
                nisi ut al eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
