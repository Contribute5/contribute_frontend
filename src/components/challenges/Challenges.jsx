/* eslint-disable react/prop-types */
import Challenge from "../challenge/Challenge";

import "./challenges.scss";

const Challenges = ({ currentItems }) => {
  return (
    <div className="challenges">
      <Challenge currentItems={currentItems} />
    </div>
  );
};

export default Challenges;
