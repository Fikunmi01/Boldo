import React from "react";

export const Blog = () => {
  const blogArray = [
    {
      imgSrc: "/assets/Rectangle1.png",
      title: "Pitch termsheet backing validation focus release.",
      authorImg: "/assets/Ellipse5.png",
      author: "Chandler Bing",
    },
    {
      imgSrc: "/assets/Rectangle2.png",
      title:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      authorImg: "/assets/Ellipse6.png",
      author: "Rachel Green",
    },
    {
      imgSrc: "/assets/Rectangle3.png",
      title:
        "Beta prototype sales iPad gen-z marketing network effects value proposition",
      authorImg: "/assets/Ellipse7.png",
      author: "Monica Geller",
    },
  ];
  return (
    <>
      <div>
        <p className="text-center text-lg md:text-xl font-normal mb-2 text-gray">
          Our Blog
        </p>
        <h1 className="md:text-5xl text-xl md:w-2/3 px-3 text-blaack text-center m-auto leading-snug mb-10">
          Value proposition accelerator product management venture
        </h1>

        <div className="md:px-40 px-3 overflow-scroll md:overflow-hidden flex gap-6 mb-10">
          {blogArray.map((item) => {
            return (
              <div className="relative  w-80">
                <img src={item.imgSrc} className="mb-3" alt="" />

                <span className="flex gap-4 mb-4">
                  <p className="font-sans text-base text-darkBlue font-bold">
                    Category
                  </p>
                  <p className="font-normal text-base font-sans text-gray">
                    November 22, 2021
                  </p>
                </span>

                <p className="font-normal text-black text-xl mb-4 h-28 w-64">
                  {item.title}
                </p>

                <span className="flex items-center gap-3">
                  <img src={item.authorImg} alt="" />
                  <p className="text-base font-normal text-black">{item.author}</p>
                </span>
              </div>
            );
          })}
        </div>

        <div className="md:px-40 px-3 text-center py-10 md:py-20">
          <button className="bg-white border-2 font-bold md:text-xl px-3 py-2 text-lg md:px-10 text-darkBlue rounded-full md:py-3">Load more</button>
        </div>
      </div>
    </>
  );
};
