import React from "react";
import YoutubeLogo from "../assets/YoutubeLogo.svg";
import TwitterLogo from "../assets/TwitterLogo.svg";
import InstagramLogo from "../assets/InstagramLogo.svg";
import DiscordLogo from "../assets/DiscordLogo.svg";
import JLogoFoot from "../assets/JLogoFoot2.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left Section - Company Info */}
        <div>
          <div className="flex items-center mb-3">
            <img
              src={JLogoFoot}
              alt="Jurident Logo"
              className="w-8 h-8 object-contain"
            />
            <h2 className="text-[#CB9F47] text-xl font-bold ml-2">Jurident</h2>
          </div>
          <p className="text-sm leading-6">
            Valsco Technology <br />
            J-3 Shatabdi Enclave <br />
            Noida-201301, Uttar Pradesh
          </p>
          <p className="mt-3 text-sm">connect@valscotech.com</p>
          <p className="mt-4 text-sm font-semibold">Join our community</p>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={DiscordLogo} alt="Discord" className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={YoutubeLogo} alt="YouTube" className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={TwitterLogo} alt="Twitter" className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={InstagramLogo} alt="Instagram" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Middle Section - Use Cases */}
        <div>
          <h2 className="text-white text-lg font-bold mb-3">Use Cases</h2>
          <ul className="space-y-2 text-sm">
            <li>Case management</li>
            <li>Legal-Research & Assistance</li>
          </ul>
        </div>

        {/* Right Section - Company Links */}
        <div>
          <h2 className="text-white text-lg font-bold mb-3">Company</h2>
          <ul className="space-y-2 text-sm">
            <li> <a href="https://www.valscotech.com/" target="_Blank">aboutUs</a> </li>
            <li>Careers</li>
            <li>FAQs</li>
            <li><a href="https://www.valscotech.com/" target="_Blank">Teams</a> </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 border-t border-gray-600 pt-4 text-left text-sm">
        © 2025, Valsco Technology. All Rights Reserved
      </div>
    </footer>
  );
}
