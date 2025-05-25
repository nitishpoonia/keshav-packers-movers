import FAQItem from "../../components/FAQItem";
import InlineContactForm from "../../components/InlineContactForm";

// FAQ data
const faqData = [
  {
    question: "What items do you pack?",
    answer:
      "We pack a wide range of items, including household goods, furniture, electronics, fragile items, and personal belongings. Our team uses high-quality packing materials to ensure the safety of your items during transit. However, we do not pack hazardous materials, perishable goods, or illegal items. Please contact us for a detailed list of restricted items.",
  },
  {
    question: "How do I prepare for a move?",
    answer:
      "To prepare for a move, start by decluttering your home and organizing your belongings. Pack essential items separately, label your boxes, and create an inventory list. Notify utility companies, update your address, and arrange for any necessary permits. Our team will provide you with a detailed checklist to ensure a smooth moving process.",
  },
  {
    question: "What are your pricing options?",
    answer:
      "Our pricing depends on factors such as the distance of the move, the volume of items, the type of service (e.g., home relocation, bike/car relocation), and any additional services like packing or storage. We offer transparent quotes with no hidden fees. Request a free quote to get a detailed estimate tailored to your needs.",
  },
  {
    question: "How long does the moving process take?",
    answer:
      "The duration of the moving process depends on the distance, the volume of items, and the specific services required. Local moves within the same city typically take 1-2 days, while long-distance moves across India may take 3-7 days. We’ll provide a detailed timeline when you book your move.",
  },
  {
    question: "Do you provide insurance for my belongings?",
    answer:
      "Yes, we offer insurance options to protect your belongings during transit. Our team ensures careful handling, but in the rare event of damage or loss, our insurance coverage provides peace of mind. Contact us to learn more about our insurance plans and coverage details.",
  },
  {
    question: "What packing materials do you use?",
    answer:
      "We use high-quality packing materials, including bubble wrap, corrugated boxes, packing tape, and protective padding, to ensure the safety of your belongings. For fragile items, we use specialized packing techniques to minimize the risk of damage during transit.",
  },
  {
    question: "Do you offer storage solutions?",
    answer:
      "Yes, we provide secure, climate-controlled storage solutions for both short-term and long-term needs. Whether you're moving or need extra space, our storage facilities are equipped with advanced security systems to keep your items safe.",
  },
  {
    question: "How do I book a move with Keshav Packers?",
    answer:
      "Booking a move with us is simple! Click the 'Get a Free Quote' button, fill out the form with your details, and our team will contact you to confirm your booking. You can also call us at +91 123-456-7890 or email us at contact@keshavpackers.com to schedule your move.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We provide moving services across all major cities in India, including, Jaipur, Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, and more. Check our footer for a full list of cities we serve, or contact us to confirm availability in your area.",
  },
];

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: "Frequently Asked Questions | Keshav Packers and Movers",
    description:
      "Find answers to common questions about packing and moving services with Keshav Packers and Movers. Learn about pricing, preparation, and more.",
    keywords:
      "packers and movers FAQs, moving tips India, relocation questions, Keshav Packers FAQ",
    alternates: {
      canonical: "https://keshavpackersmovers.com/faq",
    },
    openGraph: {
      title: "Frequently Asked Questions | Keshav Packers and Movers",
      description:
        "Find answers to common questions about packing and moving services with Keshav Packers and Movers.",
      type: "website",
      url: "https://keshavpackersmovers.com/faq",
    },
  };
}

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <h1 className="text-heading sm:text-[40px] md:text-[48px] lg:text-[56px] font-poppins font-poppinsBold text-textDark text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-textMedium text-center mt-4 max-w-3xl mx-auto">
        Find answers to common questions about our packing and moving services
        across India. Need more help? Request a free quote today!
      </p>

      {/* FAQ List */}
      <div className="mt-12 space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center border-t border-gray-300 pt-8">
        <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark">
          Still Have Questions?
        </h2>
        <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-textMedium mt-2">
          Contact us for more information or request a free quote to get
          started.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <InlineContactForm />
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
