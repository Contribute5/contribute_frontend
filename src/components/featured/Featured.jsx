import "./featured.scss";
import Img1 from "../../images/Frame 32.jpg";
import Img3 from "../../images/Frame 32-1.jpg";
import Img4 from "../../images/Frame 31.jpg";
import Img5 from "../../images/Frame 32-2.jpg";
import CodeIcon from "@mui/icons-material/Code";

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
              <div className="box-container">
                <div className="top-box">
                  <CodeIcon />
                  <span>Browse Challenges</span>
                </div>
                <div className="bottom-box"></div>
              </div>
              <h3>Browse Challenges</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minima veniam,
                quis nostrum exercitationem ullam corporis suscipit laboriosam,
                nisi ut al eiusmod tempor incididunt ut labore
              </p>
            </div>
            <div className="right">
              <img
                src="https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="center">
          <div className="wrapper">
            <div className="left">
              <div className="box-container">
                <div className="top-box">
                  <CodeIcon />
                  <span>Solve and Get Paid</span>
                </div>
                <div className="bottom-box"></div>
              </div>
              <h3>Solve and Get Paid</h3>
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut al Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut al
              </p>
              <img
                src="https://plus.unsplash.com/premium_photo-1690521447032-8c608d25a0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="right">
              <div className="box-container">
                <div className="top-box">
                  <CodeIcon />
                  <span>Track Your Earnings</span>
                </div>
                <div className="bottom-box"></div>
              </div>
              <h3>Track Your Earnings</h3>
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut al Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut al
              </p>
              <img
                src="https://images.unsplash.com/photo-1506645292803-579c17d4ba6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="wrapper">
            <div className="left">
              <img
                src="https://plus.unsplash.com/premium_photo-1677093906033-dc2beb53ace3?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="right">
              <div className="box-container">
                <div className="top-box">
                  <CodeIcon />
                  <span>Submit for Verification</span>
                </div>
                <div className="bottom-box"></div>
              </div>
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
