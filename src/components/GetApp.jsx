import React from "react";
import phoneImage from "../assets/newScreen.png";
import googleLogo from "../assets/googlelogo.png";
import { FaApple } from "react-icons/fa";

const GetApp = () => {
  return (
  <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 gap-12 md:gap-45
lg:px-24 py-12 md:py-20 mx-auto bg-gradient-to-b from-[#FFFFFF] to-[#EAE7FF]">
    
    {/* Phone Image (left on desktop) */}
    <div className="md:w-1/2 flex justify-center md:justify-end mr-0 md:mr-8 mb-6 md:mb-0">
      <img
        src={phoneImage}
        alt="Jurident Mobile App"
        className="w-[140px] md:w-[200px] lg:w-[240px] hover:scale-105 duration-300"
      />
    </div>

    {/* Text + Buttons (right on desktop) */}
    <div className="md:w-1/2 text-center md:text-left md:ml-0">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-[50px] leading-tight md:leading-[65px] font-semibold text-[#141414] font-['Work_Sans']">
        Your Legal Partner, <br /> Anytime, Anywhere.
      </h2>

      {/* Subheading */}
      <p className="text-lg sm:text-xl md:text-[28px] md:leading-[38px] mt-4 font-medium text-[#141414] font-['Work_Sans'] capitalize">
        Download Jurident Now!
      </p>

      {/* Store Buttons */}
      <div className="flex justify-center md:justify-start gap-4 md:gap-6 mt-6 flex-wrap">
        {/* App Store */}
        <a
          href="https://apps.apple.com/in/app/jurident/id6475091173"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-5 py-2.5 bg-white rounded-[18px] shadow-md hover:shadow-lg transition-all"
        >
          <FaApple className="text-black w-6 h-6 md:w-[30px] md:h-[32px]" />
          <span className="text-sm md:text-[22px] font-medium font-['Poppins'] text-black">
            App Store
          </span>
        </a>

        {/* Play Store */}
        <a
          href="https://play.google.com/store/apps/details?id=com.jurident.valsco&pli=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-5 py-2.5 bg-white rounded-[18px] shadow-md hover:shadow-lg transition-all"
        >
          <img
            src={googleLogo}
            alt="Google Play Logo"
            className="w-6 h-6 md:w-[30px] md:h-[32px]"
          />
          <span className="text-sm md:text-[22px] font-medium font-['Poppins'] text-black">
            Play Store
          </span>
        </a>
      </div>
    </div>
  </section>
);

};

export default GetApp;
