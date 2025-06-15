import React from "react";
import phoneImage from "../assets/newScreen.png";
import googleLogo from "../assets/googlelogo.png";
import { FaApple } from "react-icons/fa";

const GetApp = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 py-12 md:py-20 mx-auto bg-gradient-to-b from-[#FFFFFF] to-[#EAE7FF]">
      {/* Left Side - Phone Image */}
      <div className="md:w-1/2 flex justify-center mr-4">
        {" "}
        {/* Shifted left slightly */}
        <img
          src={phoneImage}
          alt="Jurident Mobile App"
          className="w-[140px] md:w-[190px] lg:w-[240px] hover:scale-105 duration-300"
        />
      </div>

      {/* Right Side - Text & Buttons */}
      <div className="md:w-1/2 text-center md:ml-0">
        {" "}
        {/* Reduced gap */}
        {/* Heading */}
        <h2
          className="text-[#141414] capitalize"
          style={{
            fontSize: "50px",
            fontFamily: "'Work Sans', sans-serif",
            fontWeight: 600,
            lineHeight: "65px",
            wordWrap: "break-word",
          }}
        >
          Your Legal Partner, <br /> Anytime, Anywhere.
        </h2>
        {/* Paragraph */}
        <p
          className="text-[#141414] capitalize mt-4" // Reduced margin here
          style={{
            fontSize: "28px",
            fontFamily: "'Work Sans', sans-serif",
            fontWeight: 500,
            lineHeight: "38px",
            wordWrap: "break-word",
          }}
        >
          Download Jurident Now!
        </p>
        {/* Download Buttons */}
        <div className="flex justify-center gap-6 mt-6">
          {" "}
          {/* Reduced gap */}
          {/* App Store Button */}
          <a
            href="https://apps.apple.com/in/app/jurident/id6475091173"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-white rounded-[18px] shadow-[0px_3px_6px_#D0C8FF] hover:shadow-lg transition-all"
            style={{
              paddingLeft: 18,
              paddingRight: 18,
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 18,
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              display: "inline-flex",
              boxShadow: "0px 3px 6px #D0C8FF",
            }}
          >
            <FaApple
              className="text-black"
              style={{ width: 30, height: 32, position: "relative" }}
            />
            <span
              className="text-black"
              style={{
                fontSize: 22,
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                textAlign: "center",
                position: "relative",
                wordWrap: "break-word",
              }}
            >
              App Store
            </span>
          </a>
          {/* Play Store Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.jurident.valsco&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-white rounded-[18px] shadow-[0px_3px_6px_#D0C8FF] hover:shadow-lg transition-all"
            style={{
              paddingLeft: 18,
              paddingRight: 18,
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 18,
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              display: "inline-flex",
              boxShadow: "0px 3px 6px #D0C8FF",
            }}
          >
            <img
              src={googleLogo}
              alt="Google Play Logo"
              style={{ width: 30, height: 32, position: "relative" }}
            />
            <span
              className="text-black"
              style={{
                fontSize: 22,
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                textAlign: "center",
                position: "relative",
                wordWrap: "break-word",
              }}
            >
              Play Store
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
