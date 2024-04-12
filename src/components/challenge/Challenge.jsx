/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./challenge.scss";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Challenge = ({ currentItems }) => {
  const limitWords = (str, limit) => {
    const words = str.split(" ");
    return (
      words.slice(0, limit).join(" ") + (words.length > limit ? "..." : "")
    );
  };

  return (
    <>
      {currentItems.map((data) => (
        <div className="challenge" key={data.id}>
          <div className="wrapper">
            <Link className="link" to={`/single_challenge/${data.id}`}>
              <div className="top">
                <img src={data.imgUrl} alt="" />
              </div>
            </Link>
            <div className="bottom">
              <h3>{data.title}</h3>
              <p>{limitWords(data.desc, 20)}</p>
              <div className="user">
                <Link className="link" to={`/single_challenge/${data.id}`}>
                  <div className="cta">
                    <span>Start now</span> <ArrowOutwardIcon />
                  </div>
                </Link>
                <div className="user_images">
                  <img
                    src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="img1"
                  />
                  <img
                    src="https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="img2"
                  />
                  <img
                    src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="img3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Challenge;
