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
      <div className="font-sans py-10 px-20">
        <p className="text-center text-xl font-normal mb-2 text-gray">
          Our Services
        </p>
        <h1 className="text-5xl w-2/3 text-blaack text-center m-auto leading-snug">
          Handshake infographic mass market crowdfunding iteration
        </h1>

        <div className="flex w-full px-20 py-10">
          {serviceArray.map((item) => {
            return (
              <>
                <div className="">
                  <img src={item.imgSrc} className="pb-3" alt="" />
                  <h2 className="text-2xl text-blaack font-normal">
                    {item.title}
                  </h2>
                  <p className="text-xl text-gray pb-3">{item.description}</p>

                  <button className="flex items-center gap-3 text-darkBlue font-black text-xl">
                    Explore page <img src="/assets/arrow-right.png" alt="" />
                  </button>
                </div>
              </>
            );
          })}
        </div>

        <div className="flex gap-32 font-sans px-20 pt-20 py-20">
          <div className="w-1/2">
            <img src="/assets/Group216.png" alt="" />
          </div>
          <div className="w-2/3">
            <h2 className="text-4xl pt-5 text-black mb-5 leading-normal mb-5">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h2>
            {aimsArray.map((aim) => {
              return (
                <>
                  <p className="flex items-center gap-3 mb-5 leading-relaxed">
                    <img src="/assets/mark.png" alt="" />
                    {aim.aim}
                  </p>
                </>
              );
            })}
            <button className="px-6 py-3 font-black text-white rounded-full bg-darkBlue">
              Start now
            </button>
          </div>
        </div>

        <div className="px-20 flex gap-32 items-center py-10">
          <div className="w-2/3">
            <h1 className="text-4xl text-blaack mb-6">
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
                      } flex items-center mb-5 boxShadow gap-3 py-3 px-5 text-blaack font-semibold`}
                    >
                      <img src={aim.img} alt="" />
                      <p className="text-base">{aim.aim}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className="w-1/2">
            <img src="/assets/Group281.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
