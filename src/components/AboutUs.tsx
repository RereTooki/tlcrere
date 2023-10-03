import React from "react";
import "../App.css";
import circlestuff from "../assets/images/Group 47.svg";
import rect from "../assets/images/Rectangle 9572.png";
import rect2 from "../assets/images/Rectangle 9573.png";

const AboutUs = () => {
  return (
    <>
      <div className="font-clashfont text-[55px] ml-[36.96px] mr-[20.8px] text-dark-black">
        About The label Clan
      </div>
      <div className="relative">
        <div className="absolute right-[28px] bottom-[88px] border-t-[1.4px] w-[32vw] border-black"></div>
      </div>
      <div className="font-roboto leading-[32px] mt-[55.27px] ml-[36px] mr-[37.61px] pb-[24.15px] mb-[93.99px]">
        Great software that allows you to chat from any place at any time
        without any nterruption. Great software that allows you to chat from any
        place at any time without any nterruption.
      </div>
      <div className="flex flex-col items-center">
        <div className="ml-[21vw] h-[280px] w-[320px]">
          <img
            className="grayscale h-[280px] w-[320px]"
            src={rect}
            alt="Arrow icon"
          />
        </div>
        <div className="relative mr-[19vw] bottom-[44px] bg-slate-700 h-[315px] w-[328px]">
          <img
            className="grayscale h-[315px] w-[328px]"
            src={rect2}
            alt="Arrow icon"
          />
        </div>
      </div>
      <div className="">
        <img className="" src={circlestuff} alt="We make your advert better" />
      </div>
      <div className="mt-[110.51px] flex flex-row justify-evenly mb-[76px]">
        <div className="bg-slate-300 h-[315px] w-[238px]"></div>
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
        <div className="absolute mr-[9.2vw] top-[50px] bg-slate-700 h-[303px] w-[395px]"></div>
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
