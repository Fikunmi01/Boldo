import React from "react";

export const Services = () => {
  const serviceArray = [
    {
      imgSrc: "/assets/service1.png",
      title: "Cool feature title",
      description: "Learning curve network effects return on investment.",
    },
    {
      imgSrc: "/assets/service2.png",
      title: "Even cooler feature",
      description: "Learning curve network effects return on investment.",
    },
    {
      imgSrc: "/assets/service3.png",
      title: "Cool feature title",
      description: "Learning curve network effects return on investment.",
    },
  ];

  const aimsArray = [
    {
      id: 1,
      aim: "We connect our customers with the best.",
      img: "/assets/star.png",
    },
    {
      id: 2,
      aim: "Advisor success customer launch party.",
      img: "/assets/star1.png",
    },
    {
      id: 3,
      aim: "Business-to-consumer long tails.",
      img: "/assets/sun.png",
    },
  ];
  return (
    <>
      <div className="font-sans md:py-10 md:px-20 mt-5">
        <p className="text-center text-lg md:text-xl font-normal mb-2 text-gray">
          Our Services
        </p>
        <h1 className="md:text-5xl text-2xl md:w-2/3 text-blaack text-center px-3 md:px-0 m-auto leading-snug">
          Handshake infographic mass market crowdfunding iteration
        </h1>

        <div className="flex md:flex-row flex-col px-3 py-5 w-full md:px-20 md:py-10">
          {serviceArray.map((item) => {
            return (
              <>
                <div className="">
                  <img src={item.imgSrc} className="pb-1 md:pb-3" alt="" />
                  <h2 className="text-xl md:text-2xl text-blaack font-normal">
                    {item.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray pb-1 md:pb-3">{item.description}</p>

                  <button className="flex mb-5 md:mb-0 items-center md:gap-3 text-darkBlue font-black text-lg md:text-xl">
                    Explore page <img src="/assets/arrow-right.png" alt="" />
                  </button>
                </div>
              </>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row px-3 md:gap-32 font-sans md:px-20 md:pt-20 md:py-20">
          <div className="md:w-1/2">
            <img src="/assets/Group216.png" alt="" />
          </div>
          <div className="md:w-2/3">
            <h2 className="md:text-4xl text-2xl pt-5 text-black leading-snug md:leading-normal mb-5">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h2>
            {aimsArray.map((aim) => {
              return (
                <>
                  <p className="flex items-center gap-3 md:mb-5 mb-3 leading-snug md:leading-relaxed">
                    <img src="/assets/mark.png" alt="" />
                    {aim.aim}
                  </p>
                </>
              );
            })}
            <button className="px-6 py-3 mt-5 md:mt-0 font-black text-white rounded-full bg-darkBlue">
              Start now
            </button>
          </div>
        </div>

        <div className="md:px-20 flex md:gap-32 items-center px-3 py-10 md:flex-row flex-col-reverse">
          <div className="md:w-2/3">
            <h1 className="md:text-4xl text-2xl text-blaack mb-6">
              We connect with our customers with the best, and help them keep
              up-and stay open
            </h1>
            <div>
              {aimsArray.map((aim) => {
                return (
                  <>
                    <div
                      className={`${
                        aim.id === 1 ? "bg-darkBlue text-white" : "bg-white"
                      } flex items-center mb-5 boxShadow gap-3 px-2 py-1 md:py-3 md:px-5 text-blaack font-semibold`}
                    >
                      <img src={aim.img} alt="" />
                      <p className="text-base">{aim.aim}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className="md:w-1/2">
            <img src="/assets/Group281.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
