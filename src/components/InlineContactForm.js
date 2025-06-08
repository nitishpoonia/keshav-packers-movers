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

  // Generate a unique request number
  const generateRequestNumber = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `REQ-${timestamp}-${random}`;
  };

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
      const requestNumber = generateRequestNumber();

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Send inline form data (using different field names)
          fromCity: formData.from,
          toCity: formData.to,
          phone: formData.phone,
          movingTime: formData.movingTime,
          serviceType: formData.service,
          subject: `Free Quote Request #${requestNumber}`,
          requestNumber: requestNumber,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send request");
      }

      setSubmissionStatus("success");
      setFormData({
        from: "",
        to: "",
        phone: "",
        movingTime: "",
        service: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionStatus("error");
      setErrorMessage(
        error.message || "Failed to submit form. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (submissionStatus === "success") {
    return (
      <div className="w-full max-w-4xl mx-auto text-center">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
          <svg
            className="w-12 h-12 text-green-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h3 className="text-2xl font-poppins font-poppinsBold text-green-800 mb-2">
            Quote Request Submitted!
          </h3>
          <p className="text-lg font-poppins font-poppinsRegular text-green-700 mb-4">
            Thank you for your interest in our moving services. Our team will
            contact you within 24 hours with a detailed quote.
          </p>
          <button
            onClick={() => setSubmissionStatus(null)}
            className="bg-primary text-white py-2 px-6 rounded-lg font-poppins font-poppinsSemiBold hover:bg-primary/90 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-[26px] md:text-[24px] font-poppins font-poppinsBold text-textDark text-center mb-2">
        Enter details and we will get back to you...
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* From City */}
          <div>
            <label
              htmlFor="from"
              className="block text-[18px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark mb-1 text-left"
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
              className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[16px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* To City */}
          <div>
            <label
              htmlFor="to"
              className="block text-[18px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark mb-1 text-left"
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
              className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[16px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-[18px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark mb-1 text-left"
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
              className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[16px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Moving Time */}
          <div>
            <label
              htmlFor="movingTime"
              className="block text-[18px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark mb-1 text-left"
            >
              When are you planning to move?
            </label>
            <select
              id="movingTime"
              name="movingTime"
              value={formData.movingTime}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] text-[16px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
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
            className="block text-[18px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark mb-1 text-left"
          >
            Service Type
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] text-[16px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
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
          className={`w-full bg-primary text-white py-3 rounded-lg font-poppins font-poppinsSemiBold hover:bg-primary/90 transition-colors disabled:opacity-50 text-[18px] flex justify-center items-center ${
            isLoading ? "cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Submitting...
            </>
          ) : (
            "Get Free Quote"
          )}
        </button>

        {/* Error Message */}
        {submissionStatus === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-red-600 text-[14px] font-poppins font-poppinsRegular">
              {errorMessage}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
