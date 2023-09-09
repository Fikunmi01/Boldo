import React, { useState } from "react";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNavMenu = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="md:flex px-3 md:px-20 justify-between hidden items-center py-6 bg-darkBlue text-white font-sans">
        <img src="/assets/logo.png" className="w-24 z-40" alt="" />
        <ul className="hidden md:flex gap-10 items-center z-40 font-serif">
          <li>Product</li>
          <li>Services</li>
          <li>About</li>
          <button className="px-10 py-3 bg-white text-darkBlue rounded-full font-bold">
            Log In
          </button>
        </ul>
      </div>

      <div className="md:hidden lg:hidden items-center py-6 bg-darkBlue text-white font-sans px-3 flex justify-between">
        <img src="/assets/logo.png" className="w-24 z-40" alt="" />

        {nav ? (
          <p className="z-40" onClick={handleNavMenu}>
            <i className="uil uil-multiply text-2xl"></i>
          </p>
        ) : (
          <p className="z-40" onClick={handleNavMenu}>
            <i className="text-2xl uil uil-bars"></i>
          </p>
        )}
        {nav && (
          <div className=" absolute z-50 w-76 left-0 right-0 top-16 ">
            <ul className="bg-white py-10 flex gap-y-14 items-center min-h-screen font-black flex-col text-xl font-serif text-darkBlue">
              <li>Product</li>
              <li>Services</li>
              <li>About</li>
              <li>
                <button className="bg-darkBlue text-white px-10 py-2 rounded-3xl">Login</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
