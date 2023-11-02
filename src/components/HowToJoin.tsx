import React from "react";
import "../App.css";
import logo1 from "../assets/images/Icon1.svg";
import logo2 from "../assets/images/Icon2.svg";
import logo3 from "../assets/images/Icon3.svg";

const HowToJoin = () => {
  return (
    <>
      <div className="font-clashfont2 mx-[6.8vw] leading-[14.5vw] md:leading-normal text-[9.5vw] md:text-[6vw] text-center text-my-greys-2">
        How can you join?
      </div>
      <div className="font-proxima mx-[6.8vw] md:mx-[12.9vw] text-center text-[4vw] md:text-[1.8vw] leading-[5.8vw] md:leading-[2.8vw] mt-[4.5vw] md:mt-[2.5vw] text-my-greys-2 tracking-wide">
        Like we said earlier, you can join by clicking on the link below. Be
        assisted by the label clan members (a 3 month probation period) but
        let’s explain what you have to do to join!
      </div>
      <div className="font-proxima flex flex-col items-center">
        <div className="md:flex md:flex-row gap-x-[1.59vw]  mx-[6.8vw] md:fle-wrap md:mb-[5.3vw]">
          <div className="rounded-[1.8vw] flex flex-col items-center pt-[14.5vw] md:py-[4.4vw] pb-[11.5vw] bg-oransgee shadow-[0_2px_8px_0_rgba(0,0,0,0.1)] md:shadow-[0_6.5px_26px_0_rgba(0,0,0,0.1)] mt-[28.1vw] md:mt-[7vw]">
            <div className="w-[23.5vw] md:w-[7.2vw] h-[19.9vw] md:h-[6.1vw] mb-[5.4vw] md:mb-[2.6vw]">
              <img
                className="w-[23.5vw] md:w-[7.2vw] h-[19.9vw] md:h-[6.1vw]"
                src={logo1}
                alt="logo 1"
              />
            </div>
            <div className="text-[5.4vw] md:text-[2vw] font-bold leading-[7.2vw] md:leading-[2.2vw] md:mx-[3.3vw] md:mb-[1.6vw] mb-[3.1vw] text-center md:whitespace-nowrap">
              Modern workforce
            </div>
            <div className="text-[4vw] md:text-[1.3vw] text-center leading-[5.8vw] md:leading-[1.95vw] tracking-wider mx-[2vw] font-normal">
              Multistakeholder governance aligns employees with the
              organization’s wider community.
            </div>
          </div>
          <div className="bg-light-sgrey rounded-[1.8vw] flex flex-col items-center pt-[14.5vw] md:py-[4.4vw] pb-[11.5vw] shadow-[0_2px_8px_0_rgba(0,0,0,0.1)] md:shadow-[0_6.5px_26px_0_rgba(0,0,0,0.1)] mt-[28.1vw] md:mt-[7vw]">
            <div className="w-[23.5vw] md:w-[7.2vw] h-[19.9vw] md:h-[6.1vw] mb-[5.4vw] md:mb-[2.6vw]">
              <img
                className="w-[23.5vw] md:w-[7.2vw] h-[19.9vw] md:h-[6.1vw]"
                src={logo2}
                alt="logo 1"
              />
            </div>
            <div className="text-[5.4vw] md:text-[2vw] font-bold leading-[7.2vw] md:leading-[2.2vw] md:mx-[3.3vw] md:mb-[1.6vw] mb-[3.1vw] text-center md:whitespace-nowrap">
              Meritocratic by design
            </div>
            <div className="text-[4vw] md:text-[1.3vw] text-center leading-[5.8vw] md:leading-[1.95vw] tracking-wider mx-[2vw] font-normal">
              Tokenized ownership aligns deeply committed individuals with the
              organization’s success.
            </div>
          </div>
          <div className="bg-mediusm-grey rounded-[1.8vw] flex flex-col items-center pt-[14.5vw] md:py-[4.4vw] pb-[11.5vw] bg-sorangee shadow-[0_2px_8px_0_rgba(0,0,0,0.1)] md:shadow-[0_6.5px_26px_0_rgba(0,0,0,0.1)] my-[28.1vw] md:my-0 md:mt-[7vw]">
            <div className="w-[23.5vw] md:w-[7.2vw] h-[19.9vw] md:h-[6.1vw] mb-[5.4vw] md:mb-[2.6vw]">
              <img
                className="w-[23.5vw] md:w-[7.2vw] h-[19.9vw] md:h-[6.1vw]"
                src={logo3}
                alt="logo 1"
              />
            </div>
            <div className="text-[5.4vw] md:text-[2vw] font-bold leading-[7.2vw] md:leading-[2.2vw] md:mx-[3.3vw] md:mb-[1.6vw] mb-[3.1vw] text-center md:whitespace-nowrap">
              Engineered for resilience
            </div>
            <div className="text-[4vw] md:text-[1.3vw] text-center leading-[5.8vw] md:leading-[1.95vw] tracking-wider mx-[2vw] font-normal">
              Open Enterprise supports best practices in sociocratic management.
            </div>
          </div>
        </div>
        <div className="rounded-[8px] bg-black text-whitee px-[5.4vw] md:px-[1.6vw] py-[4.5vw] md:py-[1.3vw] mb-[32.8vw] md:mb-[14.2vw] mx-[6.8vw] md:text-[1.6vw] text-[4vw]">
          Request early access
        </div>
      </div>
    </>
  );
};

export default HowToJoin;
