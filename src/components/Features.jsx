import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const features = [
  {
    title: "AI Legal Drafting",
    description:
      "Leverage AI to draft accurate legal contracts, petitions, and official documents in seconds — precise and compliant.",
    image: "/legal.png",
    gradient: "bg-gradient-to-r from-[#FFF5EB] to-[#FFEBD6]",
    textColor: "text-[#4A1900]",
  },
  {
    title: "Case Management",
    description:
      "Centralized dashboard to organize, monitor, and update case data, deadlines, and court hearings — with zero clutter.",
    image: "/casemanage.png",
    gradient: "bg-gradient-to-l from-[#ECEBFF] to-[#F6F5FF]",
    textColor: "text-[#271C72]",
  },
  {
    title: "Secure Communication",
    description:
      "Encrypted, confidential communication designed for secure conversations between lawyers and clients.",
    image: "/secure.png",
    gradient: "bg-gradient-to-r from-[#E5F1FF] to-[#F1F8FF]",
    textColor: "text-[#00215F]",
  },
  {
    title: "Docs Together",
    description:
      "Secure, organized cloud storage for all case documents with easy version control and sharing.",
    image: "/docs2.png",
    gradient: "bg-gradient-to-l from-[#E9F8E9] to-[#F3FBF3]",
    textColor: "text-[#323C32]",
  },
  {
    title: "Lawyer-Client Matching",
    description:
      "Smart filters and algorithms match clients with the most suitable lawyers by specialty, location, and availability.",
    image: "/Home.png",
    gradient: "bg-gradient-to-r from-[#E3F2FD] to-[#EDF7FF]",
    textColor: "text-[#001833]",
  },
  {
    title: "Team Assistance",
    description:
      "Collaborate across legal teams with shared access to cases, notes, and scheduling — all in one place.",
    image: "/assistance.png",
    gradient: "bg-gradient-to-l from-[#E0F7F7] to-[#F2FBFB]",
    textColor: "text-[#002828]",
  },
  {
    title: "Internships for Law Students",
    description:
      "Offer real-world experience to aspiring law students through structured, firm-sponsored internships.",
    image: "/internship.png",
    gradient: "bg-gradient-to-r from-[#FFF7E6] to-[#FFF3DB]",
    textColor: "text-[#574119]",
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
    <section
      className="px-4 sm:px-8 md:px-20 py-16 space-y-20 max-w-7xl mx-auto overflow-x-hidden"
      id="features"
    >
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#1F1F1F] tracking-tight">
          Tools Built for Legal Excellence
        </h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          Modernize your practice with features designed by and for legal professionals. Secure, efficient, and client-ready.
        </p>
      </div>

      {/* Features */}
      <div className="space-y-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center rounded-2xl shadow-md border border-gray-200 p-6 sm:p-8 md:p-12 ${feature.gradient}`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={index * 100}
            data-aos-once="true"
          >
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-[85%] max-w-[340px] md:max-w-[400px] rounded-xl object-cover shadow-lg"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-8 text-center md:text-left">
              <h3 className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 ${feature.textColor}`}>
                {feature.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-6 flex justify-center md:justify-start">
                <a
                  href="https://jr-portal.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1F1F1F] text-white px-6 py-3 rounded-full font-medium text-sm sm:text-base hover:bg-[#333] transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
