import React from "react";
import "../Main.css";
import "../Components/Checkout-Components/Cart/Cart.css";

import tincture from "../assets/tincture-img.png";

const Cart = () => {
  return (
    <div className="cart-wrapper">
      <h1 className="cart-header">Your Shop (1 Item)</h1>
      <table>
        <tr>
          <th></th>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        <tr className="product-entry">
          <td>
            <img src={tincture} alt="product" className="cart-product-img" />
          </td>
          <td>Gorrila Glue</td>
          <td>$20.00</td>
          <td>2</td>
          <td>$40.00</td>
        </tr>
      </table>
      <div className="order-summary">
        <table className="order-summary-table">
          <tr>
            <td>Subtotal</td>
            <td>$40.00</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>$5.00</td>
          </tr>
          <tr>
            <td>Coupon Code:</td>
            <td>None</td>
          </tr>
          <tr>
            <td>Grand Total</td>
            <td>$45.00</td>
          </tr>
        </table>
        <button className="checkout-btn">Checkout</button>
      </div>
      <div className="cart-overlay"></div>
    </div>
  );
};

export default Cart;
