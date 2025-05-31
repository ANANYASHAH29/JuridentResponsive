import { useState } from "react";

const ContactUs = () => {
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
        <section
            className="w-full px-6 md:px-16 py-12 max-w-7xl mx-auto text-white bg-black"
            id="help"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Side */}
                <div className="border-r-[0.5px] border-gray-400">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                    <p className="mb-4 text-lg">We’d love to hear from you! Reach us at:</p>
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
                    className="space-y-6"
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
                            className={`p-2 bg-transparent border-b-[2px] ${errors.name ? 'border-red-500' : 'border-gray-100'} focus-within:border-2 focus-within:border-white  outline-none`}
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
                            className={`p-2 bg-transparent border-b-[2px] ${errors.name ? 'border-red-500' : 'border-gray-100'} focus-within:border-2 focus-within:border-white  outline-none`}
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
                            className={`p-2 bg-transparent border-b-[2px] ${errors.name ? 'border-red-500' : 'border-gray-100'} focus-within:border-2 focus-within:border-white  outline-none`}
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
        </section>
    );
};

export default ContactUs;
