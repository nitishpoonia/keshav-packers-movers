// app/privacy-policy/page.jsx

export async function generateMetadata() {
  return {
    title: "Privacy Policy | Keshav Packers and Movers",
    description:
      "Read the Privacy Policy of Keshav Packers and Movers. Learn how we collect, use, and protect your personal information when you book our relocation, packing, and moving services.",
    keywords:
      "privacy policy packers and movers Jaipur, Keshav Packers data privacy, relocation services data protection India",
    alternates: {
      canonical: "https://keshavpackersmovers.com/privacy-policy",
    },
    openGraph: {
      title: "Privacy Policy | Keshav Packers and Movers",
      description:
        "Learn how Keshav Packers and Movers collects, uses, and protects your personal information during bookings and relocation services.",
      type: "website",
      url: "https://keshavpackersmovers.com/privacy-policy",
    },
  };
}

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: (
      <>
        <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium mb-3">
          When you book a service, submit a quote request, or contact us, we
          collect personal information necessary to plan and execute your
          relocation. This may include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-[16px] font-poppins font-poppinsRegular text-textMedium">
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Identity Information:
            </span>{" "}
            Full name, email address, and phone number.
          </li>
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Pickup & Delivery Addresses:
            </span>{" "}
            Current and destination addresses, including floor/wing details and
            access instructions relevant to the move.
          </li>
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Inventory Details:
            </span>{" "}
            List of goods, furniture, appliances, or vehicles (bikes/cars) to be
            relocated, including quantities and special handling requirements.
          </li>
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Move Preferences:
            </span>{" "}
            Preferred move dates, packing requirements, insurance preferences,
            and storage needs.
          </li>
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Payment Information:
            </span>{" "}
            Billing details required to process service payments. Card or UPI
            transactions are handled by secure third-party payment gateways.
          </li>
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Communication Records:
            </span>{" "}
            Messages, emails, and call notes exchanged with our team for service
            coordination.
          </li>
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Website Usage Data:
            </span>{" "}
            IP address, browser type, device information, and pages visited on
            our website, collected via cookies and analytics tools.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: (
      <>
        <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium mb-3">
          All information we collect is used to deliver a seamless and
          professional relocation experience. We use your data to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-[16px] font-poppins font-poppinsRegular text-textMedium">
          <li>
            Plan, schedule, and execute your move — including packing, loading,
            transportation, unloading, and unpacking.
          </li>
          <li>
            Coordinate logistics for home relocation, office shifting, bike/car
            transportation, and storage services.
          </li>
          <li>
            Send booking confirmations, move updates, invoices, and receipts via
            SMS, WhatsApp, or email.
          </li>
          <li>Process payments and issue refunds where applicable.</li>
          <li>Arrange transit insurance for your goods when opted for.</li>
          <li>Respond to your queries, complaints, or feedback.</li>
          <li>
            Improve our services, website experience, and customer support
            processes.
          </li>
          <li>
            Send promotional offers or updates about our services — only with
            your prior consent.
          </li>
          <li>Comply with applicable Indian laws and regulations.</li>
        </ul>
        <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium mt-3">
          We will never sell, rent, or trade your personal information to
          third-party marketers.
        </p>
      </>
    ),
  },
  {
    id: "data-sharing",
    title: "3. Sharing of Your Information",
    content: (
      <>
        <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium mb-3">
          To fulfill your move, we work with a trusted network of associates.
          Your information may be shared with the following parties strictly on
          a need-to-know basis:
        </p>
        <ul className="list-disc list-inside space-y-2 text-[16px] font-poppins font-poppinsRegular text-textMedium">
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Transport & Logistics Partners:
            </span>{" "}
            Truck operators, drivers, and intercity logistics associates who
            carry out the physical relocation.
          </li>
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Packing & Labour Teams:
            </span>{" "}
            On-ground packing staff or subcontractors engaged for your specific
            move.
          </li>
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Warehouse & Storage Providers:
            </span>{" "}
            If you opt for our storage services, your goods details may be
            shared with our warehouse partners.
          </li>
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Insurance Providers:
            </span>{" "}
            If transit insurance is arranged, relevant goods and contact details
            are shared with the insurer.
          </li>
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Payment Gateways:
            </span>{" "}
            Secure processors handling your payment transactions.
          </li>
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Legal Authorities:
            </span>{" "}
            When required by law, court order, or government regulation.
          </li>
        </ul>
        <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium mt-3">
          All third-party partners are bound by confidentiality obligations and
          may only use your data to deliver the requested service.
        </p>
      </>
    ),
  },
  {
    id: "goods-and-inventory-data",
    title: "4. Goods & Inventory Data",
    content: (
      <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium">
        As part of our service, we collect detailed information about the goods
        you wish to relocate — including item lists, estimated values, fragile
        items, and special instructions. This information is used exclusively
        for planning your move, preparing packing materials, arranging
        appropriate vehicles, and processing insurance claims if applicable. We
        do not share your inventory details with any party other than those
        directly involved in executing your relocation.
      </p>
    ),
  },
  {
    id: "data-security",
    title: "5. Data Security",
    content: (
      <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium">
        We implement appropriate technical and organizational measures to
        protect your personal information from unauthorized access, loss,
        misuse, or disclosure. Access to your data within our team is restricted
        to staff who need it to deliver your service. Payment transactions are
        handled entirely by PCI-compliant third-party payment processors — we do
        not store your full card details on our systems. While we take all
        reasonable precautions, no system is entirely immune to security risks.
        In the unlikely event of a data breach affecting your information, we
        will notify you promptly as required by applicable law.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "6. Cookies and Website Tracking",
    content: (
      <>
        <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium mb-3">
          Our website uses cookies and analytics tools (such as Google
          Analytics) to understand visitor behavior and improve your experience.
          These tools help us track:
        </p>
        <ul className="list-disc list-inside space-y-2 text-[16px] font-poppins font-poppinsRegular text-textMedium">
          <li>Which pages are most visited on our website.</li>
          <li>How users navigate through the site.</li>
          <li>Approximate geographic location based on IP address.</li>
          <li>Device and browser type used to access the site.</li>
        </ul>
        <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium mt-3">
          No personally identifiable information is collected through cookies
          alone. You can disable cookies in your browser settings at any time,
          though this may affect certain site features.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "7. Data Retention",
    content: (
      <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium">
        We retain your personal data for as long as necessary to fulfill the
        purposes described in this policy. Booking records, invoices, and
        communication logs are typically retained for a minimum of 7 years in
        compliance with Indian financial and legal requirements. Once data is no
        longer required, it is securely deleted or anonymized. You may request
        earlier deletion of your data by contacting us directly, subject to any
        legal obligations that require us to retain it.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "8. Your Rights",
    content: (
      <>
        <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium mb-3">
          You have the following rights with respect to your personal
          information:
        </p>
        <ul className="list-disc list-inside space-y-2 text-[16px] font-poppins font-poppinsRegular text-textMedium">
          <li>
            <span className="font-poppinsSemiBold text-textDark">Access:</span>{" "}
            Request a copy of the personal data we hold about you.
          </li>
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Correction:
            </span>{" "}
            Ask us to correct inaccurate or outdated information.
          </li>
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Deletion:
            </span>{" "}
            Request deletion of your data, subject to legal retention
            obligations.
          </li>
          <li>
            <span className="font-poppinsSemiBold text-textDark">Opt-Out:</span>{" "}
            Unsubscribe from promotional communications at any time by
            contacting us or using the unsubscribe option in our messages.
          </li>
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Grievance Redressal:
            </span>{" "}
            Raise a concern or complaint about how your data is handled. We will
            respond within 30 days.
          </li>
        </ul>
        <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium mt-3">
          To exercise any of these rights, please email us at{" "}
          <a
            href="mailto:keshavpackerandmovers@gmail.com"
            className="text-blue-600 hover:underline"
          >
            keshavpackerandmovers@gmail.com
          </a>{" "}
          or call us at +91 7852000465.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "9. Third-Party Links",
    content: (
      <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium">
        Our website may link to third-party platforms such as Google Maps,
        Facebook, Instagram, and YouTube. We are not responsible for the privacy
        practices or content of those platforms. We encourage you to review
        their respective privacy policies before engaging with them.
      </p>
    ),
  },
  {
    id: "policy-changes",
    title: "10. Changes to This Privacy Policy",
    content: (
      <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium">
        We may update this Privacy Policy periodically to reflect changes in our
        services, technology, or applicable laws. The updated policy will be
        posted on this page with a revised &ldquo;Last Updated&rdquo; date. We
        encourage you to check this page from time to time. Continued use of our
        services after any update constitutes your acceptance of the revised
        policy.
      </p>
    ),
  },
  {
    id: "contact-us",
    title: "11. Contact Us",
    content: (
      <>
        <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium mb-3">
          For any questions, concerns, or requests related to this Privacy
          Policy, please contact us:
        </p>
        <div className="space-y-1 text-[16px] font-poppins font-poppinsRegular text-textMedium">
          <p>
            <span className="font-poppinsSemiBold text-textDark">Company:</span>{" "}
            Keshav Packers and Movers
          </p>
          <p>
            <span className="font-poppinsSemiBold text-textDark">Address:</span>{" "}
            Shop No. 4 Plot No. 123, Shree Ram Ji Bhawan Dhawas, Ajmer Road,
            Jaipur, 302021
          </p>
          <p>
            <span className="font-poppinsSemiBold text-textDark">Phone:</span>{" "}
            +91 7852000465 / +91 7568428665
          </p>
          <p>
            <span className="font-poppinsSemiBold text-textDark">Email:</span>{" "}
            <a
              href="mailto:keshavpackerandmovers@gmail.com"
              className="text-blue-600 hover:underline"
            >
              keshavpackerandmovers@gmail.com
            </a>
          </p>
          <p>
            <span className="font-poppinsSemiBold text-textDark">Hours:</span>{" "}
            Monday – Saturday, 9:00 AM – 6:00 PM
          </p>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  const lastUpdated = "June 5, 2025";

  return (
    <div className="container mx-auto px-4 py-12 pt-6">
      {/* Header */}
      <h1 className="text-[36px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-poppins font-poppinsBold text-textDark text-center">
        Privacy Policy
      </h1>
      <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-textMedium text-center mt-4 max-w-3xl mx-auto">
        At Keshav Packers and Movers, we are committed to protecting your
        privacy. This policy explains how we collect, use, and safeguard your
        personal information when you book or use our relocation services.
      </p>
      <p className="text-[14px] font-poppins font-poppinsRegular text-textMedium text-center mt-2">
        Last Updated: {lastUpdated}
      </p>

      {/* Intro Notice */}
      <div className="mt-8 max-w-3xl mx-auto bg-gray-50 border border-gray-200 rounded-lg p-5">
        <p className="text-[15px] font-poppins font-poppinsRegular text-textMedium">
          By using our website, submitting a quote request, or booking any of
          our services, you agree to the collection and use of information as
          described in this policy. If you do not agree, please discontinue use
          of our services and contact us with any concerns.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="mt-10 max-w-3xl mx-auto">
        <h2 className="text-[22px] font-poppins font-poppinsBold text-textDark mb-3">
          Table of Contents
        </h2>
        <ol className="list-decimal list-inside space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-[15px] font-poppins font-poppinsRegular text-blue-600 hover:underline"
              >
                {section.title.replace(/^\d+\.\s/, "")}
              </a>
            </li>
          ))}
        </ol>
      </div>

      {/* Policy Sections */}
      <div className="mt-10 max-w-3xl mx-auto space-y-10">
        {sections.map((section) => (
          <div key={section.id} id={section.id}>
            <h2 className="text-[26px] md:text-[24px] font-poppins font-poppinsBold text-textDark mb-4">
              {section.title}
            </h2>
            {section.content}
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-12 max-w-3xl mx-auto text-center border-t border-gray-300 pt-8">
        <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium">
          Have questions about this policy?{" "}
          <a
            href="/contact"
            className="text-blue-600 hover:underline font-poppinsSemiBold"
          >
            Contact us
          </a>{" "}
          and we&apos;ll be happy to help.
        </p>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy | Keshav Packers and Movers",
            url: "https://keshavpackersmovers.com/privacy-policy",
            description:
              "Privacy Policy for Keshav Packers and Movers, outlining data collection, usage, and protection practices for relocation services.",
            publisher: {
              "@type": "Organization",
              name: "Keshav Packers and Movers",
              url: "https://keshavpackersmovers.com",
            },
          }),
        }}
      />
    </div>
  );
}
