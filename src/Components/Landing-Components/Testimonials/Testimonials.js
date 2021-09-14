import React from "react";
import SubTestimonial from "./SubTestimonial";
import "./Testimonials.css";
import portrait1 from "../../../assets/portrait1.jpg";
import portrait2 from "../../../assets/portrait2.jpg";
import portrait3 from "../../../assets/portrait3.jpg";

const Testimonials = () => {
  const testimonialIndex = [
    {
      quote:
        "This is the sub text quote 1. This is what I said about the platform.This is the sub text quote. This is what I said about the platform.",
      image: portrait1,
      name: "Alexandria Munch",
    },
    {
      quote:
        "This is the sub text quote 2. This is what I said about the platform.This is the sub text quote. This is what I said about the platform.",
      image: portrait2,
      name: "Bruno Mars",
    },
    {
      quote:
        "This is the sub text quote 3. This is what I said about the platform.This is the sub text quote. This is what I said about the platform.",
      image: portrait3,
      name: "Belcalis Alamanzar",
    },
  ];

  const loadtestimonialQuote = () => {
    const next = testimonialIndex[0];
    return next.quote;
  };
  const loadtestimonialImage = () => {
    const next = testimonialIndex[0];
    return next.image;
  };
  const loadtestimonialName = () => {
    const next = testimonialIndex[0];
    const remove = testimonialIndex.shift();
    testimonialIndex.push(remove);
    return next.name;
  };

  return (
    <div className="testimonial-wrapper">
      {testimonialIndex.map(() => (
        <SubTestimonial
          quote={loadtestimonialQuote()}
          image={loadtestimonialImage()}
          name={loadtestimonialName()}
        />
      ))}
      <div className="testimonial-slide-button-wrapper">
        <div className="testimonial-slide-button active"></div>
        <div className="testimonial-slide-button"></div>
        <div className="testimonial-slide-button"></div>
      </div>
    </div>
  );
};

export default Testimonials;
