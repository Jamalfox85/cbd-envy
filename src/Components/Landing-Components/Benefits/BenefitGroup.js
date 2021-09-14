import React from "react";

function BenefitGroup(props) {
  return (
    <div className="benefit-group">
      <div className="benefit-group-img">{props.icon}</div>
      <div className="benefit-group-text">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default BenefitGroup;
