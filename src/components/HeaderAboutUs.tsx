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
      <div className="bg-blacsk w-screen flex flex-row gap-0 mb-[2vw]">
        <div className="relative z-20">
          <div className="absolute top-[30vw] ml-[6.9vw]">
            <div className="flex flex-row w-[84.8vw] justify-between bordesr-2 text-my-greys-4 ml-[1vw]">
              <div className="whitespace-nowrap text-[4.5vw]">We are</div>
              <div className="text-[4.5vw]">Creative</div>
            </div>
            <div className="font-clashfont2 text-white text-[19.2vw] whitespace-nowrap bosrder-2 leading-tight">
              About Us
            </div>
            <div className="font-roboto text-my-greys-3 text-center w-[85.8vw] text-[4.5vw]">
              Great software that allows you to chat from any place at any time
              without any interruption.
            </div>
          </div>
        </div>
        <div className="w-2/6 h-[143vw]">
          <img
            className="grayscale h-[143vw] w-[100%]"
            src={headImg1}
            alt="Heading Image 1"
          />
          <picture className="nsm:basis-0 nsm:grow nsm:shrink drop-shadow-[0_40px_40px_rgba(0,0,0,0.15)]">
            <source
              className=""
              media="(min-width: 600px)"
              srcSet={headImg1dsk}
            />
            <img
              src={headImg1}
              alt=""
              className="pt-[110px]nsm:scale-[1.7] w-[100%]"
            />
          </picture>
        </div>
        <div className="w-2/6 h-[143vw]">
          <img
            className="grayscale h-[143vw] w-[100%]"
            src={headImg2}
            alt="Heading Image 2"
          />
        </div>
        <div className="w-2/6 h-[143.8vw]">
          <img
            className="grayscale h-[143.8vw] w-[100%]"
            src={headImg3}
            alt="Heading Image 3"
          />
        </div>
      </div>
    </>
  );
};

export default HeaderAboutUs;
