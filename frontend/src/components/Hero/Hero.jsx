import React from 'react'
import './Hero.css'
import Whatwedo from '../Whatwedo/Whatwedo'
function Hero() {
    return (
        <div className='container-fluid justify-center items-center h-screen' style={{ minHeight: "94vh", border: "2px solid red"}}>

            <div className='container-fluid justify-center items-center h-screen' style={{ marginTop: "0vh", marginBottom: "vh", backgroundColor: "#d4d4d4", padding: "20vh", }}>
                <div style={{ display: "flex", justifyContent:"center" }}>
                    <h1 style={{ textAlign: "center", fontWeight: "900" }}>Integrity, Prosperity and Excellence</h1><br />
                </div>
                <h4 style={{ textAlign: "center", fontWeight: "700" }}>Welcome to the hearbeat of North East Students' Org</h4>
                <br />
                <br />
                <div className="d-flex container-fluid justify-content-center">
                    <button type="button" className="btn active" data-bs-toggle="button" aria-pressed="true">Active toggle button</button>
                </div>
                
            </div>

            {/* cards section starts here */}

            {/* what we do section */}
            <hr style={{backgroundColor:"black", padding:"2px"}}/>
            
            <Whatwedo/>
            <div className="container text-center" style={{ border: "2px solid black" }}>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                    <div className="col">Column</div>
                    <div className="col">Column</div>
                    <div className="col">Column</div>
                    <div className="col">Column</div>
                </div>
            </div> {/* cards section ends here */}

        </div>
    )
}

export default Hero