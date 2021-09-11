import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-text">
        <h3>Enter Some Pretty Amazing Text Here</h3>
        <p>
          Enter some pretty okay subtext here. This is where we go just a little
          more in depth with the product brand
        </p>
      </div>
      <button>Shop Now</button>
    </div>
  );
};

export default Hero;
