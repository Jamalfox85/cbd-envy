import React from "react";
import "./Benefits.css";
import BenefitGroup from "./BenefitGroup";

const Benefits = () => {
  const benefitIndex = [
    {
      icon: <i class="fas fa-cannabis"></i>,
      text: "Cannabis",
    },
    {
      icon: <i class="fas fa-smoking-ban"></i>,
      text: "No Smoking",
    },
    {
      icon: <i class="fas fa-seedling"></i>,
      text: "Plants",
    },
    {
      icon: <i class="fas fa-briefcase-medical"></i>,
      text: "Medical",
    },
  ];

  const loadBenefitIcon = () => {
    const next = benefitIndex[0];
    return next.icon;
  };
  const loadBenefitText = () => {
    const next = benefitIndex[0];
    const remove = benefitIndex.shift();
    benefitIndex.push(remove);
    return next.text;
  };

  return (
    <div className="benefits-wrapper">
      <div className="benefit-group-wrapper">
        {benefitIndex.map(() => (
          <BenefitGroup icon={loadBenefitIcon()} text={loadBenefitText()} />
        ))}
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
