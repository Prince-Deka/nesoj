import React from "react";
import Navbar from "../NavBar/Navbar";
import "./Home.css";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="home-outer-nav">
      <Navbar />

      <div className="aboutUs-title title-home">
        <i class="fa-solid fa-circle-info"></i>AboutUs
      </div>
      <div class="responsive-container-block bigContainer">
        <div class="responsive-container-block Container">
          <p class="text-blk heading">About Us</p>
          <p class="text-blk subHeading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu
          </p>
          <div class="social-icons-container">
            <a class="social-icon">
              <img
                class="socialIcon image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb33.png"
              />
            </a>
            <a class="social-icon">
              <img
                class="socialIcon image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb34.png"
              />
            </a>
            <a class="social-icon">
              <img
                class="socialIcon image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb35.png"
              />
            </a>
            <a class="social-icon">
              <img
                class="socialIcon image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb36.png"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Happenings & Details */}
      <div className="happenings-title title-home">
        <i class="fa-solid fa-calendar-day"></i> Happenings
      </div>
      <div className="profile-title title-home">
        <i class="fa-regular fa-address-card"></i> Profile Details
      </div>
      <div className="second-row-landing">
        <div className="second-row-first-column-landing">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="true"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/assets/background.jpg"
                  className="d-block w-100"
                  alt="Background Image"
                />
                <div className="carousel-caption">
                  <h5>Background Scene</h5>
                  <p>Description of the background scene.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="/assets/post.JPG"
                  className="d-block w-100"
                  alt="Post Image"
                />
                <div className="carousel-caption">
                  <h5>Post Image</h5>
                  <p>Description of the post image.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="/assets/hero.jpg"
                  className="d-block w-100"
                  alt="Hero Image"
                />
                <div className="carousel-caption">
                  <h5>Hero Image</h5>
                  <p>Description of the hero image.</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
          </div>
        </div>

        <div className="second-row-second-column-landing"></div>
      </div>

      {/* NEWS AND POSTS */}
      <div class="container-fluid third-row-container">
        <div class="announcements-title title-home">
          <i class="fa-solid fa-scroll"></i>Announcements
        </div>
        <div class="third-custom-column">
          <div class="container-third-row announcements-cont">
            <div className="announcement">
              <span className="announcement-subject">
                Introducing all the website of NESOJ
              </span>
              <span className="announcement-date">22nd April 2024</span>
              <br />
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                aut laudantium saepe numquam dolorem eum officiis ea
                repudiandae, praesentium error quam esse distinctio. Blanditiis
                atque voluptas esse accusantium unde nesciunt optio consequatur,
                illum et molestias? Asperiores quis quia sed aliquid adipisci
                tempora placeat minima!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
                ea eius aperiam, dolorum eveniet, omnis impedit explicabo,
                labore laboriosam{" "}
                <strong>
                  fuga aspernatur incidunt veritatis quaerat. Voluptate velit
                  quia non quidem soluta quos ut, ullam culpa sequi quae sint ea
                  dolore
                </strong>
                , nesciunt eos iure. Adipisci at consectetur expedita corporis
                autem, <i>magnam dolor fugiat</i>
                doloribus dolores, temporibus quam sed voluptatem officia
                provident facere officiis modi maiores natus, debitis tenetur
                repellat!
              </p>
            </div>

            <div className="announcement">
              <span className="announcement-subject">
                Introducing all the website of NESOJ
              </span>
              <span className="announcement-date">22nd April 2024</span>
              <br />
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                aut laudantium saepe numquam dolorem eum officiis ea
                repudiandae, praesentium error quam esse distinctio. Blanditiis
                atque voluptas esse accusantium unde nesciunt optio consequatur,
                illum et molestias? Asperiores quis quia sed aliquid adipisci
                tempora placeat minima!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
                ea eius aperiam, dolorum eveniet, omnis impedit explicabo,
                labore laboriosam{" "}
                <strong>
                  fuga aspernatur incidunt veritatis quaerat. Voluptate velit
                  quia non quidem soluta quos ut, ullam culpa sequi quae sint ea
                  dolore
                </strong>
                , nesciunt eos iure. Adipisci at consectetur expedita corporis
                autem, <i>magnam dolor fugiat</i>
                doloribus dolores, temporibus quam sed voluptatem officia
                provident facere officiis modi maiores natus, debitis tenetur
                repellat!
              </p>
            </div>
          </div>
        </div>
        <div class="post-title title-home">
          <i class="fa-solid fa-plus"></i>Post
        </div>
        <div class="third-custom-column">
          <div class="container-third-row post-cont">
            <div class="post-name">
              <a href="#">
                <div class="post-container">
                  <img src="/assets/post.JPG" alt="" />
                </div>
                <div class="post-overlay">POST</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div class="gallery-title-home title-home">
        <i class="fa-regular fa-images"></i>Gallery
      </div>
      <div class="gallery-cont">
        <a href="">
          <div class="gallery-overlay">GALLERY</div>
        </a>
      </div>

      {/* IMPORT FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;
