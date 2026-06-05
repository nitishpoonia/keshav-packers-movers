// app/terms-and-conditions/page.jsx

export async function generateMetadata() {
  return {
    title: "Terms and Conditions | Keshav Packers and Movers",
    description:
      "Read the Terms and Conditions of Keshav Packers and Movers. Understand our service agreements, liability policies, cancellation terms, and your responsibilities when booking our relocation services.",
    keywords:
      "terms and conditions packers and movers, Keshav Packers terms, relocation service agreement India, movers liability policy",
    alternates: {
      canonical: "https://keshavpackersmovers.com/terms-and-conditions",
    },
    openGraph: {
      title: "Terms and Conditions | Keshav Packers and Movers",
      description:
        "Understand the service agreement, liability, and cancellation terms when booking relocation services with Keshav Packers and Movers.",
      type: "website",
      url: "https://keshavpackersmovers.com/terms-and-conditions",
    },
  };
}

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: (
      <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium">
        By contacting us, requesting a quote, confirming a booking, or using any
        service provided by Keshav Packers and Movers, you agree to be bound by
        these Terms and Conditions. These terms form a legally binding agreement
        between you (the customer) and Keshav Packers and Movers
        (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), operating
        from Jaipur, Rajasthan, India. If you do not agree to these terms,
        please do not proceed with booking our services.
      </p>
    ),
  },
  {
    id: "services",
    title: "2. Our Services",
    content: (
      <>
        <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium mb-3">
          Keshav Packers and Movers offers the following relocation and
          logistics services across India:
        </p>
        <ul className="list-disc list-inside space-y-2 text-[16px] font-poppins font-poppinsRegular text-textMedium">
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Home Relocation:
            </span>{" "}
            Packing, loading, transportation, unloading, and unpacking of
            household goods for local and intercity moves.
          </li>
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Office Relocation:
            </span>{" "}
            Safe shifting of office furniture, equipment, and supplies with
            minimal downtime.
          </li>
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Bike & Car Transportation:
            </span>{" "}
            Safe and insured vehicle relocation by road transport or carrier.
          </li>
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Packing Services:
            </span>{" "}
            Professional packing using appropriate materials for fragile, heavy,
            and bulky items.
          </li>
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Storage Solutions:
            </span>{" "}
            Short-term and long-term storage at our warehouse facilities.
          </li>
          <li>
            <span className="font-poppinsSemiBold text-textDark">
              Transit Insurance:
            </span>{" "}
            Optional insurance coverage for goods in transit, arranged through
            our insurance partners.
          </li>
        </ul>
        <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium mt-3">
          The exact scope of service for your move will be confirmed in your
          booking agreement or service quote.
        </p>
      </>
    ),
  },
  {
    id: "booking-and-confirmation",
    title: "3. Booking & Confirmation",
    content: (
      <>
        <ul className="list-disc list-inside space-y-2 text-[16px] font-poppins font-poppinsRegular text-textMedium">
          <li>
            A booking is considered confirmed only upon receipt of an advance
            payment or written confirmation from our team via phone, WhatsApp,
            or email.
          </li>
          <li>
            The customer must provide accurate pickup and delivery addresses,
            correct floor/lift access details, and a complete inventory of goods
            to be moved at the time of booking.
          </li>
          <li>
            Any changes to the booking (date, address, item list) must be
            communicated to us at least{" "}
            <span className="font-poppinsSemiBold text-textDark">
              48 hours before the scheduled move date
            </span>
            . Changes made after this window may incur additional charges.
          </li>
          <li>
            We reserve the right to decline or reschedule a booking in cases of
            extreme weather, natural disasters, road restrictions, or other
            force majeure events.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "pricing-and-payment",
    title: "4. Pricing & Payment",
    content: (
      <>
        <ul className="list-disc list-inside space-y-2 text-[16px] font-poppins font-poppinsRegular text-textMedium">
          <li>
            All quotes provided are estimates based on the information you
            supply. Final charges may vary if the actual inventory, distance, or
            service requirements differ from what was initially stated.
          </li>
          <li>
            Additional charges may apply for extra services such as
            dismantling/reassembly of furniture, carrying goods beyond standard
            floor limits, packing materials upgrades, or long waiting time at
            pickup or delivery.
          </li>
          <li>
            An advance payment is required to confirm your booking. The balance
            is due on or before delivery unless otherwise agreed in writing.
          </li>
          <li>
            We accept payments via cash, UPI, bank transfer, or other methods as
            communicated at the time of booking.
          </li>
          <li>
            All prices are inclusive of applicable taxes unless specifically
            stated otherwise.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cancellation-and-rescheduling",
    title: "5. Cancellation & Rescheduling",
    content: (
      <>
        <ul className="list-disc list-inside space-y-2 text-[16px] font-poppins font-poppinsRegular text-textMedium">
          <li>
            Cancellations made{" "}
            <span className="font-poppinsSemiBold text-textDark">
              72 hours or more
            </span>{" "}
            before the scheduled move date will receive a full refund of any
            advance paid.
          </li>
          <li>
            Cancellations made between{" "}
            <span className="font-poppinsSemiBold text-textDark">
              24–72 hours
            </span>{" "}
            before the move date will incur a cancellation fee of up to 25% of
            the total quoted amount.
          </li>
          <li>
            Cancellations made{" "}
            <span className="font-poppinsSemiBold text-textDark">
              less than 24 hours
            </span>{" "}
            before the move, or on the day of the move, may result in forfeiture
            of the full advance payment.
          </li>
          <li>
            Rescheduling requests are subject to vehicle and crew availability.
            We will make reasonable efforts to accommodate your preferred
            alternate date at no extra charge if requested with adequate notice.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "customer-responsibilities",
    title: "6. Customer Responsibilities",
    content: (
      <>
        <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium mb-3">
          To ensure a smooth and efficient move, the customer is responsible
          for:
        </p>
        <ul className="list-disc list-inside space-y-2 text-[16px] font-poppins font-poppinsRegular text-textMedium">
          <li>
            Providing a complete, accurate, and honest inventory of all items to
            be moved at the time of booking.
          </li>
          <li>
            Informing us in advance about any fragile, valuable, or antique
            items that require special packing or handling.
          </li>
          <li>
            Ensuring clear and safe access to the property on the day of the
            move, including parking space for our vehicle and lift/staircase
            access.
          </li>
          <li>
            Disconnecting and preparing appliances (washing machines,
            refrigerators, ACs, etc.) before our team arrives, unless packing
            assistance for such items is specifically included in your booking.
          </li>
          <li>
            Being present (or having an authorized representative present) at
            both the pickup and delivery locations during the move.
          </li>
          <li>
            Verifying and signing off on the inventory checklist at both pickup
            and delivery. Any discrepancy must be reported immediately and
            before our team departs.
          </li>
          <li>
            Not including prohibited items — such as hazardous materials,
            flammable goods, illegal substances, perishable food, or live
            animals — in any consignment without prior written approval.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "liability-and-damages",
    title: "7. Liability & Damage Policy",
    content: (
      <>
        <ul className="list-disc list-inside space-y-2 text-[16px] font-poppins font-poppinsRegular text-textMedium">
          <li>
            We take utmost care in handling your goods. However, our liability
            for any loss or damage is limited to items packed by our team using
            our materials. Goods packed by the customer themselves are moved at
            the customer&apos;s own risk.
          </li>
          <li>
            Any damage claims must be reported{" "}
            <span className="font-poppinsSemiBold text-textDark">
              at the time of delivery
            </span>{" "}
            and noted on the delivery receipt. Claims raised after our team has
            departed the delivery location may not be entertained.
          </li>
          <li>
            We are not liable for damage to items that are inherently fragile,
            already damaged, or insufficiently described in the inventory (e.g.,
            glass furniture, electronics without original packaging).
          </li>
          <li>
            We are not liable for any indirect, consequential, or incidental
            losses including loss of income, business interruption, or emotional
            distress.
          </li>
          <li>
            If transit insurance was opted for, damage claims will be processed
            through the insurer as per the policy terms.
          </li>
          <li>
            Our maximum liability per booking, in the absence of transit
            insurance, is limited to the total service amount paid for that
            move.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "transit-insurance",
    title: "8. Transit Insurance",
    content: (
      <>
        <ul className="list-disc list-inside space-y-2 text-[16px] font-poppins font-poppinsRegular text-textMedium">
          <li>
            Transit insurance is optional and must be explicitly opted for at
            the time of booking. It is not included in the base service price
            unless clearly stated.
          </li>
          <li>
            Insurance coverage, premium, and claim procedures are governed by
            our partnered insurance provider&apos;s policy. We act only as a
            facilitator and are not the insurer.
          </li>
          <li>
            Claims must be filed within the timeframe specified by the insurer.
            We will assist with documentation, but the final settlement is at
            the insurer&apos;s discretion.
          </li>
          <li>
            Items of exceptional value (antiques, jewelry, artwork,
            collectibles) must be declared and may require additional coverage
            or may not be coverable under standard transit insurance.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "storage-terms",
    title: "9. Storage Services",
    content: (
      <>
        <ul className="list-disc list-inside space-y-2 text-[16px] font-poppins font-poppinsRegular text-textMedium">
          <li>
            Storage services are charged on a monthly basis. Partial months are
            billed as full months.
          </li>
          <li>
            Customers must provide at least{" "}
            <span className="font-poppinsSemiBold text-textDark">
              7 days&apos; notice
            </span>{" "}
            before retrieving stored goods to allow us to arrange logistics.
          </li>
          <li>
            We are not responsible for any deterioration of perishable or
            organic goods, or items that are inherently susceptible to
            temperature or humidity changes.
          </li>
          <li>
            Goods in storage are held at the customer&apos;s risk unless storage
            insurance is specifically arranged.
          </li>
          <li>
            If storage dues remain unpaid for more than 60 days, we reserve the
            right to dispose of or auction stored goods after providing written
            notice.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "vehicle-transport",
    title: "10. Bike & Car Transportation",
    content: (
      <>
        <ul className="list-disc list-inside space-y-2 text-[16px] font-poppins font-poppinsRegular text-textMedium">
          <li>
            The customer must hand over the vehicle with a tank that is no more
            than one-quarter full of fuel.
          </li>
          <li>
            Pre-existing damages, scratches, or dents on the vehicle must be
            documented with photographs and noted in the handover form before
            loading. We will not be liable for pre-existing damage.
          </li>
          <li>
            Vehicles are transported on open or closed carriers depending on the
            service selected. Enclosed transport provides better protection and
            may cost more.
          </li>
          <li>
            Minor surface scratches from transport strapping or open-carrier
            exposure may occur and are considered normal wear in open transport.
          </li>
          <li>
            The customer must ensure the vehicle is in running condition and
            accompany our team during vehicle loading and unloading.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "force-majeure",
    title: "11. Force Majeure",
    content: (
      <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium">
        Keshav Packers and Movers shall not be held liable for any delay,
        failure, or inability to perform services due to circumstances beyond
        our reasonable control. This includes, but is not limited to, acts of
        God, floods, fire, earthquakes, severe weather, road accidents, highway
        closures, government-mandated restrictions, civil unrest, strikes, or
        pandemics. In such events, we will inform you at the earliest
        opportunity and work with you to reschedule the service at no additional
        charge.
      </p>
    ),
  },
  {
    id: "dispute-resolution",
    title: "12. Dispute Resolution",
    content: (
      <>
        <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium mb-3">
          In the event of any dispute or grievance related to our services:
        </p>
        <ul className="list-disc list-inside space-y-2 text-[16px] font-poppins font-poppinsRegular text-textMedium">
          <li>
            Please contact us first at{" "}
            <a
              href="mailto:keshavpackerandmovers@gmail.com"
              className="text-blue-600 hover:underline"
            >
              keshavpackerandmovers@gmail.com
            </a>{" "}
            or +91 7852000465. We will make every effort to resolve your concern
            within 7 working days.
          </li>
          <li>
            If the dispute cannot be resolved amicably, it shall be subject to
            the exclusive jurisdiction of courts in{" "}
            <span className="font-poppinsSemiBold text-textDark">
              Jaipur, Rajasthan, India
            </span>
            .
          </li>
          <li>
            These Terms and Conditions are governed by the laws of India,
            including the Consumer Protection Act, 2019.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "changes-to-terms",
    title: "13. Changes to These Terms",
    content: (
      <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium">
        We reserve the right to update or modify these Terms and Conditions at
        any time. The revised terms will be posted on this page with an updated
        &ldquo;Last Updated&rdquo; date. Continued use of our services after
        changes are published constitutes your acceptance of the new terms. For
        bookings already in progress at the time of an update, the terms in
        effect at the time of booking shall apply.
      </p>
    ),
  },
  {
    id: "contact-us",
    title: "14. Contact Us",
    content: (
      <>
        <p className="text-[16px] font-poppins font-poppinsRegular text-textMedium mb-3">
          If you have any questions about these Terms and Conditions, please
          reach out to us:
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

export default function TermsAndConditionsPage() {
  const lastUpdated = "June 5, 2025";

  return (
    <div className="container mx-auto px-4 py-12 pt-6">
      {/* Header */}
      <h1 className="text-[36px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-poppins font-poppinsBold text-textDark text-center">
        Terms &amp; Conditions
      </h1>
      <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-textMedium text-center mt-4 max-w-3xl mx-auto">
        Please read these Terms and Conditions carefully before booking or using
        any service offered by Keshav Packers and Movers. These terms govern our
        relationship with you as a customer.
      </p>
      <p className="text-[14px] font-poppins font-poppinsRegular text-textMedium text-center mt-2">
        Last Updated: {lastUpdated}
      </p>

      {/* Intro Notice */}
      <div className="mt-8 max-w-3xl mx-auto bg-gray-50 border border-gray-200 rounded-lg p-5">
        <p className="text-[15px] font-poppins font-poppinsRegular text-textMedium">
          By booking our services, you acknowledge that you have read,
          understood, and agreed to these Terms and Conditions. These terms
          apply to all relocation, packing, storage, and vehicle transportation
          services offered by Keshav Packers and Movers.
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

      {/* Sections */}
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
          Have questions about our terms?{" "}
          <a
            href="/contact"
            className="text-blue-600 hover:underline font-poppinsSemiBold"
          >
            Contact us
          </a>{" "}
          and we&apos;ll be happy to clarify.
        </p>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms and Conditions | Keshav Packers and Movers",
            url: "https://keshavpackersmovers.com/terms-and-conditions",
            description:
              "Terms and Conditions for Keshav Packers and Movers relocation, packing, storage, and vehicle transportation services.",
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
