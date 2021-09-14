import React from "react";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-wrapper">
      <div className="featured-bottle">
        <div className="featured-bottle-img"></div>
        <div className="featured-bottle-blob"></div>
        <div className="featured-bottle-ring"></div>
        <div className="featured-bottle-text"></div>
      </div>
      <div className="featured-details">
        <h6>Best For:</h6>
        <ul>
          <li>
            <i class="fas fa-cannabis"></i>
            This is one of the most important benefits of CBD
          </li>
          <li>
            <i class="fas fa-cannabis"></i>This is one of the most important
            benefits of CBD
          </li>
          <li>
            <i class="fas fa-cannabis"></i>This is one of the most important
            benefits of CBD
          </li>
        </ul>
        <button>View Item</button>
      </div>
      <div className="featured-bg-overlay"></div>
    </div>
  );
};

export default Featured;
