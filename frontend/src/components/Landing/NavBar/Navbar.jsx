import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from '../../../store/auth';


function Navbar() {
  const location = useLocation();
  const navigate = useNavigate()
  const user = useAuth().user;
  const [gallery, setGallery] = useState('')


  const handleGallery = (e) =>{
    event.preventDefault()
    setGallery(e)
    navigate('/gallery', {state: {gallery: e}});
  }

  // Function to determine if a link should be active based on its path
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="custom-navbar-outer">
      {/* TOP NAVIGATION BAR */}
      <div className="container">
        <div className="row">
          <div className="col-10">
            <div className="custom-button-outer-div">
              <button className="btn btn-primary custom-button-navbar">
                <img src={user.profilePicUrl && user.profilePicUrl} alt="" />
                <Link to='/profile' className="navbar-userName-top"><span>&nbsp;&nbsp;</span>{user?.firstName && user.firstName}</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* LOGO */}
      
        <nav className="navbar bg-body-tertiary custom-logo-bar">
          <div className="container-fluid navbar-custom-logo-div">
            <a className="navbar-brand custom-logo-click" href="#">
              <img
                src="/assets/nesoj.png"
                alt="@"
                height="150px"
                className="d-inline-block align-text-top"
              />
              <div className="custom-text">
                <span className="custom-neso">
                  NORTH-EAST STUDENTS' ORGANIZATION
                </span>
                <span className="custom-jal">JALANDHAR</span>
              </div>
            </a>
          </div>
        </nav>

      {/* CONTENTS NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary custom-link-bar">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav nav-pills">
              <li className="nav-item">
                <Link
                  to="/homemain"
                  className={`nav-link ${isActive("/homemain") ? "active" : ""
                    }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className={`nav-item `}>
                <Link
                  to="/about"
                  className={`nav-link ${isActive("/about") ? "active" : ""}`}
                >
                  About Us
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  to="/activities"
                  className={`nav-link ${isActive("/activities") ? "active" : ""
                    }`}
                >
                  Activities
                </Link>
              </li> */}
              <li className={`nav-item ${isActive("/news") ? "active" : ""}`}>
                <Link
                  to="/news"
                  className={`nav-link ${isActive("/news") ? "active" : ""}`}
                >
                  News
                </Link>
              </li>
             
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${isActive("/gallery") ? "active" : ""}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gallery
                  </a>
                  <ul className="dropdown-menu Gallery-dropdown-navbar">
                    <li className={`nav-item`}>
                      <a href="" className={`dropdown-item nav-link`} onClick={(e)=>{handleGallery('all')}}>All</a>
                    </li>
                    <li className={`nav-item`}>
                      <a href="" className="dropdown-item nav-link" onClick={(e)=>{handleGallery('photos')}}>Photos</a>
                    </li>
                    <li className={`nav-item`}>
                      <a href="" className="dropdown-item nav-link" onClick={(e)=>{handleGallery('videos')}}>Videos</a>
                    </li>

                  </ul>
                
                  
               
              </li>
              <li className="nav-item">
                <Link
                  to="/posts"
                  className={`nav-link ${isActive("/posts") ? "active" : ""}`}
                >
                  Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/forumn"
                  className={`nav-link ${isActive("/forumn") ? "active" : ""}`}
                >
                  Forum
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/state"
                  className={`nav-link ${isActive("/state") ? "active" : ""}`}
                >
                  {user.stateName && user.stateName}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
