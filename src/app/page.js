import ContactForm from "@/components/ContactForm";
import FloatingButton from "../components/FloatingButton";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseKeshav from "@/components/WhyChooseKeshav";
// src/app/page.js
export default function Home() {
  return (
    <div className="bg-lightPeach">
      <Hero />
      <Services />
      <WhyChooseKeshav />
      <ContactForm />
      <FloatingButton />
    </div>
  );
}
