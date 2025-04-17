import ContactForm from "@/components/ContactForm";
import FloatingButton from "../components/FloatingButton";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseKeshav from "@/components/WhyChooseKeshav";
import OurProcessWrapper from "@/components/OurProcessWrapper";
import EstimatedMovingCostsWrapper from "@/components/EstimatedMovingCostsWrapper";
import InlineContactForm from "@/components/InlineContactForm";
import FAQs from "@/components/FAQs";
// src/app/page.js
export default function Home() {
  return (
    <div className="bg-lightPeach">
      <Hero />
      <Services />
      <WhyChooseKeshav />
      <OurProcessWrapper />
      <EstimatedMovingCostsWrapper />
      <InlineContactForm />
      <FAQs />
      <ContactForm />
    </div>
  );
}
