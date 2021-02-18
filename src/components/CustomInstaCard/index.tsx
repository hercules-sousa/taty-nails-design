import React from "react";

import "./styles.css";

const CustomInstaCard = (props: { cardImage: any }) => {
  return (
    <div id="card-container">
      <div id="profile-info">
        <div id="profile-image-container" />
        <div className="information">
          <h6>Taty Almeida</h6>
          <h6>Nails Designer</h6>
        </div>
      </div>
      <img src={props.cardImage} alt="Instagram Example" sizes="contain" />
    </div>
  );
};

export default CustomInstaCard;
