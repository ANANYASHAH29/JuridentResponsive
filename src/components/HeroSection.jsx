import React from "react";

const HeroSection = () => {
  return (
    <div className="relative group">
      <section className="flex flex-col md:flex-row items-center justify-center px-8 md:px-16 lg:px-24 py-8 md:py-16 mx-auto relative">
        {/* Left Side - Text Content (Moves Left when hovering over Laptop) */}
        <div className="max-w-lg ml-10 mt-5 md:mt-10 transition-all duration-500 ease-out group-hover:-translate-x-7">
          <h1 className="text-4xl md:text-5xl font-bold text-[#141414] leading-tight">
            The Smartest Way <br /> To Manage Your <br /> Legal Practice.
          </h1>
          <p className="text-[#141414] text-lg mt-4">
            Expand Your Reach, Streamline Your Workflow, Get Paid Faster.
          </p>
          {/* Button (Only Animates When Hovering Over It) */}
          <button className="mt-6 bg-[#D0A95C] text-white px-10 py-3 w-44 rounded-3xl text-lg font-semibold transition-all duration-300 relative overflow-hidden group/button">
            <span className="relative inline-block transition-all duration-300 ease-out group-hover/button:-translate-y-1 group-hover/button:scale-105">
              Get Started
            </span>
            <span className="absolute left-1/2 bottom-0 w-0 h-2 bg-black/60 rounded-b-2xl transition-all duration-300 ease-out group-hover/button:w-full group-hover/button:left-0"></span>
          </button>
        </div>

        {/* Right Side - Image (Triggers Left Section Movement on Hover) */}
        <div className="mt-8 md:mt-5 md:w-1/2 flex justify-center mr-10 transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-x-5">
          <img
            src="/macbookfinal.png"
            alt="Laptop with Jurident Dashboard"
            className="w-full max-w-2xl"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
