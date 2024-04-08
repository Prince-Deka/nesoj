import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"// for navigating through react-router-dom;
import "./Popup.css";

const Popup = ({ onClose }) => {
    const handleClose = () => {
      console.log("Closing popup...");
      onClose();
    };
    return (
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content">
          <h2>Popup Content</h2>
          <p>This is the content of the popup.</p>
          <button onClick={onClose}>Close Popup</button>
        </div>
      </div>
    );
  };
export default Popup;