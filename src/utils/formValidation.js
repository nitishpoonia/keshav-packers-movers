/**
 * Validation utility for form fields
 */

// Phone validation with Indian phone number format
export const validatePhone = (phone) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phone) return "Phone number is required";
  if (!phoneRegex.test(phone))
    return "Please enter a valid 10-digit Indian phone number";
  return null;
};

// Email validation
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Email is required";
  if (!emailRegex.test(email)) return "Please enter a valid email address";
  return null;
};

// City validation
export const validateCity = (city) => {
  if (!city) return "City is required";
  if (city.length < 2) return "City name is too short";
  return null;
};

// Required field validation
export const validateRequired = (value, fieldName) => {
  if (!value) return `${fieldName} is required`;
  return null;
};

/**
 * Validates a complete form
 * @param {Object} formData - Form data to validate
 * @param {Object} validationSchema - Schema defining validation rules
 * @returns {Object} Validation result {isValid, errors}
 */
export const validateForm = (formData, validationSchema) => {
  const errors = {};

  Object.entries(validationSchema).forEach(([field, validator]) => {
    const errorMessage = validator(formData[field]);
    if (errorMessage) {
      errors[field] = errorMessage;
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Create validation schema for ContactFormModal
 */
export const createContactFormValidationSchema = () => ({
  fromCity: (value) => validateCity(value),
  toCity: (value) => validateCity(value),
  phone: (value) => validatePhone(value),
  movingTime: (value) => validateRequired(value, "Moving time"),
  serviceType: (value) => validateRequired(value, "Service type"),
});

/**
 * Create validation schema for ContactUsForm
 */
export const createContactUsFormValidationSchema = () => ({
  name: (value) => validateRequired(value, "Name"),
  email: (value) => validateEmail(value),
  phone: (value) => validatePhone(value),
  subject: (value) => validateRequired(value, "Subject"),
  message: (value) => validateRequired(value, "Message"),
});
