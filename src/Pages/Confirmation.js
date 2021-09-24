import React from "react";
import "../Main.css";
import "../Components/Checkout-Components/Confirmation/Confirmation.css";

const Confirmation = () => {
  return (
    <div className="confirmation-wrapper">
      <h1 className="confirmation-header">Thanks for Shopping!</h1>
      <p>
        Thank you for shopping att he greatest CBD store on this fricken planet.
        You have no idea what’s in store for you. Your order should arrive
        within 305 busienss days if you’re in the state of CO and about 5-8 if
        you’re in the rest of the contiguous US. Please reach us HERE if you
        have any questions. You can find tracking information HERE.
      </p>
      <button>Shop More</button>
      <div className="confirmation-overlay"></div>
    </div>
  );
};

export default Confirmation;
