"use client";

import { useState, useEffect } from "react";
import { useLocation } from "../context/LocationContext";
import Image from "next/image";

export default function InlineContactForm() {
  const { city } = useLocation();
  const [formData, setFormData] = useState({
    from: city || "",
    to: "",
    phone: "",
    movingTime: "",
    service: "",
  });
  const [isMovingTimeOpen, setIsMovingTimeOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New loading state

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

  // Update formData.from when city changes
  useEffect(() => {
    if (city) {
      setFormData((prev) => ({ ...prev, from: city }));
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
          name: "User", // InlineContactForm doesn't collect name; using placeholder
          email: "Not provided", // InlineContactForm doesn't collect email
          phone: formData.phone,
          subject: "Inline Contact Form Submission",
          fromCity: formData.from,
          toCity: formData.to,
          movingTime: formData.movingTime,
          serviceType: formData.service,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setSubmissionStatus("success");
      setFormData({
        from: city || "",
        to: "",
        phone: "",
        movingTime: "",
        service: "",
      });
    } catch (error) {
      setSubmissionStatus("error");
      setErrorMessage("Failed to send your request. Please try again later.");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <section className="relative bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-heading sm:text-[40px] md:text-[48px] lg:text-[56px] font-poppins font-poppinsBold text-textDark mb-8">
          Ready to Move? Get Your Free Quote Now!
        </h2>
        <div className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl mx-auto bg-lightPeach p-6 sm:p-8 md:p-10 rounded-lg">
          {submissionStatus === "success" ? (
            <div className="text-center">
              <h2 className="text-subheading font-poppins font-poppinsBold text-textDark mb-4">
                Thank You!
              </h2>
              <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium mb-6">
                Your request has been successfully submitted. We’ll get back to
                you soon with a personalized quote.
              </p>
              <button
                onClick={() => setSubmissionStatus(null)}
                className="bg-gradient-to-r from-primary to-secondary text-white font-poppins font-poppinsSemiBold text-[16px] sm:text-[18px] md:text-[20px] px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg cursor-pointer shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.15)]"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* From */}
              <div>
                <input
                  type="text"
                  name="from"
                  value={formData.from}
                  onChange={handleInputChange}
                  placeholder="From (e.g., Delhi)"
                  className="w-full p-3 sm:p-4 md:p-5 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark"
                  required
                />
              </div>

              {/* To */}
              <div>
                <input
                  type="text"
                  name="to"
                  value={formData.to}
                  onChange={handleInputChange}
                  placeholder="To (e.g., Mumbai)"
                  className="w-full p-3 sm:p-4 md:p-5 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  className="w-full p-3 sm:p-4 md:p-5 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark"
                  required
                />
              </div>

              {/* Moving Time Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsMovingTimeOpen(!isMovingTimeOpen)}
                  className="w-full p-3 sm:p-4 md:p-5 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark flex justify-between items-center"
                >
                  <span>{formData.movingTime || "Moving Time"}</span>
                  <Image
                    src="/assets/icons/dropdown-arrow.svg"
                    alt="Dropdown Arrow"
                    width={16}
                    height={16}
                    className={`transform transition-transform duration-300 ${
                      isMovingTimeOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isMovingTimeOpen && (
                  <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {movingTimeOptions.map((option) => (
                      <li
                        key={option}
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            movingTime: option,
                          }));
                          setIsMovingTimeOpen(false);
                        }}
                        className="p-3 text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark hover:bg-gray-100 cursor-pointer"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Select Service Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsServiceOpen(!isServiceOpen)}
                  className="w-full p-3 sm:p-4 md:p-5 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark flex justify-between items-center"
                >
                  <span>{formData.service || "Select Service"}</span>
                  <Image
                    src="/assets/icons/dropdown-arrow.svg"
                    alt="Dropdown Arrow"
                    width={16}
                    height={16}
                    className={`transform transition-transform duration-300 ${
                      isServiceOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isServiceOpen && (
                  <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {serviceOptions.map((option) => (
                      <li
                        key={option}
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, service: option }));
                          setIsServiceOpen(false);
                        }}
                        className="p-3 text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark hover:bg-gray-100 cursor-pointer"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Submit Button with Loading Indicator */}
              <button
                type="submit"
                disabled={isLoading} // Disable button while loading
                className={`w-full bg-gradient-to-r from-primary to-secondary text-white font-poppins font-poppinsSemiBold text-[16px] sm:text-[18px] md:text-[20px] px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg cursor-pointer shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.15)] flex justify-center items-center ${
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
                  "Book A Free Call"
                )}
              </button>

              {/* Error Message */}
              {submissionStatus === "error" && (
                <p className="text-[14px] font-poppins font-poppinsRegular text-red-500 mt-2">
                  {errorMessage}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
