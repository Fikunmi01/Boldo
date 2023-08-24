import React, { useState } from "react";

export const Swiper = () => {
  const [menu, setMenu] = useState(false);

  const handleToggle = (index) => {
    setMenu(!menu);
  };

  const swiperArray = [
    {
      description:
        "Buyer buzz partner network disruptive non-disclosure agreement business",
      imgSrc: "/assets/Ellipse2.png",
      name: "Albus Dumbledore",
      role: "Manager @ Howarts",
    },
    {
      description:
        "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
      imgSrc: "/assets/Ellipse3.png",
      name: "Severus Snape",
      role: "Manager @ Slytherin",
    },
    {
      description:
        "Release facebook responsive web design business model canvas seed money monetization.",
      imgSrc: "/assets/Ellipse4.png",
      name: "Harry Potter",
      role: "Team Leader @ Gryffindor",
    },
  ];

  const faqArray = [
    {
      title: "We connect our customers with the best?",
      description: "",
    },
    {
      title: "Android research & development rockstar?",
      description: "",
    },
  ];
  return (
    <>
      <div className="bg-darkBlue px-20 py-20 font-sans">
        <div className="px-20 flex justify-between mb-10">
          <h1 className="text-white font-normal text-5xl w-2/3 leading-snug">
            An enterprise template to ramp up your company website
          </h1>

          <div className="flex items-center gap-4">
            <img src="/assets/leftArrow.png" className="w-14" alt="" />
            <img src="/assets/rightArrow.png" className="w-14" alt="" />
          </div>
        </div>

        <div className="px-20 flex justify-center gap-6 font-sans">
          {swiperArray.map((item) => {
            return (
              <>
                <div className="boxShadowTwo bg-white py-10 w-80 rounded-lg px-10">
                  <p className="text-blaack font-normal text-xl h-40 mb-3">
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
              </>
            );
          })}
        </div>
      </div>

      <div className="px-40 py-20">
        <div className="mb-16">
          <img src="/assets/Image52.png" alt="" />
        </div>

        <div className="flex justify-between">
          <div className="w-1/2">
            <h1 className="font-sans leading-normal text-4xl">
              We connect our customers with the best, and help them keep up-and
              stay open
            </h1>
          </div>
          <div className="">
            {faqArray.map((item) => {
              return (
                <>
                  <p className="flex items-center gap-10 mb-5 border-solid pb-4 font-normal text-xl text-blaack border-gray border-b-2 ">
                    {item.title}{" "}
                    <img
                      src="/assets/Group210.png"
                      className={`${
                        menu ? "rotate-180" : "rotate-0"
                      } cursor-pointer`}
                      onClick={handleToggle}
                      alt=""
                    />
                  </p>

                  {menu && <div>Faq opened</div>}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
