import React from 'react'
import './Navbar.css'


function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg theme">
                <div className="container-fluid justify-content-end" >

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
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
                </div>
            </nav>

            <div className="logo-container">
                <a href="#"><img src="/assets/logo3.png" alt="Logo" /></a>   {/* logo3 is in public/assets */}
               
            </div>

        </div>
    )
}

export default Navbar