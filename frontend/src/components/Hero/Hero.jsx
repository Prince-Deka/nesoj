import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you are using react-router-dom for navigation
import './Hero.css';

function Hero() {
    const navigate = useNavigate();

    const handleClickSignup = () => {
        navigate('/register');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    // FOR TESTING PURPOSE
    const handleProfile = () => {
        navigate('/profile');
    };

    return (
        <div className='hero-outer'>
            <nav className="navbar bg-body-tertiary logo-bar">
                <div className="container-fluid logo-div">
                    <a className="navbar-brand logo-click" href="#">
                        <img src="/public/assets/nesoj150x150.png" alt="@" height="150px" className="d-inline-block align-text-top"/>
                        <div className='bar-after-logo'></div>
                        <div className="text">
                            <span className="neso">NORTH-EAST</span>
                            <span className="neso"> STUDENTS'</span>
                            <span className="neso"> ORGANIZATION</span>
                            <span className="jal">JALANDHAR</span>
                        </div>
                    </a>
                    <div className="button-container">
                        <button className='button-arounder btn-login' onClick={handleLogin}>Login</button>
                        <button className='button-arounder btn-signup' onClick={handleClickSignup}>Signup</button>
                    </div>
                </div>
            </nav>



            <nav className="navbar navbar-expand-lg navbar-light bg-light main-navbar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav main-list">
                    <li className="nav-item">
                        <a className="nav-link" href="#who-are-we">Who are we? </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#what-we-do">What we Do?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#carouselExampleIndicators">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact-us-form">Contact Us</a>
                    </li>
                    </ul>
                </div>
            </nav>




            <section className="hero-section">
                <div className="hero-container">
                    <div className="welcome-message">
                        <h1>Welcome to NESOJ</h1>
                    </div>
                    <div className="nesoj-moto">
                        <h2>Integrity, Prosperity and Excellence</h2>
                    </div>
                    <div className="join-us-div">
                        <button className="join-us" onClick={handleClickSignup}>JOIN US</button>
                    </div>
                </div>
            </section>


            <section className="organizations-section">
                <h2 className="org-section-title">Organizations under NESOJ</h2>
                <div className="organizations-container">
                    <div className="organization">
                        <img src="/public/assets/StateLogos/500x500/ASUJ/ASUJ_500x500.jpg"  alt="Organization 1" />
                        <p>Arunachal Students’ Club Jalandhar</p>
                    </div>
                    <div className="organization">
                        <img src="/public/assets/StateLogos/500x500/ASUJ/ASUJ_Colorful.jpg" alt="Organization 2" />
                        <p>Assam Students' Union Jalandhar</p>
                    </div>
                    <div className="organization">
                        <img src="/public/assets/StateLogos/500x500/ASUJ/ASUJ_500x500.jpg" alt="Organization 2" />
                        <p>Jalandhar Mizo Zirlai Pawl</p>
                    </div>
                    <div className="organization">
                        <img src="/public/assets/StateLogos/500x500/ASUJ/ASUJ_500x500.jpg" alt="Organization 2" />
                        <p>Manipur Students' Union Phagwara</p>
                    </div>
                    <div className="organization">
                        <img src="/public/assets/StateLogos/500x500/ASUJ/ASUJ_500x500.jpg" alt="Organization 2" />
                        <p>Meghalaya Students Union Jalandhar</p>
                    </div>
                    <div className="organization">
                        <img src="/public/assets/StateLogos/500x500/ASUJ/ASUJ_500x500.jpg" alt="Organization 2" />
                        <p>Naga Students Union Phagwara</p>
                    </div>
                    <div className="organization">
                        <img src="/public/assets/StateLogos/500x500/ASUJ/ASUJ_500x500.jpg" alt="Organization 2" />
                        <p>Sikkimese Gorkha Students Union Jalandhar</p>
                    </div>
                    <div className="organization">
                        <img src="/public/assets/StateLogos/500x500/ASUJ/ASUJ_500x500.jpg" alt="Organization 2" />
                        <p>Tripura Students’ Association Jalandhar</p>
                    </div>
                </div>
            </section>



            <section id='who-are-we' className="who-are-we sec-info">
                <div className="waw-container sec-info-container">
                    <div className="waw-ques sec-info-ques">
                        Who are we?
                    </div>
                    <div className="waw-answer sec-info-ans">
                        <p>A vibrant community Where the spirit
                        of the Northeast thrives in every corner
                        of our activities. We are a group of
                        passionate Students from the diverse
                        and picturesque northeast region of
                        our country united on this campus
                        to bring the rich tapestry of our culture,
                        traditions and aspirations to the forefront
                        of our collective student experience.</p>
                    </div>
                </div>
            </section>



            <section id='what-we-do' className="what-we-do sec-info">
                <div className="wwd-container sec-info-container">
                    <div className="wwd-ques sec-info-ques">
                        What we do?
                    </div>
                    <div className="wwd-answer sec-info-ans">
                        <p>A vibrant community Where the spirit
                        of the Northeast thrives in every corner
                        of our activities. We are a group of
                        passionate Students from the diverse
                        and picturesque northeast region of
                        our country united on this campus
                        to bring the rich tapestry of our culture,
                        traditions and aspirations to the forefront
                        of our collective student experience.</p>
                    </div>
                </div>
            </section>



            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <h1 className='gallery-title'>Gallery</h1>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src="/public/assets/hero.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="/public/assets/hero.jpg" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="/public/assets/hero.jpg" alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>



            {/* COntact Us */}
            <section className='contact-us-section' id='contact-us-form'>
                <div className="contact-container">
                    <div className="contact-content">
                        <div className="contact-left-side">
                            <div className="address details">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="topic">Address</div>
                                <div className="text-one">Law Gate</div>
                                <div className="text-two">Phagwara</div>
                            </div>
                            <div className="phone details">
                                <i className="fas fa-phone-alt"></i>
                                <div className="topic">Phone</div>
                                <div className="text-one">+91 8888811111</div>
                                <div className="text-two">+91 7878787878</div>
                            </div>
                            <div className="email details">
                                <i className="fas fa-envelope"></i>
                                <div className="topic">Email</div>
                                <div className="text-one">nesoj@nesoj.org</div>
                                <div className="text-two">m.son.coolascode@gmail.com</div>
                            </div>
                        </div>
                        <div className="contact-right-side">
                            <div className="topic-text">Send us a message</div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta facere id suscipit, ab recusandae sunt harum reiciendis pariatur quasi expedita.</p>
                            <form action="#">
                                <div className="contact-input-box">
                                    <input type="text" placeholder='Enter your name'/>
                                </div>
                                <div className="contact-input-box">
                                    <input type="email" placeholder='Enter your Email'/>
                                </div>
                                <div className="contact-input-box message-box">
                                    <textarea></textarea>
                                </div>
                                <div className="contact-button">
                                    <input type="button" value={"Send Now"} onClick={handleProfile}/>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
}

export default Hero;
