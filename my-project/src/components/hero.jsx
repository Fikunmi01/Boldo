import React from "react";

export const Hero = () => {
  return (
    <div className="bg-darkBlue md:px-20 md:py-10 px-3 text-white font-sans">
      <div className=" md:flex flex flex-col-reverse gap-4 md:flex-row md:items-center md:gap-24 ">
        <div className="md:w-1/2">
          <h1 className="md:text-5xl text-3xl leading-normal">
            Save time by building fast with Boldo Template
          </h1>
          <p className="text-base font-normal leading-relaxed mb-5 md:mb-10">
            Funding handshake buyer business-to-business metrics iPad
            partnership.First mover advantage innovator success deployment
            non-disclosure
          </p>
          <div className="flex gap-3 md:gap-6 mb-5 md:mb-0">
            <button className="bg-green text-darkBlue text-sm px-3 py-1 font-black md:text-xl md:px-7 md:py-3 rounded-full">
              Buy template
            </button>
            <button className="md:text-xl md:px-7 md:py-3 text-sm  px-3 py-1 border-2 border-solid rounded-full font-black">
              Explore
            </button>
          </div>
        </div>
        <div className="md:w-1/2 z-40">
          <img src="/assets/hero.svg" alt="" />
        </div>
      </div>
      <div>
        <img src="/assets/logoWall.png" alt="" />
      </div>
    </div>
  );
};
