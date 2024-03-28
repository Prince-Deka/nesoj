import React from 'react'
import './Navbar.css'
import { useNavigate } from "react-router-dom"// for navigating through react-router-dom










function Navbar() {




    const navigate = useNavigate();

    const handleClickSingup = () => {
        navigate('/register');
    };

    const handleLogin = () => {
        navigate('/login');
    };









        return (
            <div>
                <div style={{ display: "flex", backgroundColor: "#59c1aa" }}>
                    <span style={{ float: "left", color: "white", fontWeight: "500" }}>Email: nesoj@jalandhar.org | Phone: +91 9999999999</span> <span style={{ float: "right" }}></span>
                </div>
                <nav className="navbar navbar-expand-lg theme">
                    <div className="container-fluid justify-content-end" >

                        <div style={{ display: "flex" }}>
                            <a href="#"><img src="/assets/logo3.png" alt="Logo" width="90" height="90" /></a>   {/* logo3 is in public/assets */}

                            <div className='vl'></div>
                            <h6 style={{ textAlign: "left", fontWeight: "900" }}> North-East <br /> Students'<br /> Organisation <br /> Jalandhar</h6>
                        </div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <div className='people container-fluid justify-content-center' style={{ display: "flex", alignItems: "center" }}>
                                <ul className="navbar-nav" >
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Gallery</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " aria-disabled="true">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className=''>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <button className="btn btns me-md-2" type="button" onClick={handleLogin}>Login</button>
                                    <button className="btn btns" type="button" onClick={handleClickSingup}>Register</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </nav>

                {/* <div className="logo-container">

            </div> */}

            </div>
        )
    }

    export default Navbar