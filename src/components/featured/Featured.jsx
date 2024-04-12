import "./featured.scss";
import Img1 from "../../images/Frame 32.jpg";
import Img3 from "../../images/Frame 32-1.jpg";
import Img4 from "../../images/Frame 31.jpg";
import Img5 from "../../images/Frame 32-2.jpg";
import feat1 from "../../images/feat1.png";
import feat2 from "../../images/feat2.png";
import feat3 from "../../images/feat3.png";
import feat4 from "../../images/feat4.png";

const Featured = () => {
  return (
    <div className="featured">
      <div className="text">
        <h2>Code, Conquer & Cash In</h2>
        <h3>
          Unleash your programming prowess with challenges that pay off on every
          level
        </h3>
      </div>

      <div className="container">
        <div className="top">
          <div className="wrapper">
            <div className="left">
              <img src={feat1} alt="" />

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
              <img src={feat2} className="icon" alt="" />
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
              <img src={feat3} className="icon" alt="" />
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
              <img src={feat4} alt="" />
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
