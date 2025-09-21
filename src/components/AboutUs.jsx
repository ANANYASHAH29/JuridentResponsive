const AboutUs = () => {
  const content = [
    {
      heading: "ABOUT",
      desc: "Jurident is a modern legal-tech platform built to simplify the way people seek, access, and manage legal support. Whether you're an individual confused about your legal options or a lawyer looking to streamline your practice, Jurident bridges the gap with a seamless, secure, and AI-assisted experience. From fetching court cases, matching with verified lawyers, and scheduling consultations, to drafting legal documents and managing proceedings — Jurident brings the entire legal process under one digital roof. Designed with clarity and trust at its core, the platform eliminates middlemen, protects against misinformation, and empowers users to make informed legal decisions."
    },
    {
      heading: "VISION",
      desc: "Jurident envisions a world where legal support is not a privilege but a right — accessible, understandable, and reliable for everyone, regardless of their background or legal knowledge. We strive to bridge the gap between the complexities of the legal system and the people who need help navigating it. By leveraging technology and simplifying legal interactions, our vision is to empower individuals and legal professionals alike with tools that ensure justice is approachable, transparent, and timely."
    },
    {
      heading: "GOAL",
      desc: "Our goal is to create a comprehensive, intelligent legal platform that addresses real-world challenges faced by clients and lawyers. From helping users identify their legal issues with clarity to connecting them with verified legal professionals, Jurident focuses on making every step of the legal journey smoother. We aim to eliminate misinformation, reduce dependency on unreliable intermediaries, and streamline documentation, communication, and case tracking — all while ensuring privacy, trust, and professional integrity."
    }
  ];

  return (
    <div className="relative mt-[100px] mb-[10px] w-full h-fit flex justify-center items-center overflow-hidden bg-white">
      {/* Background image */}
      <img
        src="Group 967.png"
        className="absolute w-[50%] sm:w-[20%] opacity-20 sm:opacity-100 z-0 pointer-events-none"
        alt="Decoration"
      />

      {/* Content container */}
      <div className="z-10 w-[92%] sm:w-[80%] m-[10px] sm:m-[50px] mt-[20px] space-y-6">
        {content.map((item, index) => (
          <div
            key={index}
            className="about-card bg-white sm:bg-transparent rounded-xl sm:rounded-none p-5 sm:p-0 border border-[#e5e5e5] sm:border-none"
          >
            <h2 className="text-[14px] sm:text-[22px] font-medium text-[#cda454] mb-2 tracking-wide uppercase">
              {item.heading}
            </h2>
            <p className="text-[13px] sm:text-[19.5px] text-justify font-normal leading-[1.6] sm:leading-[1.8] text-[#222]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Metallic Glass Effect */}
      <style>{`
        @media (max-width: 640px) {
          .about-card {
            background: linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.25),
              rgba(255, 255, 255, 0.1)
            );
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.25);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255,255,255,0.3);
            transition: all 0.3s ease;
          }

          .about-card:hover {
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15), inset 0 2px 2px rgba(255,255,255,0.35);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
