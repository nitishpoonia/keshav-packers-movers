"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useContactForm } from "@/context/ContactFormContext";
import { useLocation } from "@/context/LocationContext";

export default function ContactFormModal() {
  const { isFormOpen, closeForm } = useContactForm();
  const { city } = useLocation();

  const [formData, setFormData] = useState({
    fromCity: "",
    toCity: "",
    phone: "",
    movingTime: "",
    serviceType: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  useEffect(() => {
    if (city) {
      setFormData((prev) => ({ ...prev, fromCity: city }));
    }
  }, [city]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus(null);
    setErrorMessage("");
    setIsLoading(true); // Set loading state to true

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "User", // ContactFormModal doesn't collect name; using placeholder
          email: "Not provided", // ContactFormModal doesn't collect email
          phone: formData.phone,
          subject: "Contact Form Modal Submission",
          fromCity: formData.fromCity,
          toCity: formData.toCity,
          movingTime: formData.movingTime,
          serviceType: formData.serviceType,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setSubmissionStatus("success");
      setFormData({
        fromCity: city || "",
        toCity: "",
        phone: "",
        movingTime: "",
        serviceType: "",
      });
    } catch (error) {
      setSubmissionStatus("error");
      setErrorMessage("Failed to send your request. Please try again later.");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  if (!isFormOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={closeForm}
          className="absolute top-4 right-4 text-textDark focus:outline-none"
          aria-label="Close contact form modal"
        >
          <Image
            src="/assets/icons/cross.svg"
            alt="Close Modal"
            width={24}
            height={24}
          />
        </button>

        {submissionStatus === "success" ? (
          <div className="text-center">
            <h2 className="text-subheading font-poppins font-poppinsBold text-textDark mb-4">
              Thank You!
            </h2>
            <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium mb-6">
              Your request has been successfully submitted. We’ll get back to you soon with a personalized quote.
            </p>
            <button
              onClick={closeForm}
              className="bg-gradient-to-r from-primary to-secondary text-white font-poppins font-poppinsSemiBold text-[14px] sm:text-[16px] px-4 py-2 sm:px-6 sm:py-3 rounded-lg cursor-pointer shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.15)]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-subheading font-poppins font-poppinsBold text-textDark mb-4">
              Get a Free Quote
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* From City */}
              <div>
                <label
                  htmlFor="fromCity"
                  className="block text-[14px] md:text-[16px] font-poppins font-poppinsSemiBold text-textDark mb-1"
                >
                  From
                </label>
                <input
                  type="text"
                  id="fromCity"
                  name="fromCity"
                  value={formData.fromCity}
                  onChange={handleInputChange}
                  placeholder="Enter starting city"
                  className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[13px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* To City */}
              <div>
                <label
                  htmlFor="toCity"
                  className="block text-[14px] md:text-[16px] font-poppins font-poppinsSemiBold text-textDark mb-1"
                >
                  To
                </label>
                <input
                  type="text"
                  id="toCity"
                  name="toCity"
                  value={formData.toCity}
                  onChange={handleInputChange}
                  placeholder="Enter destination city"
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
                  Moving Time
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
                  <option value="Within 1 Month">Within 1 Month</option>
                  <option value="1-3 Months">1-3 Months</option>
                  <option value="3-6 Months">3-6 Months</option>
                  <option value="More than 6 Months">More than 6 Months</option>
                </select>
              </div>

              {/* Service Type */}
              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-[14px] md:text-[16px] font-poppins font-poppinsSemiBold text-textDark mb-1"
                >
                  Service Type
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] text-[13px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Home Relocation">Home Relocation</option>
                  <option value="Bike/Car Relocation">Bike/Car Relocation</option>
                  <option value="Office Relocation">Office Relocation</option>
                  <option value="Storage Solutions">Storage Solutions</option>
                </select>
              </div>

              {/* Submit Button with Loading Indicator */}
              <button
                type="submit"
                disabled={isLoading} // Disable button while loading
                className={`w-full bg-gradient-to-r from-primary to-secondary text-white font-poppins font-poppinsSemiBold text-[14px] sm:text-[16px] md:text-[18px] px-4 py-2 sm:px-6 sm:py-3 rounded-lg cursor-pointer shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.15)] flex justify-center items-center ${
                  isLoading ? "opacity-75 cursor-not-allowed" : ""
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
                    Sending...
                  </>
                ) : (
                  "Book a Call"
                )}
              </button>

              {/* Error Message */}
              {submissionStatus === "error" && (
                <p className="text-[14px] font-poppins font-poppinsRegular text-red-500 mt-2">
                  {errorMessage}
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}