import React from "react";
import { HashLink } from "react-router-hash-link";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-white via-[#faf9f6] to-white overflow-hidden">

      {/* Decorative Golden Blob */}
      <div className="absolute top-[-80px] right-[-80px] w-[200px] h-[200px] bg-[#d0a95c]/20 rounded-full blur-[100px] z-0"></div>

      <section className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-24 pt-32 md:pt-48 pb-20 max-w-screen-xl mx-auto">

        {/* Desktop Left Text Content */}
        <div className="hidden md:block w-full md:w-1/2 text-left">
          <h1 className="text-5xl lg:text-6xl font-bold text-[#141414] leading-tight mb-6">
            The Smartest Way <br />
            to Manage Your <br />
            Legal Practice.
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 mt-5 max-w-md leading-relaxed">
            Expand your reach, streamline your workflow, and get paid faster — all in one smart legal tech suite.
          </p>
          <div className="mt-8">
            <button className="bg-[#D0A95C] hover:bg-[#c59745] text-white px-8 py-3 rounded-full text-base font-medium shadow-md transition transform hover:scale-105">
              <HashLink to="#help">Get Started</HashLink>
            </button>
          </div>
        </div>

        {/* Right: Image and Mobile Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center mb-10 md:mb-0">

          {/* Laptop Image – Hover scale on desktop, pulse animation on mobile */}
          <img
            src="/macbookfinal.png"
            alt="Jurident Dashboard"
            className="w-[95%] sm:w-[90%] md:w-[100%] lg:w-[120%] max-w-[850px] drop-shadow-2xl 
              md:transition-transform md:duration-500 md:hover:scale-105 
              block md:block animate-mobile-bounce"
          />

          {/* Mobile: Heading + Paragraph + Button */}
          <div className="block md:hidden mt-6 px-2 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#141414] text-center leading-snug mb-4">
              The Smartest Way <br />
              to Manage Your <br />
              Legal Practice.
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto leading-relaxed mb-6">
              Expand your reach, streamline your workflow, and get paid faster — all in one smart legal tech suite.
            </p>
            <button className="bg-gradient-to-r from-[#D0A95C] to-[#c59745] text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-md mx-auto flex items-center justify-center gap-2 transition duration-300 transform hover:scale-105">
              <HashLink to="#help">Get Started</HashLink>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Tailwind Custom Animation for Mobile Bounce */}
      <style>
        {`
          @media (max-width: 768px) {
            .animate-mobile-bounce {
              animation: bounceScale 2.5s ease-in-out infinite;
            }
          }
          @keyframes bounceScale {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;
