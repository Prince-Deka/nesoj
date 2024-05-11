import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="home-footer">
      <div className="home-footer-container">
        <div className="home-footer-content">
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy <i className="fa-solid fa-lock"></i></a>
            <a href="/terms-of-use">Terms of Use <i className="fa-solid fa-file-lines"></i></a>
          </div>
        </div>
        <div className="home-copyright">
            <p>Copyright &copy; 2024 NESOJ</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
