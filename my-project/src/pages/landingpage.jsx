import React from "react";
import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { Services } from "../components/services";
import { Swiper } from "../components/swiper";

export const LandingPage = () => {
  return (
    <>
      <div className="font-sans">
        <div className="absolute right-0 ">
          <img src="/assets/ellipse.png" className=" " alt="" />
        </div>
        <Navbar />
        <Hero />
        <Services />
        <Swiper/>
      </div>
    </>
  );
};
