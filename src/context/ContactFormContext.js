// src/context/ContactFormContext.js
"use client";

import { createContext, useContext, useState } from "react";

const ContactFormContext = createContext();

export function ContactFormProvider({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  console.log("isFormopen", isFormOpen);
  const openForm = () => {
    console.log("openForm called");
    setIsFormOpen(true);
  };
  const closeForm = () => {
    console.log("closeForm called");
    setIsFormOpen(false);
  };

  console.log("ContactFormProvider rendered, isFormOpen:", isFormOpen);
  return (
    <ContactFormContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </ContactFormContext.Provider>
  );
}

export function useContactForm() {
  return useContext(ContactFormContext);
}
