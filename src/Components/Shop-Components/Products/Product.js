import React from "react";

const Product = (props) => {
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={props.image} alt="product"></img>
      </div>
      <div className="product-name">{props.name}</div>
      <div className="product-details">
        <h3 className="product-price">
          ${props.price}.00
          <small>USD</small>
        </h3>
        <div className="qty-group">
          <div className="minus-btn">-</div>
          <div className="qty">{props.quantity}</div>
          <div className="plus-btn">+</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
