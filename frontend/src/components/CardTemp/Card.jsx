import React from "react";
import style from "./Card.module.css";
import nesojImage from '../../../public/assets/nesoj.png';

function Card({ name, role, whatsApp, email, linkedIn, facebook, instagram, twitter, imgUrl }) {
  return (
    <div>
      <div className={style.cardsContainer}>
        <div className={`${style.card} ${style.cardTwo}`}>
          <header>
            <div className={style.avatar}>
              <img
                src={imgUrl || "assets/Executives/ASUJ/PesidentASUJ.jpg"} // Dynamic image URL
                alt={name}
              />
            </div>
          </header>
          <img className={style.watermark} src={nesojImage} alt="Watermark" />

          <h3>{name}</h3>
          <h4 className={style.PostName}>{role}</h4>
          
          <div className={style.contacts}>
            <a
              href={`https://wa.me/${whatsApp}`}
              target="_blank"
              title="Direct connection on WhatsApp"
            >
              <i
                className="fa fa-whatsapp"
                style={{
                  position: "relative",
                  width: "60px",
                  height: "60px",
                  fontSize: "40px",
                  lineHeight: "39px",
                  color: "#000",
                  transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#0ac5ab";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              ></i>
            </a>
            <a
              href={`mailto:${email}`}
              title="Suggestion or Complaints"
            >
              <i
                className="fa fa-envelope"
                style={{
                  position: "relative",
                  width: "60px",
                  height: "60px",
                  fontSize: "40px",
                  lineHeight: "39px",
                  color: "#000",
                  transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#0ac5ab";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              ></i>
            </a>
            <div className={style.clear}></div>
          </div>

          <footer>
            <p>
              <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href={facebook} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-square"></i>
              </a>
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href={twitter} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter-square"></i>
              </a>
              {/* Add more social links if needed */}
            </p>
          </footer>
        </div>

        <div className={style.clear}></div>
      </div>
    </div>
  );
}

export default Card;
