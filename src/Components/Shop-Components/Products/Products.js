import React from "react";
import "./Products.css";
import tincture from "../../../assets/tincture-img.png";

const Products = () => {
  return (
    <div className="products-wrapper">
      <h1 className="products-header">Shop</h1>
      <div className="products-list">
        <div className="product-item">
          <div className="product-image">
            <img src={tincture} alt="product"></img>
          </div>
          <div className="product-name">Lemon Haze CBD Tincture</div>
          <div className="product-details">
            <h3 className="product-price">
              $30.00<small>USD</small>
            </h3>
            <div className="qty-group">
              <div className="minus-btn">-</div>
              <div className="qty">0</div>
              <div className="plus-btn">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
