/* eslint-disable react/prop-types */
import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Testimonial from "../../components/testimonial/Testimonial";
import MobileMenu from "../../components/mobileMenu/MobileMenu";
import "./home.scss";

const Home = ({ menuOpen, setMenuOpen }) => {
  const closeMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="home">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} closeMenu={closeMenu} />
      <Header />
      <Featured />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
