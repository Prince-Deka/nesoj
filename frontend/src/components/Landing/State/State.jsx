import React from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import Navbar from "../NavBar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../AboutUs/About.css";
import Footer from "../Footer/Footer";
import "./State.css";
import Card from "../../CardTemp/Card";
import { useAuth } from '../../../store/auth';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#fff",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <i
        className="fa fa-chevron-right"
        style={{ color: "#0ac5ab", fontSize: "30px" }}
      ></i>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#fff",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <i
        className="fa fa-chevron-left"
        style={{ color: "#0ac5ab", fontSize: "30px" }}
      ></i>
    </div>
  );
}

function State() {
  const state = useAuth().stateDetails;
  let location = useLocation();
  let stateId = location.state ? location.state.stateId : "defaultStateId";

  const stateAbout = state?.about;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const items = state?.stateMembers;

  return (
    <div>
      <Navbar />
      <div className="state-contents-container">
        <img
          className="side-logo-state"
          src={state?.stateLogo && state.stateLogo}
          alt=""
        />
        <div className="aboutState">
          <img src={state?.stateLogo && state.stateLogo} alt="" />
          <h3>{state?.motto}</h3>

          {stateAbout && <p style={{ zIndex: '9999' }}>{stateAbout.split('<br>').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))} </p>}
        </div>

        <div className="secondRowAbout container text-center my-3">
          <h2 className="font-weight-light text-center">Executive Board 2023-24</h2>
          <div className="row mx-auto my-auto">
            <Slider {...settings}>
              {items && items.map((item) => (
                <div key={item.memberId} className="px-3">
                  <div className="card card-body cards-aboutUs-Landing">
                    <Card
                      name={item.name}
                      role={item.role}
                      whatsApp={item.whatsApp}
                      email={item.email}
                      linkedIn={item.linkedIn}
                      facebook={item.facebook}
                      instagram={item.instagram}
                      twitter={item.twitter}
                      imageUrl={item.imageUrl}
                      stateLogo={state?.stateLogo && state.stateLogo}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default State;
