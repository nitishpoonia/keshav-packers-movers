// src/components/FAQs.js
import Accordion from "./Accordion";

export default function FAQs() {
  const faqs = [
    {
      question: "How much do moving services cost?",
      answer:
        "The cost of moving services depends on factors like distance, the size of your home, and additional services like packing. For a 1BHK home, prices start at ₹7,000 for up to 50km, while long-distance relocations can cost more. Get a free quote for an accurate estimate.",
    },
    {
      question: "What services do professional packers and movers offer?",
      answer:
        "Professional packers and movers offer a range of services, including packing, loading, transportation, unloading, and unpacking. We also provide specialized services like bike/car relocation, office relocation, and storage solutions to meet all your moving needs.",
    },
    {
      question: "How do I prepare for a long-distance relocation?",
      answer:
        "For a long-distance relocation, start by decluttering your belongings, packing non-essential items early, and labeling boxes clearly. Our team at Keshav Packers and Movers will handle the rest, ensuring a stress-free move with careful packing and timely delivery.",
    },
    {
      question: "Are my belongings insured during the move?",
      answer:
        "Yes, we provide insurance options to protect your belongings during the move. Our team uses high-quality packing materials and careful handling to minimize risks, but insurance offers added peace of mind for valuable or fragile items.",
    },
    {
      question: "How far in advance should I book movers?",
      answer:
        "We recommend booking movers at least 2-4 weeks in advance, especially during peak moving seasons like summer or the end of the month. However, we offer flexible scheduling and can accommodate last-minute moves when possible.",
    },
    {
      question: "Can you move specialty items like pianos or antiques?",
      answer:
        "Yes, we specialize in moving specialty items like pianos, antiques, and fragile electronics. Our team uses custom packing solutions and careful handling to ensure these items are transported safely to your new location.",
    },
    {
      question: "What should I do with items I don’t want to move?",
      answer:
        "For items you don’t want to move, consider donating, selling, or recycling them. We also offer storage solutions if you’d like to keep certain items but don’t need them at your new location right away.",
    },
    {
      question: "Do you provide packing materials, or should I buy my own?",
      answer:
        "We provide high-quality packing materials as part of our packing services, including boxes, bubble wrap, and tape. If you prefer to pack yourself, we can supply materials at an additional cost, or you can use your own.",
    },
    {
      question: "How long does a typical move take?",
      answer:
        "The duration of a move depends on the distance and the size of your home. A local move within 50km typically takes 1-2 days, while long-distance relocations across the country may take 5-7 days, including packing and delivery.",
    },
    {
      question: "What happens if my belongings are damaged during the move?",
      answer:
        "While we take every precaution to prevent damage, we offer insurance to cover any unforeseen issues. If damage occurs, contact us immediately, and we’ll guide you through the claims process to ensure a fair resolution.",
    },
  ];

  return (
    <section className="relative bg-lightPeach">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-[36px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-poppins font-poppinsBold text-textDark text-center">
          Frequently Asked Questions
        </h2>

        {/* Subtext */}
        <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-textMedium text-center mt-4 max-w-3xl mx-auto">
          Find answers to common questions about our moving services.
        </p>

        {/* Accordion */}
        <div className="mt-8 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.question} content={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
