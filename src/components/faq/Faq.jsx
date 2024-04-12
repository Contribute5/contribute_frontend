import "./faq.scss";
import data from "../../faq.json";
import { useState } from "react";

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="faq">
      <div className="wrapper">
        <h2>Frequently Asked Questions About Challenges</h2>
        <div className="container">
          {data.map((item, i) => (
            <div key={item.id} className="item" onClick={() => toggle(i)}>
              <div className="title">
                <p>{item.question}</p>
                <span>{selected === i ? "x" : "+"}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
