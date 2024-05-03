import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Navbar from "../NavBar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../AboutUs/About.css";
import Footer from "../Footer/Footer";
import "./State.css";
import Card from "../../CardTemp/Card";
import { useLocation } from "react-router-dom";
import data from "./StateInfo.json";

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
  let location = useLocation();
  let stateId = location.state ? location.state.stateId : "defaultStateId";
  console.log(stateId);
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

  const items = [
    {
      id: 1,
      src: "assets/StateLogos/500x500/ASUJ/ASUJ_500x500.jpg",
      name: "Arunachal Students' Club Jalandhar",
    },
    {
      id: 2,
      src: "assets/StateLogos/500x500/ASUJ/ASUJ_Colorful.jpg",
      name: "Assam Students' Union Jalandhar",
    },
    {
      id: 3,
      src: "assets/StateLogos/500x500/ASUJ/ASUJ_500x500.jpg",
      name: "Jalandhar Mizo Zirlai Pawl",
    },
    {
      id: 4,
      src: "assets/StateLogos/500x500/ASUJ/ASUJ_500x500.jpg",
      name: "Manipur Students' Union Phagwara",
    },
    {
      id: 5,
      src: "assets/StateLogos/500x500/ASUJ/ASUJ_500x500.jpg",
      name: "Meghalaya Students' Union Jalandhar",
    },
    {
      id: 6,
      src: "assets/StateLogos/500x500/ASUJ/ASUJ_500x500.jpg",
      name: "Naga Students' Union Phagwara",
    },
    {
      id: 7,
      src: "assets/StateLogos/500x500/ASUJ/ASUJ_500x500.jpg",
      name: "Sikkimese Gorkha Students' Union Jalandhar",
    },
    {
      id: 8,
      src: "assets/StateLogos/500x500/ASUJ/ASUJ_500x500.jpg",
      name: "Tripura Students' Association Jalandhar",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="state-contents-container">
        <img
          className="side-logo-state"
          src="assets/StateLogos/500x500/ASUJ/ASUJ_Colorful.jpg"
          alt=""
        />
        <div className="aboutState">
          <img src="assets/StateLogos/500x500/ASUJ/ASUJ_Colorful.jpg" alt="" />
          <h3>Unity in Heritage</h3>
          <p style={{zIndex: '9999'}}>
            The Assam Students Union Jalandhar (ASUJ) is a dynamic organization
            founded in 2010 by Assamese students studying in Jalandhar, led by
            Borunjyoti Borgohain. Our mission is to foster a sense of unity,
            safety, and cultural pride among Assamese students residing in
            Jalandhar, Ludhiana, Kapurthala, and beyond.
            <br />
            <br />
            ASUJ is dedicated to unifying Assamese students in Punjab, providing
            a supportive community away from home. We actively work to combat
            racism and discrimination, ensuring the safety and well-being of our
            members in their academic and social environments.
            <br />
            <br />
            Moreover, ASUJ is committed to promoting Assamese culture and
            tradition in Punjab. Through various events, workshops, and cultural
            exchanges, we strive to celebrate and preserve the rich heritage of
            Assam, introducing it to the diverse community of Punjab.
            <br />
            <br />
            At ASUJ, we believe in the power of unity, education, and cultural
            exchange to create a more inclusive and harmonious society. We
            welcome all Assamese students in Punjab to join us in our mission to
            build a stronger, safer, and more vibrant community.
          </p>
        </div>

        <div className="secondRowAbout container text-center my-3">
          <h2 className="font-weight-light">Executive Board 2023-34</h2>
          <div className="row mx-auto my-auto">
            <Slider {...settings}>
              {items.map((item) => (
                <div key={item.id} className="px-3">
                  <div className="card card-body cards-aboutUs-Landing">
                    <Card name={item.name} />
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
