import React from 'react'
import './Hero.css'
function Hero() {
    return (
        <div className='container-fluid justify-center items-center h-screen' style={{ minHeight: "94vh", border: "2px solid red", }}>

            <div style={{ marginTop: "35vh", marginBottom: "30vh" }}>
                <h1 style={{ fontWeight: "900" }}>Uniting Northeastern Voices, Empowering Tomorrow's Leaders</h1>
                <br />
                <br />
                <div class="d-flex container-fluid justify-content-center">
                    <button class="btn btn-primary me-2" type="button">Sign Up</button>
                    <button class="btn btn-primary" type="button">Login</button>
                </div>
            </div>

            {/* cards section starts here */}

            <div class="container text-center" style={{ border: "2px solid black" }}>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                    <div class="col">Column</div>
                    <div class="col">Column</div>
                    <div class="col">Column</div>
                    <div class="col">Column</div>
                </div>
            </div> {/* cards section ends here */}

        </div>
    )
}

export default Hero