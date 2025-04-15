"use client";

import { useState } from "react";

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      service: "",
    });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-[14px] md:text-[16px] font-poppins font-poppinsSemiBold text-textDark mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[13px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-[14px] md:text-[16px] font-poppins font-poppinsSemiBold text-textDark mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[13px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-[14px] md:text-[16px] font-poppins font-poppinsSemiBold text-textDark mb-1"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Your Phone Number"
          className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[13px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-[14px] md:text-[16px] font-poppins font-poppinsSemiBold text-textDark mb-1"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="Subject of Your Message"
          className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[13px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      {/* Service Type (Optional Dropdown) */}
      <div>
        <label
          htmlFor="service"
          className="block text-[14px] md:text-[16px] font-poppins font-poppinsSemiBold text-textDark mb-1"
        >
          Service Type (Optional)
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] text-[13px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Select a Service</option>
          <option value="Home Relocation">Home Relocation</option>
          <option value="Bike/Car Relocation">Bike/Car Relocation</option>
          <option value="Office Relocation">Office Relocation</option>
          <option value="Storage Solutions">Storage Solutions</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-[14px] md:text-[16px] font-poppins font-poppinsSemiBold text-textDark mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[13px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-primary to-secondary text-white font-poppins font-poppinsSemiBold text-[14px] sm:text-[16px] md:text-[18px] px-4 py-2 sm:px-6 sm:py-3 rounded-lg cursor-pointer shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.15)]"
      >
        Send Message
      </button>
    </form>
  );
}
