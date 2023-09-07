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
        <ul className="hidden md:flex gap-10 items-center z-40">
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
            navClose Icon
          </p>
        ) : (
          <p className="z-40" onClick={handleNavMenu}>
            navOpen Icon
          </p>
        )}
        {nav && <ul className="z-40 absolute top-16">ffjfjfj</ul>}
      </div>
    </>
  );
};
