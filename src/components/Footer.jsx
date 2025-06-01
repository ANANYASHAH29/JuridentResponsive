import React, { useState } from "react";
import YoutubeLogo from "../assets/YoutubeLogo.svg";
import TwitterLogo from "../assets/TwitterLogo.svg";
import InstagramLogo from "../assets/InstagramLogo.svg";
import DiscordLogo from "../assets/DiscordLogo.svg";
import JLogoFoot from "../assets/JLogoFoot2.png";

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (form.name.trim().length < 3) newErrors.name = "Name must be at least 3 characters.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) newErrors.email = "Enter a valid email address.";
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(form.phone)) newErrors.phone = "Phone number must be 10 digits.";
    if (form.company.trim().length < 3) newErrors.company = "Company name must be at least 3 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const body = { name: form.name, email: form.email, phoneNumber: form.phone, company: form.company };
    try {
      const resp = await fetch("http://localhost:5000/send-juridentContact", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" }
      });
      const respJson = await resp.text();
      console.log(respJson);
      setForm({ name: "", email: "", phone: "", company: "" });
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
    <footer id="help" className="bg-black text-white py-10 px-6 md:px-20">
      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="mb-4 text-lg">We'd love to hear from you! Reach us at:</p>
            <div className="space-y-1 text-gray-300 text-base leading-relaxed">
              <p>Email: <a href="mailto:connect@valscotech.com" className="underline text-white">connect@valscotech.com</a></p>
              <p>Valsco Technology,</p>
              <p>J-3 Shatabdi Enclave</p>
              <p>Noida-201301, Uttar Pradesh</p>
            </div>
          </div>

          {/* Right Side (Form) */}
          <form
            onSubmit={(e) => { e.preventDefault(); if (validate()) handleSubmit(); }}
            className="space-y-6 border border-white rounded-lg p-8 bg-black/30 backdrop-blur-sm"
          >
            {/* Name */}
            <div className="flex flex-col">
              <label className="mb-1">Name</label>
              <input
                value={form.name}
                onChange={handleChange("name")}
                className={`p-2 bg-transparent border-b-[2px] ${errors.name ? 'border-red-500' : 'border-gray-100'} focus-within:border-2 focus-within:border-white  outline-none`}
                placeholder="Your Name"
              />
              {errors.name && <small className="text-red-400">{errors.name}</small>}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1">Email</label>
              <input
                value={form.email}
                onChange={handleChange("email")}
                className={`p-2 bg-transparent border-b-[2px] ${errors.email ? 'border-red-500' : 'border-gray-100'} focus-within:border-2 focus-within:border-white  outline-none`}
                placeholder="Your Email"
              />
              {errors.email && <small className="text-red-400">{errors.email}</small>}
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="mb-1">Phone</label>
              <input
                value={form.phone}
                onChange={handleChange("phone")}
                className={`p-2 bg-transparent border-b-[2px] ${errors.phone ? 'border-red-500' : 'border-gray-100'} focus-within:border-2 focus-within:border-white  outline-none`}
                placeholder="Your Phone Number"
              />
              {errors.phone && <small className="text-red-400">{errors.phone}</small>}
            </div>

            {/* Company */}
            <div className="flex flex-col">
              <label className="mb-1">Company</label>
              <input
                value={form.company}
                onChange={handleChange("company")}
                className={`p-2 bg-transparent border-b-[2px] ${errors.company ? 'border-red-500' : 'border-gray-100'} focus-within:border-2 focus-within:border-white  outline-none`}
                placeholder="Your Company/Organization"
              />
              {errors.company && <small className="text-red-400">{errors.company}</small>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-[50%] p-3 mt-4 text-white font-medium border-1 rounded-md transition
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
                "Send Message"
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
