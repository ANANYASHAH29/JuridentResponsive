import React, { useState, useEffect } from "react";
import Circle from "../assets/Vector-1.svg";
import Collar from "../assets/Rectangle(1).png";
import J from "../assets/Vector.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Navbar height (adjust if your navbar height changes)
  const NAVBAR_HEIGHT = 80;

  // Smooth scroll to section with offset
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - NAVBAR_HEIGHT;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavigation = (path, sectionId = null) => {
    if (sectionId) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(sectionId), 150); // Wait for navigation
      } else {
        scrollToSection(sectionId);
      }
    } else {
      navigate(path);
    }
    setIsOpen(false); // Close mobile menu
  };

  const navItems = [
    { name: "Why Jurident?", path: "/", sectionId: "features" },
    { name: "About Us", path: "/aboutUs" },
    { name: "AI Drafting", path: "/aiDrafting" },
    { name: "Help", path: "/", sectionId: "help" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 py-4 bg-white z-50 shadow-sm">
        {/* Logo */}
        <div
          className="flex justify-center items-end gap-0.5 w-[120px] sm:w-[134.75px] h-[45px] sm:h-[52px] flex-shrink-0 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="relative w-[24px] sm:w-[27.75px] h-[45px] sm:h-[52px]">
            <img src={J} alt="J Vector" className="absolute bottom-0 left-0 w-[24px] sm:w-[27.75px] h-[26px] sm:h-[30.34px]" />
            <img src={Circle} alt="Circle Vector" className="absolute top-0 left-[19.81%] w-[15px] sm:w-[17.48px] h-[15px] sm:h-[17.75px]" />
            <img src={Collar} alt="Overlay" className="absolute top-[5.14%] left-[19.15%] w-[15px] sm:w-[17.72px] h-[14.5px] sm:h-[17.23px]" />
          </div>
          <span className="text-[#CB9F47] font-[Work Sans] font-semibold text-[24px] sm:text-[29.22px] leading-[140%] text-center">
            urident
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-grow justify-center items-center gap-8 lg:gap-10">
          {navItems.map((item, index) => (
            <li key={index} className="relative px-3 lg:px-5">
              <button
                onClick={() => handleNavigation(item.path, item.sectionId)}
                className={`text-[#141414] font-['Work Sans'] font-semibold text-[16px] lg:text-[18px] xl:text-[20px] transition-all duration-300 hover:text-[#CB9F47]
                relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-black 
                after:transition-all after:duration-300 after:transform after:-translate-x-1/2 after:origin-center hover:after:w-full
                `}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3 lg:gap-4">
          <button
            onClick={() => window.open("https://jr-portal.vercel.app/", "_blank")}
            className="bg-black text-white px-4 lg:px-6 py-2 rounded-2xl font-semibold text-sm lg:text-base hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Explore Jurident
          </button>
          <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-[#23216E] via-[#D0A95C] to-[#23216E] transition-all duration-300 group hover:from-[#D0A95C] hover:via-[#23216E] hover:to-[#D0A95C] transform hover:scale-105">
            <button
              className="bg-white text-gray-900 px-4 lg:px-6 py-2 rounded-2xl font-semibold text-sm lg:text-base w-full h-full hover:bg-gray-50 transition"
              onClick={() => navigate("/demo")}
            >
              Book a Demo
            </button>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsOpen(!isOpen)} className="p-1">
            {isOpen ? <HiOutlineX className="w-6 h-6 text-gray-700" /> : <HiOutlineMenu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-[80px] left-0 w-full bg-white z-40 shadow-2xl border-t border-gray-200 animate-slideDown">
          <div className="px-6 py-4">
            <ul className="flex flex-col gap-1 font-['Work Sans']">
              {navItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(item.path, item.sectionId)}
                    className={`text-center font-medium text-[19px] py-2 px-4 rounded-lg transition-all duration-200 w-full hover:text-[#CB9F47] hover:bg-gray-50`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-3 items-center">
              <button
                onClick={() => {
                  window.open("https://jr-portal.vercel.app/", "_blank");
                  setIsOpen(false);
                }}
                className="bg-black text-white font-semibold text-[14px] py-2.5 px-6 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all duration-300 transform active:scale-[0.98] w-3/5"
              >
                Explore Jurident
              </button>

              <div className="relative p-[2px] rounded-full bg-gradient-to-r from-[#23216E] via-[#D0A95C] to-[#23216E] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] w-3/5">
                <button
                  onClick={() => {
                    navigate("/demo");
                    setIsOpen(false);
                  }}
                  className="bg-white text-[#23216E] font-semibold text-[14px] py-2.5 px-6 rounded-full w-full h-full hover:bg-gray-50 transition-all duration-300"
                >
                  Book Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Smooth slide down animation */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
