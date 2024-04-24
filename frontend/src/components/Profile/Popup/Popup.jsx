import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // for navigating through react-router-dom;
import "./Popup.css";

const Popup = ({ onClose }) => {
  // Modified handleClose to stop event propagation
  const handleClose = (e) => {
    e.stopPropagation(); // This stops the click event from bubbling up to the parent div
    console.log("Closing popup...");
    onClose();
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-top-row">
          <img
            src="/public/assets/StateLogos/500x500/ASUJ/ASUJ_Colorful.jpg"
            alt=""
          />
          <div className="sender-time">
            <h2>Popup Content</h2>
            <p>HH:MM • DD/MM/YYYY</p>
          </div>
          <button onClick={handleClose}><i class="fa-sharp fa-solid fa-xmark"></i></button>
        </div>
        <div className="popup-main-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
            unde eaque minima corporis quae, veniam, quas asperiores consequatur
            nemo, corrupti sit architecto! Provident nulla excepturi, delectus
            exercitationem consequuntur velit unde, corporis cumque autem libero
            laborum obcaecati et quas natus neque, dolore voluptate saepe
            consectetur? Nemo neque accusamus at pariatur?
          </p>
        </div>
        {/* Use handleClose for the button's onClick */}
      </div>
    </div>
  );
};
export default Popup;
