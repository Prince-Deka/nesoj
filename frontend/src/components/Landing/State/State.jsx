import React from "react";
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import Navbar from "../NavBar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../AboutUs/About.css";
import Footer from "../Footer/Footer";
import "./State.css";
import Card from "../../CardTemp/Card";
import { useLocation } from 'react-router-dom';
import data from './StateInfo.json'; 




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

function State(){
  let location = useLocation();
  let stateId = location.state ? location.state.stateId : 'defaultStateId';
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
        <img className="side-logo-state" src="assets/StateLogos/500x500/ASUJ/ASUJ_Colorful.jpg" alt="" />
        <div className="aboutState">
          <img src="assets/StateLogos/500x500/ASUJ/ASUJ_Colorful.jpg" alt="" />
          <h3>Honesty is the Best Policy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            corrupti, sunt soluta in iste magni nisi cupiditate sapiente beatae
            laboriosam ipsa iusto molestiae tempore est, sint numquam officia
            tenetur maxime dolores mollitia. Quos recusandae eligendi est ullam,
            illo obcaecati corporis ducimus provident doloremque. Sequi libero
            laboriosam recusandae pariatur, fuga reprehenderit.
          </p>
        </div>

        <div className="secondRowAbout container text-center my-3">
        <h2 className="font-weight-light">Executive Board 2023-34</h2>
        <div className="row mx-auto my-auto">
          <Slider {...settings}>
            {items.map(item => (
              <div key={item.id} className="px-3">
                <div className="card card-body cards-aboutUs-Landing">
                  <Card name={item.name}/>
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
