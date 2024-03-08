import "./footer.scss";
import FooterImg from "../../images/footer.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="wrapper">
          <h2>Join the community </h2>
          <p>
            Ready to turn your coding experience to cash? Sign up now and start
            solving!
          </p>
          <button>GET STARTED</button>
        </div>
      </div>
      <div className="right">
        <img src={FooterImg} alt="" />
      </div>
    </div>
  );
};

export default Footer;
