import React from "react";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    text: "“Efficient to use and easy to handle, this case management application has streamlined my workflow significantly. Managing clients, documents, and schedules has never been this smooth—it's truly a game-changer for legal professionals.”",
    name: "Ayush Mangal Gupta",
    role: "Lawyer/High Court",
    borderColor: "shadow-[inset_0px_4px_22px_#C9D4FF]",
  },
  {
    text: "“Highly efficient and remarkably intuitive, this case management application has transformed the way I organize my legal work. The intelligent case scheduling feature simplifies the process of binding and tracking cases, ensuring nothing falls through the cracks.”",
    name: "Vasu Sangal",
    role: "Lawyer/District Court",
    borderColor: "shadow-[inset_0px_4px_22px_#B4F8C8]",
  },
  {
    text: "“The team assistance feature is a standout addition that greatly enhances collaboration. It allows effortless sharing of case details, tasks, and updates among peers, ensuring everyone stays aligned and informed throughout the legal process.”",
    name: "Ajay Kumar",
    role: "Lawyer/Supreme Court",
    borderColor: "shadow-[inset_0px_4px_22px_#FFD699]",
  },
];

const Testimonials = () => {
  const navigate = useNavigate();
  return (
    <section className="px-8 md:px-20 py-10 space-y-6 max-w-7xl mx-auto text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-[#141414]">Testimonials</h2>
      <p className="text-lg text-[#141414]">
        Trusted By Professionals, Empowering Justice.
      </p>

      {/* See All Button */}
      <button className="border-2 border-black px-6 py-2 rounded-2xl font-semibold transition-transform duration-500 ease-out shadow-md hover:scale-105 hover:shadow-lg" onClick={() => navigate("/testimonials")}>
        See All
      </button>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-[#FAFAFA] border border-black rounded-2xl flex flex-col justify-between items-center ${testimonial.borderColor}`}
          >
            {/* Text Content with 76px Top & Bottom Padding */}
            <div className="px-6 py-[76px] text-left w-full">
              <p className="text-[#1E1E1E] text-lg font-[DM Sans] font-normal leading-6 w-[264px] mx-auto">
                {testimonial.text}
              </p>
            </div>

            {/* Bottom Section */}
            <div className="bg-[#1E1E1E] w-full px-6 py-4 text-white text-left rounded-b-2xl">
              <p className="font-bold">{testimonial.name}</p>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <User size={16} className="text-purple-400" /> {/* User Icon */}
                {testimonial.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
