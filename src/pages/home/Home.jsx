import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Testimonial from "../../components/testimonial/Testimonial";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Featured />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
