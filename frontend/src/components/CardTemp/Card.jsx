import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Assuming you are using react-router-dom for navigation
import style from "./Card.module.css";
import nesojImage from '../../../public/assets/nesoj.png'

function Card(props) {
  return (
    <div>
      <div className={style.cardsContainer}>
        <div className={`${style.card} ${style.cardTwo}`}>
          <header>
            <div className={style.avatar}>
              <img
                src="assets/Executives/ASUJ/PesidentASUJ.jpg"
                alt="Islam Status 360 Logo"
              />
            </div>
          </header>
          <img className={style.watermark} src="assets/nesoj.png" alt="" />

          <h3>{props.name}</h3>
          <h4 className={style.PostName}>President</h4>
          
          <div className={style.contacts}>
            <a
              href="https://wa.me/923106162624"
              target="_blank"
              title="Direct connection on whatsapp"
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
              href="mailto:islamstatus360@gmail.com"
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
              <a>
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a>
                <i className="fa-brands fa-facebook-square"></i>
              </a>
              <a>
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a>
                <i className="fa-brands fa-twitter-square"></i>
              </a>
              <a>
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a>
                <i className="fa-brands fa-pinterest-square"></i>
              </a>
              <a>
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a>
                <i className="fa-brands fa-telegram"></i>
              </a>
            </p>
          </footer>
        </div>

        <div className={style.clear}></div>
      </div>
    </div>
  );
}
export default Card;
