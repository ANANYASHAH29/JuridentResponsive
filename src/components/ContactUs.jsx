import { useState } from "react";

const ContactUs = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (form.name.trim().length < 3) {
            newErrors.name = "Name must be at least 3 characters.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            newErrors.email = "Enter a valid email address.";
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(form.phone)) {
            newErrors.phone = "Phone number must be 10 digits.";
        }

        if (form.company.trim().length < 3) {
            newErrors.company = "Company name must be at least 3 characters.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (field) => (e) => {
        setForm({ ...form, [field]: e.target.value });
        setErrors({ ...errors, [field]: "" }); // clear error on change
    };

    return (
        <section className="flex flex-col w-full items-center px-8 md:px-20 py-12 space-y-12 max-w-7xl mx-auto overflow-x-hidden bg-black text-white" id="help">
            <div className="self-start">
                <h1 className="text-5xl font-bold mb-8">Contact Us</h1>
            </div>
            <form className="w-full" onSubmit={(e) => { e.preventDefault(); if (validate()) alert("Form submitted!") }}>
                {/* Name */}
                <div className="flex flex-col mb-8 group">
                    <span className="mb-2">Name</span>
                    <div className={`border-b-2 ${errors.name ? 'border-red-500' : 'border-white'} group-focus-within:border-2 group-focus-within:border-white`}>
                        <input
                            value={form.name}
                            onChange={handleChange("name")}
                            className="w-full h-10 p-2 bg-transparent outline-none"
                            placeholder="Your Name"
                        />
                    </div>
                    {errors.name && <small className="text-red-400 mt-1">{errors.name}</small>}
                </div>

                {/* Email */}
                <div className="flex flex-col mb-8 group">
                    <span className="mb-2">Email</span>
                    <div className={`border-b-2 ${errors.email ? 'border-red-500' : 'border-white'} group-focus-within:border-2 group-focus-within:border-white`}>
                        <input
                            value={form.email}
                            onChange={handleChange("email")}
                            className="w-full h-10 p-2 bg-transparent outline-none"
                            placeholder="Your Email"
                        />
                    </div>
                    {errors.email && <small className="text-red-400 mt-1">{errors.email}</small>}
                </div>

                {/* Phone */}
                <div className="flex flex-col mb-8 group w-full md:w-[30%]">
                    <span className="mb-2">Phone</span>
                    <div className={`border-b-2 ${errors.phone ? 'border-red-500' : 'border-white'} group-focus-within:border-2 group-focus-within:border-white`}>
                        <input
                            value={form.phone}
                            onChange={handleChange("phone")}
                            className="w-full h-10 p-2 bg-transparent outline-none"
                            placeholder="Your Phone Number"
                        />
                    </div>
                    {errors.phone && <small className="text-red-400 mt-1">{errors.phone}</small>}
                </div>

                {/* Company */}
                <div className="flex flex-col mb-8 group">
                    <span className="mb-2">Company</span>
                    <div className={`border-b-2 ${errors.company ? 'border-red-500' : 'border-white'} group-focus-within:border-2 group-focus-within:border-white`}>
                        <input
                            value={form.company}
                            onChange={handleChange("company")}
                            className="w-full h-10 p-2 bg-transparent outline-none"
                            placeholder="Your Company/Organization"
                        />
                    </div>
                    {errors.company && <small className="text-red-400 mt-1">{errors.company}</small>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    style={{
                        background:
                            "linear-gradient(90deg, hsla(232, 73%, 65%, 1) 0%, hsla(279, 33%, 48%, 1) 100%)",
                    }}
                    className="p-4 mt-10 text-xl font-medium border-2 border-blue-300 rounded-md hover:opacity-90 transition cursor-pointer"
                >
                    Click to send your Message
                </button>
            </form>
        </section>
    );
};

export default ContactUs;
