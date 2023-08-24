import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="px-20">
        <div className="text-center bg-darkBlue relative h-96 flex items-center flex-col rounded-xl justify-center">
          <img src="/assets/ellipse.png" className="absolute top-0 right-0 rounded-xl" alt="" />
          <h1 className="text-white z-40 text-5xl font-sans font-normal w-2/3 leading-snug mb-10">An enterprise template to ramp up your company website</h1>
          <span className="flex gap-4">
            <input type="text" className="w-96 px-6 text-blaack placeholder:text-black text-xl font-normal py-3 rounded-full" placeholder="Your email address" />
            <button className="bg-green px-6 text-darkBlue font-bold text-xl rounded-full">Start now</button>
          </span>
        </div>

        <div className="flex gap-20 pb-20 mt-20 items-center font-sans">
          <div className="flex flex-col gap-y-6">
            <img src="/assets/Logo2.png" className="w-1/2 mb-4" alt="" />
            <p className="text-base text-gray">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>

            <p className="text-gray font-normal text-base">All rights reserved.</p>
          </div>

          <div className="w-2/4 flex flex-col gap-y-6">
            <h2 className="font-sans text-xl font-bold text-blaack">Landings</h2>
            <p className="text-gray font-normal text-xl">Home</p>
            <p className="text-gray font-normal text-xl">Products</p>
            <p className="text-gray font-normal text-xl">Services</p>
          </div>

          <div className="w-2/4 flex flex-col gap-y-6">
            <h2 className="font-sans text-xl font-bold text-blaack">Company</h2>
            <p className="text-gray font-normal text-xl">Home</p>
            <p className="text-gray font-normal text-xl flex gap-4 items-center">
              Careers <span className="px-3 bg-green rounded-full text-darkBlue text-sm">Hiring!</span>
            </p>
            <p className="text-gray font-normal text-xl">Services</p>
          </div>

          <div className="w-2/4 flex flex-col gap-y-6">
            <h2 className="font-sans text-xl font-bold text-blaack">Resources</h2>
            <p className="text-gray font-normal text-xl">Blog</p>
            <p className="text-gray font-normal text-xl">Products</p>
            <p className="text-gray font-normal text-xl">Services</p>
          </div>
        </div>
      </div>
    </>
  );
};
