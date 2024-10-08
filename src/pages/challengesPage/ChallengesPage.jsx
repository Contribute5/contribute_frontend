import Navbar from "../../components/navbar/Navbar";
import SearchFilter from "../../components/searchFilter/SearchFilter";
import Challenges from "../../components/challenges/Challenges";
import "./challengesPage.scss";
import Projects from "../../data.json";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import Faq from "../../components/faq/Faq";
import LOGO from "../../images/CONTRIBUTE.png";
import fb from "../../images/fb.png";
import social from "../../images/social.png";
import github from "../../images/github.png";
import insta from "../../images/insta.png";


const ChallengesPage = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = Projects.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(Projects.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };
  return (
    <div className="challenges_page">
      <Navbar />
      <SearchFilter />
      <Challenges currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="prev"
        nextLinkClassName="next"
        activeLinkClassName="active"
      />
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

export default ChallengesPage;
