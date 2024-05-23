import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Navbar from "../NavBar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./About.css";
import Footer from '../Footer/Footer'
import Card from '../../CardTemp/Card'
import { Link, useLocation } from "react-router-dom";
import { useAuth } from '../../../store/auth';
import axios from 'axios';


function NextArrow(props) {
  const user = useAuth();
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#fff", borderRadius: "50%" }}
      onClick={onClick}
    >
      <i className="fa fa-chevron-right" style={{ color: "#0ac5ab", fontSize: "30px" }}></i>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#fff", borderRadius: "50%" }}
      onClick={onClick}
    >
      <i className="fa fa-chevron-left" style={{ color: "#0ac5ab", fontSize: "30px" }}></i>
    </div>
  );
}

export default function About() {
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const items = [
    { id: 1, src: 'assets/StateLogos/500x500/ASCJ/ArunachalPradesh.png', name: 'Arunachal Students\' Club Jalandhar' },
    { id: 2, src: 'assets/StateLogos/500x500/ASUJ/ASUJ_Colorful.jpg', name: 'Assam Students\' Union Jalandhar' },
    { id: 3, src: 'assets/StateLogos/500x500/JMZP/Mizoram.png', name: 'Jalandhar Mizo Zirlai Pawl' },
    { id: 4, src: 'assets/StateLogos/500x500/MSUP/Manipur.png', name: 'Manipur Students\' Union Phagwara' },
    { id: 5, src: 'assets/StateLogos/500x500/MSUJ/Meghalaya.png', name: 'Meghalaya Students\' Union Jalandhar' },
    { id: 6, src: 'assets/StateLogos/500x500/NSUJ/Nagaland.png', name: 'Naga Students\' Union Phagwara' },
    { id: 7, src: 'assets/StateLogos/500x500/SGSUJ/Sikkim.png', name: 'Sikkimese Gorkha Students\' Union Jalandhar' },
    { id: 8, src: 'assets/StateLogos/500x500/TSAJ/Tripura.png', name: 'Tripura Students\' Association Jalandhar' }
  ];

  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/data/nesojExecutives');
        setMembers(response.data);
      } catch (error) {
        console.log('Error while getting members data', error);
      }
    };

    fetchMembers();
  }, []); // Empty dependency array to ensure this runs only once when the component mounts


  return (
    <div>
      <Navbar />

      <div className="topRowAbout">
        <div className="establishment-about about-content">
          <div className="establishment-img">
            <img src="assets/About/establishment.png" alt="" />
          </div>
          <div className="content-establishment">
            <h4>Established in 2013</h4>
            <p>
              North-East Students’ Organization Jalandhar (NESOJ) is an inclusive community established in 2013 with a vision to promote integrity, prosperity, and excellence among the students residing in Jalandhar and Phagwara areas of Punjab, hailing from the eight northeastern states of India - Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, and Tripura.
            </p>
          </div>
        </div>

        <div className="mission-about about-content">
          <div className="mission-content">
            <h4>Our Mission</h4>
            <p>
              To facilitate students from the northeastern states' academic, cultural, and social integration into the dynamic tapestry of Jalandhar and Phagwara, NESOJ is committed to establishing a supportive and welcoming environment.
            </p>
          </div>
          <div className="mission-img">
            <img src="assets/About/mission.png" alt="" />
          </div>
        </div>

        <div className="highlights-about about-content">
          <div className="highlights-img">
            <img src="assets/About/highlights.png" alt="" />
          </div>
          <div className="highlights-content">
            <h4>Annual Highlights</h4>
            <ul>
              <li><strong>NESOJ Sports Week:</strong> NESOJ Sports is an annual sporting event that brings together members of the northeastern community to celebrate camaraderie and sportsmanship. Through various sporting activities, NESOJ Sports promotes physical fitness, teamwork, and friendly competition.
              </li>
              <li><strong>NESOJ Fiesta:</strong> Northeast Fiesta is the flagship cultural extravaganza organized by NESOJ, showcasing the rich and diverse cultural heritage of Northeast India. Through music, dance, cuisine, and art, the Northeast Fiesta brings together members of the community to showcase their talents and traditions, fostering cultural exchange and appreciation.
              </li>
            </ul>
          </div>
        </div>
        <div className="value-about about-content">
        <div className="value-content">
        <h4>Our Values</h4>
        <p> NESOJ is dedicated to preserving the principles of cooperation, respect, and inclusivity. Regardless of one's background or identity, we want to foster a supportive and inspiring environment where each member feels appreciated and respected.</p>
        </div>
        <div className="value-img">
          <img src="assets/About/value.png" alt="" />
        </div>
        </div>
        
      </div>

      <div className="secondRowAbout container text-center my-3">
        <h2 className="font-weight-light heading-about">Executive Board 2023-24</h2>
        <div className="row mx-auto my-auto">
          <Slider {...settings}>
            {members.map(member => (
              <div key={member._id} className="px-3">
                <div className="card card-body cards-aboutUs-Landing">
                  <Card
                    name={member.name}
                    role={member.role}
                    whatsApp={member.whatsApp}
                    email={member.email}
                    linkedIn={member.linkedIn}
                    facebook={member.facebook}
                    instagram={member.instagram}
                    twitter={member.twitter}
                    imageUrl={member.imageURL}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>


      <div className="thirdRowAbout container text-center my-3">
        <h2 className="font-weight-light heading-about">State Organization Under NESOJ</h2>
        <div className="row mx-auto my-auto">
          <Slider {...settings}>
            {items.map(item => (
              <div key={item.id} className="px-3">
                <div className="card card-body cards-aboutUs-Landing">
                  <img className="img-fluid StateLogo" src={item.src} alt={`Slide ${item.id}`} />
                  <div className="orgNameDiv"><p className="card-title OrgName text-center">{item.name}</p></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </div>
  );
}
