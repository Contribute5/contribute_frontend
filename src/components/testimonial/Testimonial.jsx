import "./testimonial.scss";
import TestimonialImg from "../../images/testimonial.png";
import Slider from "react-slick";

const testimonials = [
  {
    quote:
      "I've always believed that the best way to learn is by doing. This platform allows me to put my skills to the test in a real-world setting while earning money in the process. It's a win-win situation, and I'm grateful to have found it.",
    name: "Titus Ayamga",
    position: "Backend Developer",
    img: TestimonialImg,
  },
  {
    quote:
      "I've always believed that the best way to learn is by doing. This platform allows me to put my skills to the test in a real-world setting while earning money in the process. It's a win-win situation, and I'm grateful to have found it.",
    name: "Jane Doe",
    position: "Frontend Developer",
    img: TestimonialImg,
  },
  {
    quote:
      "I've always believed that the best way to learn is by doing. This platform allows me to put my skills to the test in a real-world setting while earning money in the process. It's a win-win situation, and I'm grateful to have found it.",
    name: "John Smith",
    position: "UI/UX Designer",
    img: TestimonialImg,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonial">
      <div className="container">
        <h2>Hear from the community</h2>
        <p>Read what some of our users say about Contribute</p>

        <div {...settings} className="items">
          {testimonials.map((testimonial, index) => (
            <div className="card" key={index}>
              <img
                src={testimonial.img}
                alt={`${testimonial.name}'s testimonial`}
              />
              <div className="item">
                <div className="wrapper">
                  <q>{testimonial.quote}</q>
                  <h6 className="name">{testimonial.name}</h6>
                  <h6>{testimonial.position}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
