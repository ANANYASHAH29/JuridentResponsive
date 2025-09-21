import {
  FileText,
  ScrollText,
  BookMarked,
  Timer,
  BadgeCheck,
  Handshake
} from "lucide-react";

const AIDrafting = () => {
  const content = [
    {
      text: "Jurident's advanced AI Drafting feature streamlines the complex process of legal document creation by generating meticulously structured, professional-grade drafts within seconds.",
      icon: FileText,
    },
    {
      text: "Whether you need contracts, petitions, affidavits, or legal notices, our intelligent system is engineered to comprehend the nuances of legal language and context, ensuring that each document aligns with jurisdictional standards and client-specific requirements.",
      icon: ScrollText,
    },
    {
      text: "By leveraging state-of-the-art natural language processing and legal domain expertise, Jurident empowers legal professionals to produce high-quality, review-ready documents with unparalleled speed and precision.",
      icon: BookMarked,
    },
    {
      text: "This not only reduces the risk of human error but also significantly cuts down the time spent on repetitive drafting tasks, allowing practitioners to allocate more time to critical legal analysis and strategic decision-making.",
      icon: Timer,
    },
    {
      text: "With Jurident, legal teams can enhance their operational efficiency, maintain compliance, and deliver consistent, accurate documentation—every time.",
      icon: BadgeCheck,
    },
    {
      text: "Let our AI handle the paperwork, while you focus on what truly matters: providing exceptional legal counsel.",
      icon: Handshake,
    },
  ];

  return (
    <div className="relative w-full h-fit sm:h-[100vh] flex justify-center sm:items-center overflow-hidden soft-bg">
      {/* Background image */}
      <img
        src="image 3.png"
        alt="Background"
        className="absolute w-[90%] top-0 left-1/2 transform -translate-x-1/2 opacity-10 z-0 sm:opacity-100 sm:w-[70%]"
      />

      {/* Content */}
<div className="z-10 w-[90%] sm:w-[80%] mt-[100px] sm:mt-0 pb-10 px-4 sm:pb-0 sm:px-0 flex flex-col sm:justify-center sm:items-start sm:m-[50px] space-y-10 sm:space-y-0 text-left glass-card-mobile">

        {/* Heading */}
        <h1 className="text-[22px] sm:text-[24px] font-extrabold font-['Arial'] text-[#bfa87c] mb-6 tracking-wide">
          AI Drafting
        </h1>

        {/* Paragraphs */}
        {content.map(({ text, icon: Icon }, index) => (
          <p
            key={index}
            className="text-[14px] sm:text-lg font-[500] font-['Arial'] text-[#4a4a4a] leading-relaxed tracking-normal mb-8 sm:mb-[20px] flex items-start gap-3"
          >
            <span className="sm:hidden block mt-[3px]">
              <Icon className="w-4 h-4 text-[#bfa87c]" />
            </span>
            {text}
          </p>
        ))}

        {/* Coming Soon Button */}
        <div className="mt-4 sm:mt-6 flex justify-start">
          <span className="inline-block text-sm sm:text-xl font-semibold text-white px-5 py-2 rounded-full bg-[#bfa87c] shadow-md animate-glow-gold font-['Arial']">
            Coming Soon
          </span>
        </div>
      </div>

      {/* CSS styles */}
      <style>{`
        @keyframes glowFadeGold {
          0%, 100% {
            box-shadow: 0 0 10px rgba(191, 168, 124, 0.6), 0 0 20px rgba(191, 168, 124, 0.4);
          }
          50% {
            box-shadow: 0 0 20px rgba(191, 168, 124, 0.9), 0 0 40px rgba(191, 168, 124, 0.7);
          }
        }

        .animate-glow-gold {
          animation: glowFadeGold 2.5s ease-in-out infinite;
        }

        .soft-bg {
          background-color: #fdfaf6;
          background-image:
            radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%);
          background-size: 2px 2px, 20px 20px, 20px 20px;
        }

        @media (max-width: 640px) {
          .glass-card-mobile {
            background: rgba(255, 255, 255, 0.07);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border-radius: 16px;
            border: 1px solid rgba(43, 12, 12, 0.07);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.14);
            padding: 20px;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default AIDrafting;
