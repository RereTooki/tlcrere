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
        <div className="md:bg-my-greyss md:mt-[11vw]">
          <div
            className="font-clashfont text-[55px] md:text-[6vw] ml-[36.96px] md:mx-0 mr-[20.8px] text-dark-black"
            data-aos="zoom-in-right"
            data-aos-duration="700"
          >
            About The label Clan
          </div>
          <div className="relative">
            <div className="absolute right-[28px] bottom-[88px] border-t-[1.4px] w-[32vw] md:hidden border-black"></div>
          </div>
          <div
            className="font-roboto leading-[32px] md:text-[1.6vw] mt-[55.27px] md:mt-[3vw] ml-[36px] mr-[37.61px] md:mx-0 pb-[24.15px] md:pb-0 mb-[93.99px] md:mb-0 text-dark-black"
            data-aos="zoom-in-right"
            data-aos-duration="700"
          >
            Great software that allows you to chat from any place at any time
            without any nterruption. Great software that allows you to chat from
            any place at any time without any nterruption.
          </div>
        </div>
        <div className="flex md:bg-orangee flex-col items-center md:items-start">
          <div
            className="md:relative right-[18.5vw] top-[7vw] md:border-t-[1.4px] md:w-[41.5vw] z-10 border-black"
            data-aos="zoom-in"
            data-aos-duration="700"
          ></div>
          <div className="z-20">
            <div
              className="ml-[17.2vw] h-[280px] md:h-[21.8vw] w-[320px] md:w-[34vw]"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <img
                className="grayscale h-[280px] md:h-[21.8vw] w-[320px] md:w-[34vw]"
                src={rect}
                alt="Arrow icon"
              />
            </div>
          </div>

          <div className="md:flex md:flex-row">
            <div
              className="relative mr-[18vw] ml-[9.9vw] md:mr-0 md:ml-[100px] bottom-[44px] md:top-[4.4vw] bg-slate-700 h-[315px] md:h-[21.8vw] w-[328px] md:w-[24vw] z-30"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              <img
                className="grayscale h-[315px] md:h-[21.8vw] w-[328px] md:w-[24vw]"
                src={rect2}
                alt="Arrow icon"
              />
            </div>
            <div
              className="relative bottom-[158px] md:bottom-0 msd:bottsom-[24vw] ml-[40vw] md:ml-0"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <img
                src={circlestuff}
                alt="We make your advert better"
                className="md:w-[25.4vw]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row md:ml-[5.6vw] md:mt-[304px] md:mb-[11.1vw]">
        <div className="bg-orangees">
          <div className=" bg-dark-blues relative bottom-[48px] md:bottom-0 flex flex-row justify-evenly md:justify-normal mb-[28px] md:mb-[9.6vw]">
            <div
              className="bg-slate-300 h-[315px] z-10 md:h-[21.8vw] w-[238px] md:w-[34vw]"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              <img
                className="grayscale h-[315px] z-10 md:h-[21.8vw] w-[238px] md:w-[34vw]"
                src={rect3}
                alt="Third pic"
              />
            </div>
            <div
              className="z-10 md:absolute relative top-[157.5px] md:left-[34vw] md:top-[2.9vw] border-t-[1.4px] w-[34vw] border-black"
              data-aos="zoom-in"
              data-aos-duration="700"
            ></div>
          </div>
          <div
            className="ml-[33px] mb-[127px] md:mb-[4.4vw]"
            data-aos="zoom-in-right"
            data-aos-duration="700"
          >
            <div className="font-clashfont text-[55px] md:text-[6vw] text-dark-black">
              OUR STORY
            </div>
            <div className="relative border-t-[1.4px] w-[186px] w-[14.9vw] border-black"></div>
          </div>
        </div>
        <div className="bg-light-greys md:flex md:flex-col-reverse">
          <div className="flex flex-col items-center md:items-end relative mb-[169px] md:mb-0">
            <div
              className="ml-[14vw] md:ml-0 bg-my-greys h-[260px] md:h-[23.6vw] w-[374px] md:w-[49.5vw]"
              data-aos="flip-down"
              data-aos-duration="700"
            ></div>
            <div
              className="absolute mr-[9.2vw] md:mr-[5.5vw] top-[50px] md:top-[2.6vw] bg-slate-700 h-[303px] md:h-[26.5vw] w-[395px] md:w-[52.3vw]"
              data-aos="flip-up"
              data-aos-duration="700"
            >
              <img
                className="grayscale h-[303px] md:h-[26.5vw] w-[395px] md:w-[52.3vw]"
                src={rect4}
                alt="Arrow icon"
              />
            </div>
          </div>
          <div
            className="md:text-[1.6vw] text-dark-black font-roboto leading-[32px] ml-[36px] md:ml-[8.8vw] mr-[37.61px] md:mr-[5.6vw] md:mt-[9vw] pb-[24.15px] md:pb-0 mb-[109.85px] md:mb-[11vw]"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            Great software that allows you to chat from any place at any time
            without any nterruption. Great software that allows you to chat from
            any place at any time without any nterruption.
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
