import React from "react";

function SubTestimonial(props) {
  return (
    <div className="subTest-wrapper">
      <div className="subTest-icon">
        <i class="fas fa-quote-left"></i>
      </div>
      <div className="subTest-quote">{props.quote}</div>
      <div className="subTest-img">
        <img src={props.image} alt="testimonial portrait" />
      </div>
      <div className="subTest-name">{props.name}</div>
    </div>
  );
}

export default SubTestimonial;
