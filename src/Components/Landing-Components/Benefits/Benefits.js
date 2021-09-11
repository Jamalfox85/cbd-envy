import React from "react";
import "./Benefits.css";
import BenefitGroup from "./BenefitGroup";

const Benefits = () => {
  return (
    <div className="benefits-wrapper">
      <div className="benefit-group-wrapper">
        <BenefitGroup />
        <BenefitGroup />
        <BenefitGroup />
        <BenefitGroup />
      </div>
      <div className="benefit-slide-button-wrapper">
        <div className="benefit-slide-button active"></div>
        <div className="benefit-slide-button"></div>
        <div className="benefit-slide-button"></div>
      </div>
    </div>
  );
};

export default Benefits;
