import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-home-outer">
      <footer className="site-home-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="footer-text-justify">
                The NESOJ website is dedicated to bringing together students
                from the North-east who are studying near Jalandhar. Our goal is
                to create a strong sense of community by organizing engaging
                activities and events. Additionally, the website offers
                convenient access to information about our organization's
                executives, streamlining communication and promoting effective
                collaboration. Join us in fostering a welcoming and supportive
                environment where students can connect, participate, and thrive
                together.
              </p>
            </div>

            <div className="col-xs-6 col-md-3 categories-footer">
              <h6>Categories</h6>
              <ul className="footer-landing-links">
                <li>
                  <a href="#">C</a>
                </li>
                <li>
                  <a href="#">UI Design</a>
                </li>
                <li>
                  <a href="#">PHP</a>
                </li>
                <li>
                  <a href="#">Java</a>
                </li>
                <li>
                  <a href="#">Android</a>
                </li>
                <li>
                  <a href="#">Templates</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-landing-links">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">Activities</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container second-footer-container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2024 All Rights Reserved by
                <a href="#">&nbsp;NESOJ.</a>
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="landing-social-icons">
                <li>
                  <a className="footer-landing-facebook" href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="footer-landing-twitter" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="footer-landing-dribbble" href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a className="footer-landing-instatram" href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
