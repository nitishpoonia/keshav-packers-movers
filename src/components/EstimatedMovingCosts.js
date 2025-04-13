// src/components/EstimatedMovingCosts.js
import Accordion from "./Accordion";
import GetQuoteButton from "./GetQuoteButton";
import SpecialCard from "./SpecialCard";

export default function EstimatedMovingCosts({ scrollYProgress }) {
  const pricingData = [
    {
      title: "1BHK Home",
      prices: [
        { distance: "Up to 50km", cost: "₹7,000" },
        { distance: "Up to 110km", cost: "₹9,500" },
        { distance: "Up to 500km", cost: "₹15,000" },
        { distance: "Up to 700km", cost: "₹20,000" },
        { distance: "Across the Country", cost: "₹30,000" },
      ],
    },
    {
      title: "2BHK Home",
      prices: [
        { distance: "Up to 50km", cost: "₹11,000" },
        { distance: "Up to 110km", cost: "₹14,000" },
        { distance: "Up to 500km", cost: "₹22,000" },
        { distance: "Up to 700km", cost: "₹28,000" },
        { distance: "Across the Country", cost: "₹40,000" },
      ],
    },
    {
      title: "3BHK Home",
      prices: [
        { distance: "Up to 50km", cost: "₹15,000" },
        { distance: "Up to 110km", cost: "₹18,000" },
        { distance: "Up to 500km", cost: "₹30,000" },
        { distance: "Up to 700km", cost: "₹38,000" },
        { distance: "Across the Country", cost: "₹55,000" },
      ],
    },
    {
      title: "Bike/Car Relocation",
      prices: [
        { distance: "Up to 50km", cost: "₹3,500" },
        { distance: "Up to 110km", cost: "₹5,000" },
        { distance: "Up to 500km", cost: "₹10,000" },
        { distance: "Up to 700km", cost: "₹12,500" },
        { distance: "Across the Country", cost: "₹18,000" },
      ],
    },
    {
      title: "Office Relocation",
      prices: [
        { distance: "Up to 50km", cost: "₹20,000" },
        { distance: "Up to 110km", cost: "₹25,000" },
        { distance: "Up to 500km", cost: "₹40,000" },
        { distance: "Up to 700km", cost: "₹50,000" },
        { distance: "Across the Country", cost: "₹75,000" },
      ],
    },
  ];

  return (
    <section className="relative bg-lightPeach py-12">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-heading sm:text-[40px] md:text-[48px] lg:text-[56px] font-poppins font-poppinsBold text-textDark text-center">
          Estimated Moving Costs
        </h2>

        {/* Subtext */}
        <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-textMedium text-center mt-4 max-w-3xl mx-auto">
          Prices depend on many things, get a free quote for exact pricing.
        </p>

        {/* Accordion */}
        <div className="mt-8 max-w-3xl mx-auto">
          {pricingData.map((item, index) => (
            <Accordion key={index} title={item.title} prices={item.prices} />
          ))}
        </div>

        {/* Special Card */}
        <SpecialCard scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}
