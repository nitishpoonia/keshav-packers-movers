"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook for managing form state and submission
 * @param {Object} initialState - Initial form data
 * @param {Object} options - Options for form submission
 * @param {Function} options.onSuccess - Callback after successful submission
 * @param {Function} options.onError - Callback after failed submission
 * @param {String} options.endpoint - API endpoint for form submission
 * @returns {Object} Form state and handlers
 */
export default function useFormSubmission(initialState, options = {}) {
  const {
    onSuccess,
    onError,
    endpoint = "/api/send-email",
    validateForm = () => ({ isValid: true, errors: {} }),
  } = options;

  const [formData, setFormData] = useState(initialState);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  // Reset form with new initial state when dependencies change
  const resetForm = (newState = initialState) => {
    setFormData(newState);
    setSubmissionStatus(null);
    setErrorMessage("");
    setValidationErrors({});
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear validation error when field is changed
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e?.preventDefault();
    setSubmissionStatus(null);
    setErrorMessage("");

    // Validate form
    const { isValid, errors } = validateForm(formData);
    if (!isValid) {
      setValidationErrors(errors);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to submit form");
      }

      setSubmissionStatus("success");

      // Call success callback if provided
      if (onSuccess) {
        onSuccess(formData);
      }

      // Reset form
      resetForm();
    } catch (error) {
      setSubmissionStatus("error");
      setErrorMessage(
        error.message ||
          "Failed to submit your request. Please try again later."
      );

      // Call error callback if provided
      if (onError) {
        onError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    setFormData,
    submissionStatus,
    setSubmissionStatus,
    errorMessage,
    setErrorMessage,
    isLoading,
    validationErrors,
    resetForm,
    handleInputChange,
    handleSubmit,
  };
}
