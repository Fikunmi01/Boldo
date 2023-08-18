import React from "react";

export const Hero = () => {
  return (
    <div className="bg-darkBlue px-20 py-10 text-white font-sans">
      <div className=" flex items-center gap-24 ">
        <div className="w-1/2 ">
          <h1 className="text-5xl leading-normal">
            Save time by building fast with Boldo Template
          </h1>
          <p className="text-base font-normal leading-relaxed mb-10">
            Funding handshake buyer business-to-business metrics iPad
            partnership.First mover advantage innovator success deployment
            non-disclosure
          </p>
          <div className="flex gap-6">
            <button className="bg-green text-darkBlue font-black text-xl px-7 py-3 rounded-full">
              Buy template
            </button>
            <button className="text-xl px-7 py-3 border-2 border-solid rounded-full font-black">
              Explore
            </button>
          </div>
        </div>
        <div className="w-1/2 z-40">
          <img src="/assets/hero.svg" alt="" />
        </div>
      </div>
      <div>
        <img src="/assets/logoWall.png" alt="" />
      </div>
    </div>
  );
};
