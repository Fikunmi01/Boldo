import React, { useState } from "react";

export const Swiper = () => {
  const [menu, setMenu] = useState(false);
  const [menuTwo, setMenuTwo] = useState(false);
  const handleToggle = () => {
    setMenu(!menu);
  };

  const handleFaq = () => {
    setMenuTwo(!menuTwo);
  };

  const swiperArray = [
    {
      id: 1,
      description:
        "Buyer buzz partner network disruptive non-disclosure agreement business",
      imgSrc: "/assets/Ellipse2.png",
      name: "Albus Dumbledore",
      role: "Manager @ Howarts",
    },
    {
      id: 2,
      description:
        "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
      imgSrc: "/assets/Ellipse3.png",
      name: "Severus Snape",
      role: "Manager @ Slytherin",
    },
    {
      id: 3,
      description:
        "Release facebook responsive web design business model canvas seed money monetization.",
      imgSrc: "/assets/Ellipse4.png",
      name: "Harry Potter",
      role: "Team Leader @ Gryffindor",
    },
  ];

  return (
    <>
      <div className="bg-darkBlue px-3 md:px-20 md:py-20 font-sans">
        <div className="md:px-20 flex flex-col md:gap-0 gap-4 md:flex-row justify-between mb-0 md:mb-10">
          <h1 className="text-white font-normal md:text-5xl text-2xl mt-5 md:w-2/3 leading-tight md:leading-snug">
            An enterprise template to ramp up your company website
          </h1>

          <div className="md:flex items-center gap-4 hidden">
            <img src="/assets/leftArrow.png" className="w-14" alt="" />
            <img src="/assets/rightArrow.png" className="w-14" alt="" />
          </div>
        </div>

        <div className="md:px-20 flex md:justify-center md:overflow-hidden noScroll overflow-x-scroll gap-3 py-10 md:gap-6 font-serif">
          {swiperArray.map((item) => {
            return (
              <div
                key={item.id}
                className="boxShadowTwo  md:px-10 rounded-lg md:py-10 py-3 px-3 md:w-80 bg-white h-1/4"
              >
                <div className="w-52">
                  <p className="text-blaack font-normal md:text-xl w-full mb-3 ">
                    "{item.description}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img src={item.imgSrc} alt="" />
                    <div>
                      <p className="text-base font-bold text-darkBlue">
                        {item.name}
                      </p>
                      <p className="text-darkBlue font-normal text-sm">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="md:px-40 px-3 py-10 md:py-20">
        <div className="md:mb-16 mb-5 ">
          <img src="/assets/Image52.png" alt="" />
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2">
            <h1 className="font-sans md:leading-normal leading-snug text-2xl mb-4 md:mb-0 md:text-4xl">
              We connect our customers with the best, and help them keep up-and
              stay open
            </h1>
          </div>
          <div className="font-serif">
            <>
              <div className="border-solid border-gray mb-5 pb-4 border-b-2">
                <p className="flex items-center gap-10  font-normal text-xl text-blaack">
                  We connect our customers with the best?
                  <img
                    src="/assets/Group210.png"
                    className={`${
                      menu ? "rotate-180" : "rotate-0"
                    } cursor-pointer`}
                    onClick={handleToggle}
                    alt=""
                  />
                </p>
                {menu && (
                  <div>Seed round direct mailing non-disclosure agreement</div>
                )}
              </div>

              <div className="border-gray border-b-2 mb-5 pb-4">
                <p className="flex items-center gap-10  border-solid font-normal text-xl text-blaack">
                  Android research & development rockstar?
                  <img
                    src="/assets/Group210.png"
                    className={`${
                      menuTwo ? "rotate-180" : "rotate-0"
                    } cursor-pointer`}
                    onClick={handleFaq}
                    alt=""
                  />
                </p>
                {menuTwo && (
                  <div>Pitch termsheet backing validation focus release.</div>
                )}
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};
