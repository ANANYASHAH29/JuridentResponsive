import React from "react";
import Circle from "../assets/Vector-1.svg";
import Collar from "../assets/Rectangle(1).png";
import J from "../assets/Vector.svg";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const hrefs = ["#features", "/aboutUs", "#ai", "#help"]; // example targets
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center px-[40px] py-5 bg-white z-50 backdrop-blur-md">
      {/* Logo Section (Auto Spacing) */}
      <div className="flex justify-center items-end gap-0.5 w-[134.75px] h-[52px] flex-shrink-0 cursor-pointer" onClick={() => { navigate("/") }}>
        <div className="relative w-[27.75px] h-[52px]" >
          <img
            src={J}
            alt="J Vector"
            className="absolute bottom-0 left-0 w-[27.75px] h-[30.34px]"
          />
          <img
            src={Circle}
            alt="Circle Vector"
            className="absolute top-0 left-[19.81%] w-[17.48px] h-[17.75px]"
          />
          <img
            src={Collar}
            alt="Overlay"
            className="absolute top-[5.14%] left-[19.15%] w-[17.72px] h-[17.23px]"
          />
        </div>
        <span className="text-[#CB9F47] font-[Work Sans] font-semibold text-[29.22px] leading-[140%] text-center">
          urident
        </span>
      </div>
      {/* Navigation Links (Auto spacing + 20px padding between items) */}
      <ul className="flex-grow flex justify-center items-center gap-10 ">
        {["Why Jurident?", "About Us", "AI Drafting", "Help"].map(
          (item, index) => (
            <li key={index} className="relative px-5">


              <HashLink
                to={hrefs[index]}
                className="text-[#141414] font-['Work Sans'] font-semibold text-[16px] leading-[22.4px] break-words transition-all duration-300 hover:text-[#CB9F47] 
        relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-black 
        after:transition-all after:duration-300 after:transform after:-translate-x-1/2 after:origin-center hover:after:w-full"
              >
                {item}
              </HashLink>
            </li>
          )
        )}
      </ul>

      {/* Buttons Section (Auto Spacing) */}
      <div className="flex flex-shrink-0 gap-[38px]">
        {/* Sign Up Button */}

        
        <button
        onClick={() => window.open("https://jr-portal.vercel.app/", "_blank")}
         className="bg-black text-white px-6 py-2 rounded-2xl font-semibold hover:bg-opacity-30 transition-all duration-700 transform hover:scale-105">
          Explore Jurident
        </button>
        {/* Book a Demo Button with Gradient Border */}
        <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-[#23216E] via-[#D0A95C] to-[#23216E] transition-all duration-700 group hover:bg-gradient-to-r hover:from-[#D0A95C] hover:via-[#23216E] hover:to-[#D0A95C] transform hover:scale-105">
          <button className="bg-white text-gray-900 px-6 py-2 rounded-2xl font-semibold w-full h-full hover:bg-gray-50 transition-all duration-300" onClick={() => { navigate("/demo") }}>
            Book a Demo
          </button>
        </div>
      </div>
    </nav>
  );
}
