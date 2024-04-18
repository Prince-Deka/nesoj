import React, { useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  
  useEffect(() => {
    // Get all navbar links
    var navLinks = document.querySelectorAll(".nav-link");

    // Loop through each link
    navLinks.forEach(function(link) {
      // Add click event listener to each link
      link.addEventListener("click", function(event) {
        // Remove 'active' class from all links
        navLinks.forEach(function(link) {
          link.classList.remove("active");
        });
        // Add 'active' class to clicked link
        this.classList.add("active");
      });
    });
  }, []);

  return (
    <div className='custom-navbar-outer'>
      {/* TOP NAVIGATION BAR */}
      <div className="container">
        <div className="row">
          <div className="col-10">
            <div className="custom-button-outer-div">
              <button className="btn btn-primary custom-button-navbar USERNAME">USERNAME</button>
            </div>
          </div>
        </div>
      </div>

      {/* LOGO */}
      <nav className="navbar bg-body-tertiary custom-logo-bar">
        <div className="container-fluid navbar-custom-logo-div">
          <a className="navbar-brand custom-logo-click" href="#">
            <img src="/assets/nesoj.png" alt="@" height="150px" className="d-inline-block align-text-top" />
            <div className="custom-text">
              <span className="custom-neso">NORTH-EAST STUDENTS' ORGANIZATION</span>
              <span className="custom-jal">JALANDHAR</span>
            </div>
          </a>
        </div>
      </nav>

      {/* CONTENTS NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary custom-link-bar">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav nav-pills">
              <span></span>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <span></span>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <span></span>
              <li className="nav-item">
                <a className="nav-link" href="#">Activities</a>
              </li>
              <span></span>
              <li className="nav-item">
                <a className="nav-link" href="#">News</a>
              </li>
              <span></span>
              <li className="nav-item">
                <a className="nav-link" href="#">Gallery</a>
              </li>
              <span></span>
              <li className="nav-item">
                <a className="nav-link" href="#">Posts</a>
              </li>
              <span></span>
              <li className="nav-item">
                <a className="nav-link" href="#">STATE</a>
              </li>
              <span></span>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
