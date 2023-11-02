import React from "react";
import "../App.css";
import circlestuff from "../assets/images/Group 47.svg";
import circlestuffmobile from "../assets/images/Group 47 mobile.svg";
import rect from "../assets/images/Rectangle 9572.png";
import rect2 from "../assets/images/Rectangle 9573.png";
import rect3 from "../assets/images/Rectangle 9574.png";
import rect4 from "../assets/images/Rectangle 9575.png";
import rect5 from "../assets/images/Rectangle 9576.png";
import rect6 from "../assets/images/Rectangle 9577.png";
import rect7 from "../assets/images/Rectangle 9578.png";
import rect8 from "../assets/images/Rectangle 9579.png";

const OurVisionTeam = () => {
  return (
    <>
      <div className="md:flex md:flex-row-reverse md:ml-[5.4vw] md:mr-[5.6vw] md:mb-[25vw]">
        <div className="bg-my-greyss mt-[25vw] md:mt-[20vw] md:pl-[8vw]">
          <div className="font-clashfont text-[12.4vw] md:text-[6vw] w-[54.5vw] md:w-[23.5vw] ml-[8.8vw] md:ml-0 text-dark-black leading-normal">
            OUR VISION
          </div>
          <div className="relative">
            <div className="absolute left-[42vw] bottom-[28vw] border-t-[1.4px] w-[50vw] md:hidden border-black"></div>
          </div>
          <div className="font-roboto leading-[7.2vw] md:leading-[2.2vw] text-[5.4vw] md:text-[1.6vw] mt-[8.3vw] font-medium md:mt-[4vw] ml-[8.6vw] mr-[8vw] md:mx-0 md:pb-0 mb-[17vw] md:mb-0 text-dark-black">
            Great software that allows you to chat from any place at any time
            without any interruption. Great software that allows you to chat
            from any place at any time without any interruption.
          </div>
        </div>
        <div className="flex bg-oranges flex-col items-center md:items-start md:mt-[10vw]">
          <div className="md:relative left-[70vw] top-[14vw] md:border-t-[1.4px] md:w-[19vw] border-black"></div>

          <div className="h-[103vw] md:h-[52vw] w-[86vw] md:w-[44.3vw] md:rounded-[1.8vw] z-20 mb-[25.6vw] md:mb-0">
            <img
              className="grayscale h-[103vw] md:h-[52vw] w-[86vw] md:w-[44.3vw] md:rounded-[1.8vw] mb-[25.6vw] md:mb-0"
              src={rect5}
              alt="First rectangle"
            />
          </div>

          <div className="font-roboto md:hidden leading-[7.2vw] text-[5.4vw] font-medium ml-[8.6vw] mr-[8vw]  mb-[25vw] text-dark-black">
            Great software that allows you to chat from any place at any time
            without any interruption.
          </div>
        </div>
      </div>

      <div className="md:flex md:flex-row md:ml-[5.4vw] md:mr-[5.6vw] md:mb-[6vw] md:gap-[8.5vw] bg-dark-blsue">
        <div className="bg-my-greyss">
          <div className="font-clashfont text-[12.4vw] md:text-[6vw] w-[54.5vw] md:w-[23.5vw] ml-[8.8vw] md:ml-0 text-dark-black leading-normal">
            OUR TEAM
          </div>
          <div className="relative">
            <div className="absolute left-[42vw] bottom-[28vw] border-t-[1.4px] w-[50vw] md:hidden border-black"></div>
          </div>
          <div className="font-roboto leading-[7.2vw] md:leading-[2.2vw] text-[5.4vw] md:text-[1.6vw] mt-[8.3vw] font-medium md:mt-[4vw] ml-[8.6vw] mr-[8vw] md:mx-0 md:pb-0 mb-[17vw] md:mb-0 text-dark-black">
            Great software that allows you to chat from any place at any time
            without any interruption. Great software that allows you to chat
            from any place at any time without any interruption.
          </div>
        </div>
        <div className="flex bg-orangese flex-col items-center md:items-start">
          <div className="md:relative right-[28vw] top-[4vw] md:border-t-[1.4px] md:w-[19.5vw] border-black z-30"></div>

          <div className="flex flex-row gap-[4.5vw] md:gap-[2.2vw] mb-[14vw] md:mb-0">
            <div className="flex flex-col gap-[4.5vw] md:gap-[2.2vw]">
              <div className="h-[66vw] md:h-[28vw] w-[39.7vw] md:w-[19.6vw] md:rounded-[1.8vw] z-20 md:mb-0">
                <img
                  className="grayscale h-[66vw] md:h-[28vw] w-[39.7vw] md:w-[19.6vw] md:rounded-[1.8vw] md:mb-0"
                  src={rect8}
                  alt="First rectangle"
                />
              </div>
              <div className="h-[66vw] md:h-[28vw] w-[39.7vw] md:w-[19.6vw] md:rounded-[1.8vw] z-20  md:mb-0">
                <img
                  className="grayscale h-[66vw] md:h-[28vw] w-[39.7vw] md:w-[19.6vw] md:rounded-[1.8vw] mb-[14vw] md:mb-0"
                  src={rect7}
                  alt="First rectangle"
                />
              </div>
            </div>
            <div className="h-[136.5vw] md:h-[58.2vw] w-[41.4vw] md:w-[20.4vw] md:rounded-[1.8vw] z-20 md:mb-0">
              <img
                className="grayscale h-[136.5vw] md:h-[58.2vw] w-[41.4vw] md:w-[20.4vw] md:rounded-[1.8vw]  md:mb-0"
                src={rect6}
                alt="First rectangle"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurVisionTeam;
