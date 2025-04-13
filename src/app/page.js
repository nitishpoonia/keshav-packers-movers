import ContactForm from "@/components/ContactForm";
import FloatingButton from "../components/FloatingButton";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseKeshav from "@/components/WhyChooseKeshav";
import OurProcessWrapper from "@/components/OurProcessWrapper";
import EstimatedMovingCostsWrapper from "@/components/EstimatedMovingCostsWrapper";
// src/app/page.js
export default function Home() {
  return (
    <div className="bg-lightPeach">
      <Hero />
      <Services />
      <WhyChooseKeshav />
      <OurProcessWrapper />
      <EstimatedMovingCostsWrapper />
      <ContactForm />
      <FloatingButton />
    </div>
  );
}
