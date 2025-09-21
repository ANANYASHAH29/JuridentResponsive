import React from "react";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
    text: "“The team assistance feature is a standout addition that greatly enhances collaboration.It allows effortless sharing of case details, tasks, and updates among peers, ensuring everyone stays aligned and informed throughout the legal process.”",
    name: "Ajay Kumar",
    role: "Lawyer/Supreme Court",
    borderColor: "shadow-[inset_0px_4px_22px_#FFD699]",
  },
  {
    text: "“Efficient case file management has never been easier. The organized and intuitive system saves my hours each week, letting me focus on what matters—serving my clients better.”",
    name: "Krishnam Soni",
    role: "Lawyer/High Court",
    borderColor: "shadow-[inset_0px_4px_22px_#A0E7E5]",
  },
  {
    text: "“The cause list generation and event management features are incredibly well-executed.They help me stay on top of every hearing, deadline, and client meeting with absolute clarity and zero stress. It's a must-have for any legal professional aiming for efficiency.”",
    name: "Indresh Goswami",
    role: "Lawyer/Supreme Court",
    borderColor: "shadow-[inset_0px_4px_22px_#FFE0AC]",
  },
  {
    text: "“The ability to seamlessly export case data from both High Court and District Court portals is a standout feature.It eliminates manual entry, reduces errors, and ensures that my case records are always accurate and up to date. Truly a benchmark in legal tech efficiency.”",
    name: "Nitin Shrivastava",
    role: "Lawyer/Supreme Court",
    borderColor: "shadow-[inset_0px_4px_22px_#D1BBFF]",
  },
];

const Testimonials = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 md:px-20 py-14 max-w-7xl mx-auto text-center">
      {/* Heading */}
      <br></br>
      <h2 className="text-2xl md:text-5xl font-bold text-[#141414]">Testimonials</h2>
      <p className="text-base md:text-lg text-[#141414] mt-2">
        Trusted By Professionals, Empowering Justice.
      </p>

      {/* === Mobile Slider === */}
      <div className="block md:hidden mt-8">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          slidesPerView={1}
          className="!pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
     <div
  className={`bg-[#FAFAFA] border border-black rounded-2xl flex flex-col justify-between items-center min-h-[360px] md:min-h-[600px] ${testimonial.borderColor}`}
>


                <div className="px-6 py-10 text-left w-full">
                  <p className="text-[#1E1E1E] text-base font-[DM Sans] leading-6">
                    {testimonial.text}
                  </p>
                </div>
                <div className="bg-[#1E1E1E] w-full px-6 py-4 text-white text-left rounded-b-2xl">
                  <p className="font-bold">{testimonial.name}</p>
                  <div className="flex items-center gap-2 text-sm opacity-80">
                    <User size={16} className="text-purple-400" />
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* === Desktop Grid View === */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <div
  key={index}
  className={`bg-[#FAFAFA] border border-black rounded-2xl flex flex-col justify-between items-center min-h-[360px] md:min-h-[500px] ${testimonial.borderColor}`}
>

            <div className="px-6 py-10 text-left w-full">
              <p className="text-[#1E1E1E] text-base md:text-lg font-[DM Sans] leading-6">
                {testimonial.text}
              </p>
            </div>
            <div className="bg-[#1E1E1E] w-full px-6 py-4 text-white text-left rounded-b-2xl">
              <p className="font-bold md:text-lg">{testimonial.name}</p>
              <div className="flex items-center gap-2 text-sm md:text-base opacity-80">
                <User size={16} className="text-purple-400" />
                {testimonial.role}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* === See All Button for Desktop Only === */}
      <div className="hidden md:block mt-8">
        <button
          className="border-2 border-black px-6 py-2 rounded-2xl font-semibold transition-transform duration-300 shadow-md hover:scale-105 hover:shadow-lg"
          onClick={() => navigate("/testimonials")}
        >
          See All
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
