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
          <div className="font-clashfont text-[12.4vw] md:text-[6vw] ml-[8.8vw] md:mx-0 mr-[20.8px] text-dark-black">
            About The label Clan
          </div>
          <div className="relative">
            <div className="absolute right-[28px] bottom-[19.6vw] border-t-[1.4px] w-[32vw] md:hidden border-black"></div>
          </div>
          <div className="font-roboto leading-[7.2vw] md:leading-[25px] text-[4.5vw] md:text-[1.6vw] mt-[55.27px] md:mt-[3vw] ml-[8.6vw] mr-[8vw] md:mx-0 md:pb-0 mb-[27.5vw] md:mb-0 text-dark-black">
            Great software that allows you to chat from any place at any time
            without any nterruption. Great software that allows you to chat from
            any place at any time without any nterruption.
          </div>
        </div>
        <div className="flex bg-orangees flex-col items-center md:items-start">
          <div className="md:relative right-[18.5vw] top-[7vw] md:border-t-[1.4px] md:w-[41.5vw] z-10 border-black"></div>
          <div className="z-20">
            <div className="ml-[17.2vw] h-[63.4vw] md:h-[21.8vw] w-[72.5vw] md:w-[34vw]">
              <img
                className="grayscale h-[63.4vw] md:h-[21.8vw] w-[72.5vw] md:w-[34vw]"
                src={rect}
                alt="First rectangle"
              />
            </div>
          </div>

          <div className="md:flex md:flex-row">
            <div className="relative mr-[18vw] ml-[9.9vw] md:mr-0 md:ml-[100px] bottom-[9.9vw] md:top-[4.4vw] bg-slate-700 h-[71.4vw] md:h-[21.8vw] w-[74.3vw] md:w-[24vw] z-30">
              <img
                className="grayscale h-[71.4vw] md:h-[21.8vw] w-[74.3vw] md:w-[24vw]"
                src={rect2}
                alt="Second rectangle"
              />
            </div>
            <div className="relative bottom-[35.8vw] md:bottom-0 msd:bottsom-[24vw] ml-[40vw] mod:ml-[50vw] md:ml-0">
              <img
                src={circlestuff}
                alt="We make your advert better"
                className="md:w-[25.4vw]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row md:ml-[5.6vw] md:mt-[24.4vw] md:mb-[11.1vw]">
        <div className="bg-orangees">
          <div className=" bg-dark-blues relative bottom-[10.8vw] md:bottom-0 flex flex-row justify-evenly md:justify-normal mb-[6.3vw] md:mb-[9.6vw]">
            <div className="bg-slate-300 ml-[6.2vw] md:ml-0 h-[71.4vw] z-10 md:h-[24.8vw] w-[53.9vw] md:w-[34vw]">
              <img
                className="grayscale h-[71.4vw] z-10 md:h-[24.8vw] w-[53.9vw] md:w-[34vw]"
                src={rect3}
                alt="Third pic"
              />
            </div>
            <div className="z-10 md:absolute relative top-[35.7vw] md:left-[34vw] md:top-[2.9vw] border-t-[1.4px] md:w-[32vw] w-[26.3vw] border-black"></div>
          </div>
          <div className="ml-[7.4vw] md:ml-0 mb-[28.7vw] md:mb-[4.4vw]">
            <div className="font-clashfont text-[12.4vw] md:text-[6vw] text-dark-black">
              OUR STORY
            </div>
            <div className="relative border-t-[1.4px] w-[42vw] md:w-[14.9vw] border-black"></div>
          </div>
        </div>
        <div className="bg-light-greyS md:flex md:flex-col-reverse">
          <div className="flex flex-col items-center md:items-end relative md:mb-0">
            <div className="ml-[14vw] md:ml-0 bg-my-greys h-[58.9vw] md:h-[23.6vw] w-[84.8vw] md:w-[49.5vw]"></div>
            <div className="absolute mr-[9.2vw] md:mr-[5.5vw] top-[11.3vw] md:top-[2.6vw] bg-slate-700 h-[68.7vw] md:h-[26.5vw] w-[89.5vw] md:w-[52.3vw]">
              <img
                className="grayscale h-[68.7vw] md:h-[26.5vw] w-[89.5vw] md:w-[52.3vw]"
                src={rect4}
                alt="My 4th rectangle"
              />
            </div>
          </div>
          <div className="md:text-[1.6vw] text-[4.5vw] text-dark-black font-roboto leading-[7.2vw] md:leading-[25px] ml-[6.1vw] md:ml-[8.8vw] mr-[6.1vw] md:mr-[5.6vw] md:mt-[9vw] pb-[24.15px] md:pb-0 mb-[24.9vw] md:mb-[11vw] mt-[38.2vw] ">
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
