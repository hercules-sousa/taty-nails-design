import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";

import "./styles.css";

const TestimonyCard = () => {
  return (
    <div id="testimony-card-container">
      <div id="background-sheet">
        <div id="image-sheet" />
        <div className="card-box-one"></div>
        <div className="card-box-two">
          <div className="testimony-card-image-container" />
          <div className="testimony-card-icons-container">
            <RiFacebookCircleLine size={40} color="white" />
            <FaInstagram size={40} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
