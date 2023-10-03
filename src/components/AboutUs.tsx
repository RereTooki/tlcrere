import React from "react";
import "../App.css";
import circlestuff from "../assets/images/Group 47.svg";
import circlestuffmobile from "../assets/images/Group 47 mobile.svg";
import rect from "../assets/images/Rectangle 9572.png";
import rect2 from "../assets/images/Rectangle 9573.png";
import rect3 from "../assets/images/Rectangle 9574.png";
import rect4 from "../assets/images/Rectangle 9575.png";

const AboutUs = () => {
  return (
    <>
      <div className="md:flex md:flex-row md:ml-[5.4vw] md:mr-[5.6vw]">
        <div className="md:bg-my-greys md:mt-[11vw]">
          <div className="font-clashfont text-[55px] md:text-[46px] ml-[36.96px] md:mx-0 mr-[20.8px] text-dark-black">
            About The label Clan
          </div>
          <div className="relative">
            <div className="absolute right-[28px] bottom-[88px] border-t-[1.4px] w-[32vw] md:hidden border-black"></div>
          </div>
          <div className="font-roboto leading-[32px] mt-[55.27px] ml-[36px] mr-[37.61px] md:mx-0 pb-[24.15px] mb-[93.99px]">
            Great software that allows you to chat from any place at any time
            without any nterruption. Great software that allows you to chat from
            any place at any time without any nterruption.
          </div>
        </div>
        <div className="flex md:bg-orangee flex-col items-center md:items-start">
          <div className="md:relative right-[18vw] top-[7vw] md:border-t-[1.4px] md:w-[39vw] z-10 border-black"></div>
          <div className="z-20">
            <div className="ml-[17.2vw] h-[280px] md:h-[21.8vw] w-[320px] md:w-[34vw]">
              <img
                className="grayscale h-[280px] md:h-[21.8vw] w-[320px] md:w-[34vw]"
                src={rect}
                alt="Arrow icon"
              />
            </div>
          </div>
          <div className="relative mr-[18vw] bottom-[44px] md:top-[4.4vw] bg-slate-700 h-[315px] md:h-[21.8vw] w-[328px] md:w-[24vw] z-30">
            <img
              className="grayscale h-[315px] md:h-[21.8vw] w-[328px] md:w-[24vw]"
              src={rect2}
              alt="Arrow icon"
            />
          </div>
          <div className="relative bottom-[158px] md:bottom-0 ml-[40vw]">
            <picture className="">
              <source
                className=""
                media="(min-width: 775px)"
                srcSet={circlestuff}
              />
              <img
                src={circlestuffmobile}
                alt="We make your advert better"
                className=""
              />
            </picture>
          </div>
        </div>
      </div>
      <div className="mt-[110.5s1px] relative bottom-[48px] flex flex-row justify-evenly mb-[28px]">
        <div className="bg-slate-300 h-[315px] w-[238px]">
          <img
            className="grayscale h-[315px] w-[238px]"
            src={rect3}
            alt="Arrow icon"
          />
        </div>
        <div className="relative top-[157.5px] border-t-[1.4px] w-[26vw] border-black"></div>
      </div>
      <div className="ml-[33px] mb-[127px]">
        <div className="font-clashfont text-[55px] text-dark-black">
          OUR STORY
        </div>
        <div className="relative top-[s157.5px] border-t-[1.4px] w-[186px] border-black"></div>
      </div>
      <div className="flex flex-col items-center relative mb-[169px]">
        <div className="ml-[14vw] bg-my-greys h-[260px] w-[374px]"></div>
        <div className="absolute mr-[9.2vw] top-[50px] bg-slate-700 h-[303px] w-[395px]">
          <img
            className="grayscale h-[303px] w-[395px]"
            src={rect4}
            alt="Arrow icon"
          />
        </div>
      </div>
      <div className="font-roboto leading-[32px] ml-[36px] mr-[37.61px] mt-[76psx] pb-[24.15px] mb-[109.85px]">
        Great software that allows you to chat from any place at any time
        without any nterruption. Great software that allows you to chat from any
        place at any time without any nterruption.
      </div>
    </>
  );
};

export default AboutUs;
