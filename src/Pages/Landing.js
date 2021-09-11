import React from "react";
import Benefits from "../Components/Landing-Components/Benefits/Benefits";
import Featured from "../Components/Landing-Components/Featured/Featured";
import Hero from "../Components/Landing-Components/Hero/Hero";
import ShopNow from "../Components/Landing-Components/ShopNow/ShopNow";
import Testimonials from "../Components/Landing-Components/Testimonials/Testimonials";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <Featured />
      <Testimonials />
      <ShopNow />
    </div>
  );
};

export default Landing;
