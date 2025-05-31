import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const features = [
  {
    title: "AI Legal - Drafting",
    description:
      "Jurident Provides You With Exclusive Access To The Al-Powered Legal Drafting,Which Assists In Generating Accurate Contracts, Petitions, And Legal Documents In Seconds.",
    image: "/legal.png",
    gradient:
      "linear-gradient(to right, rgba(255, 77, 0, 0.2), rgba(255, 120, 62, 0.05))",
    textColor: "text-[#4A1900]",
    imgClass: "w-[364px] h-[240px] object-cover rounded-xl", // Rounded corners
  },
  {
    title: "Case Management",
    description:
      "Easily Organize, Track, And Update Case Details, Deadlines, And Court Dates In One Place.",
    image: "/casemanage.png",
    gradient:
      "linear-gradient(to left, rgba(39, 15, 194, 0.2), rgba(167, 153, 255, 0.05))",
    textColor: "text-[#271C72]",
    imgClass: "w-[364px] h-[240px]", // No rounded corners
  },
  {
    title: "Secure Communication",
    description:
      "Ensure Confidential And Encrypted Communication Between Lawyers, Clients, And Law Students.",
    image: "/secure.png",
    gradient:
      "linear-gradient(to right, rgba(195, 217, 255, 0.8), rgba(215, 230, 255, 0.5))",
    textColor: "text-[#00215F]",
    imgClass: "w-[364px] h-[240px] object-cover rounded-xl", // Rounded corners
  },
  {
    title: "Doc's Together",
    description:
      "Upload, Share, And Store Legal Documents Securely, Ensuring Easy Access And Organization.",
    image: "/docs2.png",
    gradient:
      "linear-gradient(to left, rgba(55, 255, 55, 0.2), rgba(116, 255, 116, 0.05))",
    textColor: "text-[#323C32]",
    imgClass:
      "w-[364px] h-[240px] object-cover rounded-2xl border border-gray-300", // Keeps existing rounded-2xl
  },
  {
    title: "Lawyer-Client Matching",
    description:
      "Clients Can Find And Connect With The Right Lawyer Based On Expertise, Availability, And Legal Needs.",
    image: "/Home.png",
    gradient:
      "linear-gradient(to right, rgba(0, 86, 179, 0.2), rgba(0, 120, 255, 0.05))",
    textColor: "text-[#001833]",
    imgClass: "w-[340px] h-[220px] object-cover rounded-xl", // Rounded corners
  },
  {
    title: "Team Assistance",
    description:
      "Allows Lawyers And Advocates To Work Collaboratively On Cases By Case Sharing Feature.",
    image: "/assistance.png",
    gradient:
      "linear-gradient(to left, rgba(0, 177, 177, 0.2), rgba(0, 255, 255, 0.05))",
    textColor: "text-[#002828]",
    imgClass: "w-[340px] h-[220px] object-cover rounded-xl", // Rounded corners
  },
  {
    title: "Internship for Law Students",
    description:
      "Law Students Get Internships, Helping Them To Build Their Experience.",
    image: "/internship.png",
    gradient:
      "linear-gradient(to right, rgba(255, 165, 0, 0.2), rgba(205, 153, 56, 0.05))",
    textColor: "text-[#574119]",
    imgClass: "w-[364px] h-[240px] object-contain rounded-xl", // Rounded corners
  },
];

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quad",
      once: true,
      offset: 100,
      disable: window.innerWidth < 768,
    });
  }, []);

  return (
    <section className="px-8 md:px-20 py-12 space-y-12 max-w-7xl mx-auto overflow-x-hidden" id="features">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-5xl md:text-4xl font-bold text-[#141414] mt-6">
          Elevate Your Legal Practice!
        </h2>
        <p className="text-[#141414] text-2xl mt-3">
          Smart Lawyering, Simplified – Manage Cases, Clients, And Payments With
          Ease.
        </p>
      </div>

      {/* Features List */}
      <div className="space-y-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center rounded-lg p-10 md:p-14 hover:shadow-[0_0_60px_rgba(0,0,0,0.4)] transition-shadow duration-300 w-full md:w-11/12 mx-auto`}
            style={{ background: feature.gradient }}
            data-aos={index % 2 === 0 ? "slide-right" : "slide-left"}
            data-aos-delay={index * 100}
            data-aos-once="true"
          >
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className={feature.imgClass}
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 px-8 text-center md:text-left">
              <h3
                className={`${feature.textColor} leading-[45.60px] break-words`}
                style={{
                  fontSize: "38px",
                  fontFamily: "Work Sans, sans-serif",
                  fontWeight: "600",
                  textTransform: "capitalize",
                }}
              >
                {feature.title}
              </h3>
              <p
                className={`${feature.textColor} leading-[35.20px] break-words mt-4`}
                style={{
                  fontSize: "22px",
                  fontFamily: "Work Sans, sans-serif",
                  fontWeight: "400",
                  textTransform: "capitalize",
                }}
              >
                {feature.description}
              </p>

              {/* Learn More Button */}
              <button
                className={`mt-6 px-8 py-3 w-48 rounded-2xl text-lg font-semibold transition-all duration-300 border-2 border-transparent
  bg-black/5 backdrop-blur-md ${feature.textColor} hover:w-42 hover:bg-transparent hover:border-black`}
              >

                <a href="https://jr-portal.vercel.app/" target="_Blank"> Learn More</a>


              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;