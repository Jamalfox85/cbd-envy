import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-left">
        <h3>Still Not Convinced?</h3>
        <p>
          Maybe some of our other resources can you convince you. If you have
          any questions you can contact us here.Maybe some of our other
          resources can you convince you. If you have
        </p>
      </div>
      <div className="footer-right">
        <div className="footer-links">
          <ul>
            <h3>Home</h3>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
          <ul>
            <h3>About</h3>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
          <ul>
            <h3>News</h3>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
          <ul>
            <h3>Help</h3>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </div>
        <div className="footer-socials">
          <div className="social">
            <i className="fab fa-twitter"></i>
          </div>
          <div className="social">
            <i className="fab fa-facebook"></i>
          </div>
          <div className="social">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="social">
            <i className="fas fa-envelope"></i>
          </div>
        </div>
        <input className="footer-email" type="email" />
      </div>
      <div className="footer-bg-overlay"></div>
    </div>
  );
};

export default Footer;
