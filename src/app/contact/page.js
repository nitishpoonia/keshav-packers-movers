import Link from "next/link";
import ContactForm from "../../components/ContactForm";
import FAQItem from "../../components/FAQItem";
import InlineContactForm from "../../components/InlineContactForm";
import Image from "next/image";
import ContactUsForm from "@/components/ContactUsForm";

// Contact-related FAQ data
const contactFAQs = [
  {
    question: "How quickly will I get a response?",
    answer:
      "We aim to respond to all inquiries within 24 hours. For urgent requests, please call us at +91 123-456-7890, and we’ll assist you immediately.",
  },
  {
    question: "Can I visit your office?",
    answer:
      "Yes, you’re welcome to visit our office at 123 Moving Street, Bengaluru, India. We’re open Monday to Sunday from 9:00 AM to 6:00 PM. Please schedule an appointment for a smoother experience.",
  },
  {
    question: "What services can I inquire about?",
    answer:
      "You can inquire about any of our services, including home relocation, bike/car relocation, office relocation, and storage solutions. We also offer packing and insurance options.",
  },
];

// Social media links (mirroring the footer)
const socialMediaLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "/assets/icons/facebook-icon.svg",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: "/assets/icons/twitter-icon.svg",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "/assets/icons/instagram-icon.svg",
  },
];

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: "Contact Us | Keshav Packers and Movers",
    description:
      "Get in touch with Keshav Packers and Movers for reliable relocation services across India. Call us, email us, or visit our office in Bengaluru.",
    keywords:
      "contact packers and movers Bengaluru, packers and movers India contact, relocation services contact",
    openGraph: {
      title: "Contact Us | Keshav Packers and Movers",
      description:
        "Get in touch with Keshav Packers and Movers for reliable relocation services across India.",
      type: "website",
      url: "https://yourwebsite.com/contact",
    },
  };
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <h1 className="text-heading sm:text-[40px] md:text-[48px] lg:text-[56px] font-poppins font-poppinsBold text-textDark text-center">
        Contact Us
      </h1>
      <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-textMedium text-center mt-4 max-w-3xl mx-auto">
        Get in touch with Keshav Packers and Movers for all your relocation
        needs across India. We’re here to help you every step of the way.
      </p>

      {/* Contact Form and Details Section */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark mb-4">
            Send Us a Message
          </h2>

          <ContactUsForm />
        </div>

        {/* Contact Details */}
        <div>
          <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark mb-4">
            Our Contact Details
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark">
                Address
              </h3>
              <p className="text-[14px] md:text-[16px] font-poppins font-poppinsRegular text-textMedium">
                123 Moving Street, Bengaluru, India
              </p>
            </div>
            <div>
              <h3 className="text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark">
                Phone
              </h3>
              <p className="text-[14px] md:text-[16px] font-poppins font-poppinsRegular text-textMedium">
                +91 123-456-7890
              </p>
            </div>
            <div>
              <h3 className="text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark">
                Email
              </h3>
              <p className="text-[14px] md:text-[16px] font-poppins font-poppinsRegular text-textMedium">
                contact@keshavpackers.com
              </p>
            </div>
            <div>
              <h3 className="text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark">
                Follow Us
              </h3>
              <div className="flex space-x-4 mt-2">
                {socialMediaLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={link.icon}
                      alt={link.name}
                      width={24}
                      height={24}
                      className="hover:opacity-80"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="mt-12">
        <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark text-center mb-4">
          Our Location
        </h2>
        <div className="w-full h-[400px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.007167217381!2d77.594566314822!3d12.971598990865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4f!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v169876543210!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Business Hours */}
      <div className="mt-12">
        <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark text-center mb-4">
          Business Hours
        </h2>
        <div className="max-w-md mx-auto text-center">
          <p className="text-[14px] md:text-[16px] font-poppins font-poppinsRegular text-textMedium">
            Monday - Sunday: 9:00 AM - 6:00 PM
          </p>
          <p className="text-[14px] md:text-[16px] font-poppins font-poppinsRegular text-textMedium mt-2">
            We’re available to assist you during these hours. For emergencies,
            please call us directly.
          </p>
        </div>
      </div>

      {/* Contact FAQs */}
      <div className="mt-12">
        <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark text-center mb-4">
          Common Contact Questions
        </h2>
        <div className="space-y-4">
          {contactFAQs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center border-t border-gray-300 pt-8">
        <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark">
          Ready to Move?
        </h2>
        <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-textMedium mt-2">
          Request a free quote today and let us handle your relocation with
          care.
        </p>
        <div className="flex justify-center mt-4">
          <InlineContactForm />
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Keshav Packers and Movers",
            url: "https://yourwebsite.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Moving Street",
              addressLocality: "Bengaluru",
              addressRegion: "Karnataka",
              postalCode: "560001",
              addressCountry: "IN",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91-123-456-7890",
                contactType: "customer service",
                email: "contact@keshavpackers.com",
                hoursAvailable: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
