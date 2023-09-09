import React from "react";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div className="md:px-20 px-3">
        <div className="text-center bg-darkBlue relative md:h-96 flex items-center flex-col rounded-xl justify-center">
          <img
            src="/assets/ellipse.png"
            className="absolute top-0 right-0 rounded-xl"
            alt=""
          />
          <h1 className="text-white z-40 md:text-5xl text-2xl font-sans font-normal md:w-2/3 leading-tight pt-5 md:pt-0 md:leading-snug mb-10">
            An enterprise template to ramp up your company website
          </h1>
          <span className="flex pb-6 px-3 md:gap-4 gap-2 font-serif z-40">
            <input
              type="text"
              className="md:w-96 md:px-6 w-40 text-blaack placeholder:text-black md:text-xl px-3 rounded-xl h-10 md:h-full font-normal md:py-3 md:rounded-full outline-none"
              placeholder="Your email address"
            />
            <button className="bg-green md:px-6 text-darkBlue font-bold md:text-xl rounded-xl px-3 md:rounded-full">
              Start now
            </button>
          </span>
        </div>

        <div className="flex md:flex-row flex-col-reverse gap-5 md:gap-20 md:pb-20 mt-10 pb-10 md:mt-20 md:items-center font-serif">
          <div className="flex flex-col gap-y-6">
            <img src="/assets/Logo2.png" className="w-1/2 md:mb-4" alt="" />
            <p className="text-base text-gray">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>

            <p className="text-gray font-normal text-base">
              <span>&#169;,</span> All rights reserved. {year}
            </p>
          </div>

          <div className="md:w-2/4 w-full font-serif flex flex-col gap-y-2 md:gap-y-6">
            <h2 className="font-serif text-xl font-bold text-blaack">
              Landings
            </h2>
            <p className="text-gray font-normal text-xl">Home</p>
            <p className="text-gray font-normal text-xl">Products</p>
            <p className="text-gray font-normal text-xl">Services</p>
          </div>

          <div className="w-2/4 flex font-serif flex-col gap-y-2 md:gap-y-6">
            <h2 className="font-serif text-xl font-bold text-blaack">Company</h2>
            <p className="text-gray font-normal text-xl">Home</p>
            <p className="text-gray font-normal text-xl flex gap-4 items-center">
              Careers{" "}
              <span className="px-3 bg-green rounded-full text-darkBlue text-sm">
                Hiring!
              </span>
            </p>
            <p className="text-gray font-normal text-xl">Services</p>
          </div>

          <div className="w-2/4 flex flex-col font-serif gap-y-2 md:gap-y-6">
            <h2 className="font-serif text-xl font-bold text-blaack">
              Resources
            </h2>
            <p className="text-gray font-normal text-xl">Blog</p>
            <p className="text-gray font-normal text-xl">Products</p>
            <p className="text-gray font-normal text-xl">Services</p>
          </div>
        </div>
      </div>
    </>
  );
};
