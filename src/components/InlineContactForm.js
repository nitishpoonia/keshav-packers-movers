"use client";

import { useState } from "react";
import Image from "next/image";

export default function InlineContactForm() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    phone: "",
    movingTime: "",
    service: "",
  });
  const [isMovingTimeOpen, setIsMovingTimeOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Dropdown options (easily editable)
  const movingTimeOptions = [
    "Within 1 Week",
    "Within 2 Weeks",
    "Within 1 Month",
    "More than 1 Month",
  ];

  const serviceOptions = [
    "Bike/Car Relocation",
    "Home Relocation",
    "Office Relocation",
    "Storage Solutions",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setSubmissionStatus(null);

    try {
      // Add your form submission logic here
      setSubmissionStatus("success");
      setFormData({
        from: "",
        to: "",
        phone: "",
        movingTime: "",
        service: "",
      });
    } catch (error) {
      setSubmissionStatus("error");
      setErrorMessage("Failed to submit form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* From City */}
          <div>
            <label
              htmlFor="from"
              className="block text-[14px] md:text-[16px] font-poppins font-poppinsSemiBold text-textDark mb-1"
            >
              From
            </label>
            <input
              type="text"
              id="from"
              name="from"
              value={formData.from}
              onChange={handleInputChange}
              placeholder="Enter starting city"
              className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[13px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* To City */}
          <div>
            <label
              htmlFor="to"
              className="block text-[14px] md:text-[16px] font-poppins font-poppinsSemiBold text-textDark mb-1"
            >
              To
            </label>
            <input
              type="text"
              id="to"
              name="to"
              value={formData.to}
              onChange={handleInputChange}
              placeholder="Enter destination city"
              className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[13px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-[14px] md:text-[16px] font-poppins font-poppinsSemiBold text-textDark mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[13px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Moving Time */}
          <div>
            <label
              htmlFor="movingTime"
              className="block text-[14px] md:text-[16px] font-poppins font-poppinsSemiBold text-textDark mb-1"
            >
              When are you planning to move?
            </label>
            <select
              id="movingTime"
              name="movingTime"
              value={formData.movingTime}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] text-[13px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select moving time</option>
              {movingTimeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Service Type */}
        <div>
          <label
            htmlFor="service"
            className="block text-[14px] md:text-[16px] font-poppins font-poppinsSemiBold text-textDark mb-1"
          >
            Service Type
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] text-[13px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
            required
          >
            <option value="">Select service type</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-white py-3 rounded-lg font-poppins font-poppinsSemiBold hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {isLoading ? "Submitting..." : "Get Free Quote"}
        </button>

        {/* Status Messages */}
        {submissionStatus === "success" && (
          <p className="text-green-600 text-[14px] font-poppins font-poppinsRegular">
            Thank you! We'll contact you shortly.
          </p>
        )}
        {submissionStatus === "error" && (
          <p className="text-red-600 text-[14px] font-poppins font-poppinsRegular">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}
