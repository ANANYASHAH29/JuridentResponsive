import React from "react";
import { User } from "lucide-react";

const testimonials = [
  {
    text: "“Jurident has streamlined my case management. The automated document generation saves me so much time! Highly recommended for legal professionals.”",
    name: "Lorem Ipsum",
    role: "Lawyer/a",
    borderColor: "shadow-[inset_0px_4px_22px_#C9D4FF]",
  },
  {
    text: "“Jurident has streamlined my case management. The automated document generation saves me so much time! Highly recommended for legal professionals.”",
    name: "Lorem Ipsum",
    role: "Lawyer/b",
    borderColor: "shadow-[inset_0px_4px_22px_#B4F8C8]",
  },
  {
    text: "“Jurident has streamlined my case management. The automated document generation saves me so much time! Highly recommended for legal professionals.”",
    name: "Lorem Ipsum",
    role: "Lawyer/c",
    borderColor: "shadow-[inset_0px_4px_22px_#FFD699]",
  },
];

const Testimonials = () => {
  return (
    <section className="px-8 md:px-20 py-10 space-y-6 max-w-7xl mx-auto text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-[#141414]">Testimonials</h2>
      <p className="text-lg text-[#141414]">
        Trusted By Professionals, Empowering Justice For All.
      </p>

      {/* See All Button */}
      <button className="border-2 border-black px-6 py-2 rounded-2xl font-semibold transition-transform duration-500 ease-out shadow-md hover:scale-105 hover:shadow-lg">
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
