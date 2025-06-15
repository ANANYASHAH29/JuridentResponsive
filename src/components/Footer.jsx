import React, { useState } from "react";
import YoutubeLogo from "../assets/YoutubeLogo.svg";
import TwitterLogo from "../assets/TwitterLogo.svg";
import InstagramLogo from "../assets/InstagramLogo.svg";
import DiscordLogo from "../assets/DiscordLogo.svg";
import JLogoFoot from "../assets/JLogoFoot2.png";

export default function Footer() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", query: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (form.firstName.trim().length < 2) newErrors.firstName = "First name must be at least 2 characters.";
    if (form.lastName.trim().length < 2) newErrors.lastName = "Last name must be at least 2 characters.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) newErrors.email = "Enter a valid email address.";
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(form.phone)) newErrors.phone = "Phone number must be 10 digits.";
    if (form.query.trim().length < 3) newErrors.query = "Query must be at least 3 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const body = { 
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phoneNumber: form.phone,
      query: form.query
    };
    try {
      const resp = await fetch("http://localhost:5000/send-juridentContact", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" }
      });
      const respJson = await resp.text();
      console.log(respJson);
      setForm({ firstName: "", lastName: "", email: "", phone: "", query: "" });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000); // Hide after 5 seconds
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    setErrors({ ...errors, [field]: "" });
  };

  return (
    <footer id="help" className="bg-black text-white py-10 px-6 md:px-20 relative">
      {/* Success Message */}
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 transform z-50 ${
          showSuccess ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="bg-black/95 backdrop-blur-sm border-2 border-[#CB9F47] text-white px-8 py-6 rounded-2xl shadow-[0_0_20px_rgba(203,159,71,0.3)] flex items-center space-x-4 min-w-[300px] relative">
          <button 
            onClick={() => setShowSuccess(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-[#CB9F47] transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="bg-[#CB9F47]/20 p-2 rounded-full">
            <svg className="w-8 h-8 text-[#CB9F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-[#CB9F47]">Success!</span>
            <span className="text-white/90">Thank you for reaching out! We'll get back to you soon.</span>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="pt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <h2 className="text-2xl font-bold text-[#CB9F47] mb-4">EMPOWER. TRANSFORM. IGNITE YOUR LEGAL TECH EVOLUTION.</h2>
            <h3 className="text-xl font-semibold mb-6">Ready to revolutionize your legal practice?</h3>
            
                          <div className="space-y-6 text-gray-300 text-base leading-relaxed max-w-xl">
                <p>
                  Connect with Valsco today and discover how our cutting-edge legal tech solutions can transform your practice with streamlined workflows and enhanced compliance.
                </p>
                
                <p>
                  From case management to document automation, we deliver secure and intuitive solutions tailored for law firms, legal departments, and solo practitioners.
                </p>
                
                <p className="font-semibold text-white">
                  Unlock the future of law with Valsco.
                </p>
                
                <p className="text-[#CB9F47] font-medium">
                  Schedule a consultation now to begin your legal tech transformation.
                </p>
            </div>
          </div>

          {/* Right Side (Form) */}
          <form
            onSubmit={(e) => { e.preventDefault(); if (validate()) handleSubmit(); }}
            className="space-y-6 p-8 bg-black/30 backdrop-blur-sm"
          >
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-1">First Name</label>
                <input
                  value={form.firstName}
                  onChange={handleChange("firstName")}
                  className={`p-3 bg-transparent border ${errors.firstName ? 'border-red-500' : 'border-gray-100'} rounded-lg focus:border-2 focus:border-white outline-none`}
                  placeholder="Enter first name"
                />
                {errors.firstName && <small className="text-red-400">{errors.firstName}</small>}
              </div>
              <div className="flex flex-col">
                <label className="mb-1">Last Name</label>
                <input
                  value={form.lastName}
                  onChange={handleChange("lastName")}
                  className={`p-3 bg-transparent border ${errors.lastName ? 'border-red-500' : 'border-gray-100'} rounded-lg focus:border-2 focus:border-white outline-none`}
                  placeholder="Enter last name"
                />
                {errors.lastName && <small className="text-red-400">{errors.lastName}</small>}
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1">Email</label>
              <input
                value={form.email}
                onChange={handleChange("email")}
                className={`p-3 bg-transparent border ${errors.email ? 'border-red-500' : 'border-gray-100'} rounded-lg focus:border-2 focus:border-white outline-none`}
                placeholder="Enter your email"
              />
              {errors.email && <small className="text-red-400">{errors.email}</small>}
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="mb-1">Phone</label>
              <input
                value={form.phone}
                onChange={handleChange("phone")}
                className={`p-3 bg-transparent border ${errors.phone ? 'border-red-500' : 'border-gray-100'} rounded-lg focus:border-2 focus:border-white outline-none`}
                placeholder="Enter phone number"
              />
              {errors.phone && <small className="text-red-400">{errors.phone}</small>}
            </div>

            {/* Query */}
            <div className="flex flex-col">
              <label className="mb-1">Query</label>
              <textarea
                value={form.query}
                onChange={handleChange("query")}
                className={`p-3 bg-transparent border ${errors.query ? 'border-red-500' : 'border-gray-100'} rounded-lg focus:border-2 focus:border-white outline-none min-h-[100px]`}
                placeholder="Type your message here"
              />
              {errors.query && <small className="text-red-400">{errors.query}</small>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-[50%] p-3 mt-4 text-white font-medium border border-white rounded-3xl transition-all duration-300 transform hover:scale-105
              ${isLoading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-white hover:text-black'} shimmer-button`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  <span>Sending...</span>
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Footer Content */}
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
            <li> <a href="https://www.valscotech.com/" target="_Blank">About Us</a> </li>
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
