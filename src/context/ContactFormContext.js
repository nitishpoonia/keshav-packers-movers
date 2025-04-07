// src/context/ContactFormContext.js
"use client";

import { createContext, useContext, useState } from "react";

const ContactFormContext = createContext();

export function ContactFormProvider({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);
console.log('isFormopen', isFormOpen);

  return (
    <ContactFormContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </ContactFormContext.Provider>
  );
}

export function useContactForm() {
  return useContext(ContactFormContext);
}
