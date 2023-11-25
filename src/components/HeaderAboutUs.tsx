import React from "react";
import "../App.css";
import headImg1 from "../assets/images/Header1AboutUsMob.png";
import headImg1dsk from "../assets/images/Header1AboutUsDsk.png";
import headImg2 from "../assets/images/Header2AboutUsMob.png";
import headImg2dsk from "../assets/images/Header2AboutUsDsk.png";
import headImg3 from "../assets/images/Header3AboutUsMob.png";
import headImg3dsk from "../assets/images/Header3AboutUsDsk.png";

const HeaderAboutUs = () => {
  return (
    <>
      <div className="h-[143.8vw] md:h-[58.2vw] w-screen flex flex-row gap-0 mb-[2vw] select-none">
        <div className="relative z-20">
          <div className="absolute top-[35vw] md:top-[16vw] ml-[6.9vw] md:ml-[25vw]">
            <div className="flex flex-row md:w-[50vw]  justify-between text-my-greys-4 md:text-white ">
              <div className="whitespace-nowrap text-[4.5vw] md:text-[2.2vw]">
                We are
              </div>
              <div className="text-[4.5vw] md:text-[2.2vw]">Creative</div>
            </div>
            <div className="font-clashfont2 text-white text-[19.2vw] md:text-[8.8vw] whitespace-nowrap  leading-tight md:ml-[4.8vw]">
              About Us
            </div>
            <div className="font-roboto text-my-greys-3 text-center w-[85.8vw] md:w-[39vw] text-[4.5vw] md:text-[1.8vw] md:ml-[4.5vw]">
              Great software that allows you to chat from any place at any time
              without any interruption.
            </div>
          </div>
        </div>
        <div className="w-2/6 h-[143vw]">
          <picture className="">
            <source
              className=""
              media="(min-width: 600px)"
              srcSet={headImg1dsk}
            />
            <img
              src={headImg1}
              alt="Heading Image 1"
              className="grayscale h-[143vw] w-[100%] md:h-[57.7vw]"
            />
          </picture>
        </div>
        <div className="w-2/6 h-[143vw]">
          <picture className="">
            <source
              className=""
              media="(min-width: 600px)"
              srcSet={headImg2dsk}
            />
            <img
              src={headImg2}
              alt="Heading Image 2"
              className="grayscale h-[143vw] w-[100%] md:h-[57.7vw]"
            />
          </picture>
        </div>
        <div className="w-2/6 h-[143.8vw]">
          <picture className="">
            <source
              className=""
              media="(min-width: 600px)"
              srcSet={headImg3dsk}
            />
            <img
              src={headImg3}
              alt="Heading Image 3"
              className="grayscale h-[143.8vw] w-[100%] md:h-[58.1vw]"
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default HeaderAboutUs;
