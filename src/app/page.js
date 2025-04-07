import ContactForm from "@/components/ContactForm";
import FloatingButton from "../components/FloatingButton";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
// src/app/page.js
export default function Home() {
  return (
    <div className="bg-lightPeach">
      <Hero />
      <Services />
      <ContactForm />
      <FloatingButton />
    </div>
  );
}
